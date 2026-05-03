"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

const heroSlides = [
  {
    image: "/images/store-reception-carousel.png",
    alt: "高端宠物洗护店前厅接待与等候区"
  },
  {
    image: "/images/store-wash-carousel.png",
    alt: "高端宠物洗护店专业洗护区"
  },
  {
    image: "/images/store-grooming-carousel.png",
    alt: "高端宠物洗护店美容修剪与吹风护理区"
  }
];
const dogWashImage =
  "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=85";
const groomingImage =
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85";
const careImage =
  "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=900&q=85";
const priceImage =
  "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85";

const services = [
  {
    title: "犬猫精致洗护",
    description: "温和沐浴、耳道清洁、指甲修剪、脚底毛处理、吹干梳通和基础体表检查。",
    image: dogWashImage,
    alt: "正在洗护的小狗",
    tags: ["低敏浴液", "深层吹干"]
  },
  {
    title: "造型修剪",
    description: "根据品种、脸型和生活习惯做造型设计，兼顾美观、舒适和日常打理难度。",
    image: groomingImage,
    alt: "宠物美容修剪",
    tags: ["圆脸造型", "夏季短修"]
  },
  {
    title: "皮毛护理",
    description: "针对换毛、打结、干燥和异味问题，提供开结、护毛、除浮毛和局部护理。",
    image: careImage,
    alt: "宠物护理用品",
    tags: ["开结护理", "护毛精华"]
  }
];

const steps = [
  ["到店评估", "记录体重、毛量、皮肤状态和性格，确认本次服务重点。"],
  ["温和洗护", "按皮毛状态选择浴液和水温，减少眼耳刺激和过度揉搓。"],
  ["吹干梳理", "使用低噪设备分层吹干，检查皮肤、脚垫和毛结残留。"],
  ["交付反馈", "同步洗护照片、注意事项和下次护理建议。"]
];

const prices = [
  {
    title: "小型犬基础洗护",
    description: "适合泰迪、比熊、博美等。",
    price: "¥88",
    items: ["洗澡吹干", "耳朵清洁", "指甲修剪"]
  },
  {
    title: "猫咪舒缓洗护",
    description: "适合短毛猫和配合度较好的长毛猫。",
    price: "¥128",
    items: ["安抚洗护", "浮毛梳理", "基础检查"]
  },
  {
    title: "全身造型修剪",
    description: "适合需要定期造型的长毛犬。",
    price: "¥198",
    items: ["基础洗护", "全身修剪", "脸型设计"]
  },
  {
    title: "深层皮毛护理",
    description: "适合换毛期、毛发干燥或轻度打结。",
    price: "¥168",
    items: ["开结梳通", "护毛护理", "除浮毛处理"]
  }
];

const reviews = [
  {
    text: "我家比熊很怕吹风，这次没有一直发抖。洗完还发了皮肤和脚垫照片，很细致。",
    avatar: "林",
    name: "林女士 · 比熊主人"
  },
  {
    text: "猫咪洗护前会先确认状态，不硬来。毛吹得很透，回家没有潮味。",
    avatar: "周",
    name: "周先生 · 布偶主人"
  },
  {
    text: "价格讲得清楚，打结加项也提前说明。修完造型比照片参考更适合我家狗。",
    avatar: "陈",
    name: "陈女士 · 泰迪主人"
  }
];

function SectionHead({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 max-md:block">
      <h2 className="m-0 max-w-2xl text-[clamp(30px,4vw,48px)] font-black leading-[1.12] tracking-normal">
        {title}
      </h2>
      <p className="m-0 max-w-md text-muted max-md:mt-3">{description}</p>
    </div>
  );
}

