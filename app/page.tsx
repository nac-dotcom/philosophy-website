"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radio,
  Phone,
  Headphones,
  Theater,
  Coffee,
  Swords,
  PenTool,
  Shapes,
  Heart,
  Smile,
  Languages,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import SectionHeader from "@/components/SectionHeader";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import FloatingShapes from "@/components/FloatingShapes";

const programs = [
  { href: "/radio", title: "راديو الفلسفة", description: "بث مباشر وحوارات فلسفية معمقة", icon: <Radio size={26} /> },
  { href: "/alo-falsafa", title: "آلو فلسفة", description: "استشارات فلسفية عبر الهاتف", icon: <Phone size={26} /> },
  { href: "/podcast", title: "البودكاست الفلسفي", description: "حلقات بودكاست أسبوعية فلسفية", icon: <Headphones size={26} /> },
  { href: "/theatre", title: "المسرح الفلسفي", description: "عروض مسرحية تناقش قضايا فلسفية", icon: <Theater size={26} /> },
  { href: "/cafe", title: "مقهى الفلسفة", description: "لقاءات مفتوحة للنقاش الفلسفي", icon: <Coffee size={26} /> },
  { href: "/debates", title: "مناظرات فلسفية", description: "مناظرات فكرية بين طلاب الفلسفة", icon: <Swords size={26} /> },
  { href: "/audio-essays", title: "الإنشاء الفلسفي المسموع", description: "نصوص فلسفية مسموعة بأسلوب أدبي", icon: <PenTool size={26} /> },
  { href: "/diagrams", title: "خطاطات فلسفية", description: "خرائط ذهنية ورسوم بيانية فلسفية", icon: <Shapes size={26} /> },
  { href: "/belonging-school", title: "مدرسة الانتماء", description: "برنامج تربوي لتعزيز الانتماء والهوية", icon: <Heart size={26} /> },
  { href: "/joy-school", title: "مدرسة الفرح", description: "برنامج تنمية إيجابية عبر الفلسفة", icon: <Smile size={26} /> },
  { href: "/audio-translations", title: "ترجمات صوتية", description: "ترجمة النصوص الفلسفية إلى العربية صوتياً", icon: <Languages size={26} /> },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-dvh flex items-center overflow-hidden">
        {/* Background image slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={heroImages[heroIndex]}
              src={heroImages[heroIndex]}
              alt="خلفية فلسفية"
              className="w-full h-full object-cover"
              loading="eager"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </AnimatePresence>
        </div>

        {/* Overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-900 via-midnight-900/70 to-midnight-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,75,0.08)_0%,transparent_70%)]" />
        <FloatingShapes />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeSlideUp} className="mb-4">
                <span className="inline-block text-[10px] tracking-[0.25em] text-gold/40 font-heading font-semibold uppercase">
                  مشروع الفلسفة للجميع
                </span>
              </motion.div>

              <motion.h1
                variants={fadeSlideUp}
                className="heading-xl text-balance mb-6"
              >
                <span className="text-gradient-gold">الضيافة المدرسية</span>
                <br />
                <span className="text-ivory/90 font-light">عبر الوساطة الفلسفية</span>
              </motion.h1>

              <motion.p
                variants={fadeSlideUp}
                className="text-ivory/70 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light"
              >
                مشروع تربوي ثقافي يهدف إلى جعل الفلسفة أسلوب حياة في المدرسة،
                عبر برامج مبتكرة تجمع بين الحوار والمسرح والإعلام الرقمي،
                لبناء أجيال مفكرة وناقدة.
              </motion.p>

              <motion.div
                variants={fadeSlideUp}
                className="flex flex-wrap gap-4"
              >
                <Link href="#programs" className="btn-primary">
                  <Sparkles size={16} />
                  اكتشف برامجنا
                </Link>
                <Link href="#vision" className="btn-outline">
                  <ArrowLeft size={16} />
                  رؤيتنا
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - decorative book illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-[420px] h-[420px] xl:w-[500px] xl:h-[500px]">
                {/* Glow behind */}
                <div className="absolute inset-0 rounded-full bg-gold/[0.04] blur-3xl" />
                <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="hero-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#d4a84b" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#d4a84b" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <circle cx="250" cy="250" r="240" stroke="#d4a84b" strokeOpacity="0.12" strokeWidth="0.5" />
                  <circle cx="250" cy="250" r="220" stroke="#d4a84b" strokeOpacity="0.08" strokeWidth="0.5" strokeDasharray="3 6" />
                  <circle cx="250" cy="250" r="200" stroke="#d4a84b" strokeOpacity="0.12" strokeWidth="0.5" />
                  <circle cx="250" cy="250" r="170" stroke="#d4a84b" strokeOpacity="0.06" strokeWidth="0.5" strokeDasharray="2 4" />
                  <circle cx="250" cy="250" r="140" stroke="#d4a84b" strokeOpacity="0.12" strokeWidth="0.5" />
                  <circle cx="250" cy="250" r="80" fill="url(#hero-grad)" stroke="#d4a84b" strokeOpacity="0.15" strokeWidth="0.5" />
                  <path d="M220 230 Q250 210 250 190 Q250 210 280 230" stroke="#d4a84b" strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
                  <path d="M220 230 L220 270 Q250 255 250 250 Q250 255 280 270 L280 230" stroke="#d4a84b" strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
                  <line x1="250" y1="190" x2="250" y2="250" stroke="#d4a84b" strokeOpacity="0.15" strokeWidth="0.8" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VISION ─── */}
      <section id="vision" className="relative py-28 md:py-40">
        <div className="absolute inset-0 bg-dark-glow" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="رؤيتنا"
            subtitle="نؤمن بأن الفلسفة ليست مجرد مادة دراسية، بل هي طريقة للتفكير والعيش. نسعى إلى خلق بيئة مدرسية تحتضن التساؤل والحوار والتأمل."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {[
              { num: "٠١", title: "التفكير الناقد", desc: "ننمي القدرة على التحليل والنقد البناء لدى التلاميذ" },
              { num: "٠٢", title: "الحوار المتحضر", desc: "نخلق فضاءات آمنة للحوار والتبادل الفكري" },
              { num: "٠٣", title: "الإبداع الفلسفي", desc: "نحول الفلسفة إلى ممارسة إبداعية حية عبر وسائل عصرية" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="glass rounded-2xl p-8 md:p-10 text-center group hover:border-gold/20 transition-all duration-500 h-full">
                  <span className="block text-3xl font-heading font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-500 mb-6">
                    {item.num}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-ivory/80 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ivory/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section id="programs" className="relative py-28 md:py-40">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="برامجنا"
            subtitle="مجموعة متكاملة من البرامج الفلسفية التربوية المبتكرة"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
            {programs.map((program, i) => (
              <ProgramCard key={program.href} {...program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── MEDIA ─── */}
      <section id="media" className="relative py-28 md:py-40">
        <div className="absolute inset-0 bg-dark-glow" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            title="المحتوى الإعلامي"
            subtitle="صور، فيديوهات، وملفات صوتية تعكس روح المشروع"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <MediaPlaceholder type="image" title="معرض الصور" />
            <MediaPlaceholder type="video" title="الفيديوهات" />
            <MediaPlaceholder type="audio" title="المكتبة الصوتية" />
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="absolute inset-0 bg-dark-glow" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center"
        >
          <SectionHeader
            title="انضم إلينا"
            subtitle="كن جزءاً من مشروعنا الفلسفي التربوي. تواصل معنا للمشاركة أو الدعم أو الاستفسار."
          />

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/#" className="btn-primary">
              <Sparkles size={16} />
              تواصل معنا
            </Link>
            <Link href="/#programs" className="btn-outline">
              استكشف البرامج
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