function BookingForm() {
  const [message, setMessage] = useState("");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const owner = String(data.get("owner") ?? "").trim();
    const service = String(data.get("service") ?? "");
    const date = String(data.get("date") ?? "");
    const arrivalTime = String(data.get("arrivalTime") ?? "");
    const time = String(data.get("time") ?? "");

    setMessage(`${owner}，已收到您的${service}预约意向：${date} ${arrivalTime}（${time}）。门店会尽快电话确认。`);
    form.reset();
  }

  const inputClass =
    "min-h-[46px] w-full rounded-lg border border-line bg-white px-3 py-2 font-sans text-ink outline-none focus:border-mint focus:ring-4 focus:ring-mint/30";
  const labelClass = "grid gap-2 text-sm font-bold text-ink";

  return (
    <form className="rounded-lg border border-line bg-white p-7 shadow-soft max-sm:p-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <label className={labelClass}>
          期望到店时间
          <input className={inputClass} name="arrivalTime" type="time" min="10:00" max="20:00" step="900" required />
        </label>
        <label className={labelClass}>
          主人姓名
          <input className={inputClass} name="owner" type="text" placeholder="请输入姓名" required />
        </label>
        <label className={labelClass}>
          联系电话
          <input className={inputClass} name="phone" type="tel" placeholder="请输入手机号" required />
        </label>
        <label className={labelClass}>
          宠物类型
          <select className={inputClass} name="pet" required defaultValue="">
            <option value="">请选择</option>
            <option>小型犬</option>
            <option>中大型犬</option>
            <option>猫咪</option>
            <option>其他宠物</option>
          </select>
        </label>
        <label className={labelClass}>
          服务项目
          <select className={inputClass} name="service" required defaultValue="">
            <option value="">请选择</option>
            <option>基础洗护</option>
            <option>造型修剪</option>
            <option>皮毛护理</option>
            <option>到店评估</option>
          </select>
        </label>
        <label className={labelClass}>
          期望日期
          <input className={inputClass} name="date" type="date" min={today} required />
        </label>
        <label className={labelClass}>
          期望时段
          <select className={inputClass} name="time" required defaultValue="">
            <option value="">请选择</option>
            <option>10:00-12:00</option>
            <option>12:00-15:00</option>
            <option>15:00-18:00</option>
            <option>18:00-20:00</option>
          </select>
        </label>
        <label className={`${labelClass} col-span-full`}>
          备注
          <textarea
            className={`${inputClass} min-h-[106px] resize-y`}
            name="note"
            placeholder="例如：怕吹风、皮肤敏感、毛发打结、需要接送等"
          />
        </label>
      </div>
      <button
        className="mt-4 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-mint-dark px-5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#286456] hover:shadow-[0_10px_24px_rgba(52,121,105,0.25)]"
        type="submit"
      >
        提交预约
      </button>
      <p className="m-0 mt-4 min-h-6 font-bold text-mint-dark" aria-live="polite">
        {message}
      </p>
    </form>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur">
        <nav
          className="mx-auto flex min-h-[72px] w-[min(1160px,calc(100%-32px))] items-center justify-between gap-6 max-md:min-h-[68px] max-md:items-start max-md:py-3"
          aria-label="主导航"
        >
          <a className="flex min-w-max items-center gap-2.5 text-xl font-black max-sm:text-[17px]" href="#top">
            <span className="grid size-10 place-items-center rounded-lg bg-mint-dark text-[23px] text-white">爪</span>
            <span>暖爪宠物洗护店</span>
          </a>
          <div className="flex items-center gap-6 text-[15px] text-muted max-md:hidden">
            <a className="hover:text-mint-dark" href="#services">
              服务
            </a>
            <a className="hover:text-mint-dark" href="#process">
              流程
            </a>
            <a className="hover:text-mint-dark" href="#pricing">
              价格
            </a>
            <a className="hover:text-mint-dark" href="#booking">
              预约
            </a>
          </div>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-mint-dark px-5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#286456] hover:shadow-[0_10px_24px_rgba(52,121,105,0.25)] max-sm:px-3 max-sm:text-sm"
            href="#booking"
          >
            立即预约
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative grid min-h-[calc(100vh-72px)] items-end overflow-hidden text-white max-md:min-h-[760px] max-sm:min-h-[720px]">
          {heroSlides.map((slide, index) => (
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover object-center transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
              sizes="100vw"
              key={slide.image}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,45,42,0.86)_0%,rgba(24,45,42,0.58)_42%,rgba(24,45,42,0.2)_100%)]" />
          <div className="relative mx-auto w-[min(1160px,calc(100%-32px))] py-[82px] pb-[70px] max-sm:py-16 max-sm:pb-12">
            <div className="max-w-[680px]">
              <p className="mb-4 inline-flex items-center gap-2 font-bold text-[#dff3ec]">
                专业洗护 · 温和安抚 · 透明可见
              </p>
              <h1 className="m-0 max-w-[620px] text-[clamp(42px,7vw,84px)] font-black leading-[1.02] tracking-normal">
                让每只毛孩子干净、舒服地回家
              </h1>
              <p className="my-6 max-w-xl text-lg text-white/90 max-sm:text-base">
                暖爪提供犬猫洗澡、造型修剪、皮毛护理和基础健康观察。独立洗护台、低噪吹风、可视化服务记录，让宠物和主人都更安心。
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex min-h-11 items-center justify-center rounded-lg bg-mint-dark px-5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#286456] hover:shadow-[0_10px_24px_rgba(52,121,105,0.25)]" href="#booking">
                  预约洗护
                </a>
                <a className="inline-flex min-h-11 items-center justify-center rounded-lg border border-line bg-white px-5 font-bold text-ink transition hover:-translate-y-0.5 hover:bg-soft hover:text-mint-dark" href="#pricing">
                  查看套餐
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3" aria-label="门店环境轮播图">
                {heroSlides.map((slide, index) => (
                  <button
                    aria-label={`查看${slide.alt}`}
                    aria-pressed={index === activeSlide}
                    className={`size-3 rounded-full border border-white/70 transition ${
                      index === activeSlide ? "bg-white" : "bg-white/25 hover:bg-white/60"
                    }`}
                    key={slide.image}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="relative mx-auto grid w-[min(1160px,calc(100%-32px))] translate-y-px grid-cols-4 gap-px bg-white/25 max-md:grid-cols-1">
            {[
              ["8年", "主理人洗护经验"],
              ["30分钟", "预约响应时间"],
              ["1宠1消毒", "工具和台面标准"],
              ["可视记录", "洗护前后状态反馈"]
            ].map(([value, label]) => (
              <div className="min-h-[94px] bg-paper/95 p-5 text-ink" key={value}>
                <strong className="block text-[26px] leading-tight">{value}</strong>
                <span className="text-sm text-muted">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-[84px] max-sm:py-16">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="从日常清洁到精细造型，一次照顾到位" description="按宠物体型、毛量、皮肤状态和性格安排洗护节奏，减少等待和应激。" />
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {services.map((service) => (
                <article className="overflow-hidden rounded-lg border border-line bg-white shadow-card" key={service.title}>
                  <Image className="aspect-[4/3] w-full object-cover" src={service.image} alt={service.alt} width={900} height={675} />
                  <div className="p-6">
                    <h3 className="mb-2 text-[22px] font-black">{service.title}</h3>
                    <p className="m-0 text-muted">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span className="rounded-full bg-soft px-2.5 py-1 text-[13px] font-bold text-mint-dark" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-soft py-[84px] max-sm:py-16" id="process">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="洗护流程清楚，宠物状态全程有反馈" description="每一步都围绕安全、干净和舒适展开，特殊情况会先与主人确认。" />
            <div className="grid grid-cols-4 gap-5 max-md:grid-cols-1">
              {steps.map(([title, description], index) => (
                <div className="min-h-[210px] border-l-4 border-mint bg-white p-6" key={title}>
                  <span className="mb-7 block text-3xl font-black leading-none text-coral">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mb-2 text-xl font-black">{title}</h3>
                  <p className="m-0 text-muted">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-[84px] max-sm:py-16">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="套餐价格公开，按体型和护理难度微调" description="以下为常规参考价，严重打结、特殊品种或敏感皮肤护理会到店评估后确认。" />
            <div className="grid grid-cols-[0.9fr_1.1fr] items-stretch gap-7 max-md:grid-cols-1">
              <div className="relative min-h-[520px] overflow-hidden rounded-lg shadow-soft max-md:min-h-[320px]">
                <Image src={priceImage} alt="洗护后的宠物狗" fill className="object-cover" sizes="(max-width: 768px) 100vw, 45vw" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(39,49,61,0.1),rgba(39,49,61,0.44))]" />
              </div>
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {prices.map((item) => (
                  <article className="rounded-lg border border-line bg-white p-6 shadow-card" key={item.title}>
                    <h3 className="mb-2 text-[22px] font-black">{item.title}</h3>
                    <p className="m-0 text-muted">{item.description}</p>
                    <div className="my-5 flex items-baseline gap-2 text-mint-dark">
                      <strong className="text-4xl leading-none">{item.price}</strong>
                      <span className="text-muted">起</span>
                    </div>
                    <ul className="m-0 list-none p-0 text-muted">
                      {item.items.map((detail) => (
                        <li className="flex gap-2 border-t border-line py-2 before:font-black before:text-mint-dark before:content-['✓']" key={detail}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-[84px] max-sm:py-16">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHead title="附近宠物主的真实选择" description="我们把预约节奏控制得更宽松，避免宠物扎堆等待。" />
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              {reviews.map((review) => (
                <article className="rounded-lg border border-line bg-white p-6 shadow-card" key={review.name}>
                  <div className="text-xl text-gold">★★★★★</div>
                  <p className="m-0 text-muted">{review.text}</p>
                  <div className="mt-6 flex items-center gap-3 font-black">
                    <span className="grid size-[42px] place-items-center rounded-full bg-coral text-white">{review.avatar}</span>
                    <span>{review.name}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7faf9] py-[84px] max-sm:py-16" id="booking">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <div className="grid grid-cols-[0.95fr_1.05fr] items-start gap-8 max-md:grid-cols-1">
              <div className="rounded-lg bg-mint-dark p-8 text-white max-sm:p-5">
                <h2 className="mb-4 text-[clamp(30px,4vw,46px)] font-black leading-[1.16]">预约到店，减少等待和宠物应激</h2>
                <p className="mb-7 text-white/85">提交信息后，门店会根据宠物体型、毛量和服务项目确认具体时间。</p>
                <div className="mt-7 grid gap-4">
                  {[
                    ["☎", "电话", "138-0000-6688"],
                    ["⌚", "营业时间", "周一至周日 10:00-20:00"],
                    ["⌂", "地址", "上海市暖爪路 88 号 1 层"]
                  ].map(([icon, title, value]) => (
                    <div className="flex items-start gap-3 text-white/90" key={title}>
                      <span>{icon}</span>
                      <div>
                        <strong className="block text-white">{title}</strong>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#25313a] py-9 text-white/80">
        <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] flex-wrap items-center justify-between gap-5">
          <div>
            <strong className="text-white">暖爪宠物洗护店</strong> · 干净、耐心、可追踪的宠物洗护体验
          </div>
          <div>© 2026 Warm Paw Pet Grooming</div>
        </div>
      </footer>
    </>
  );
}
