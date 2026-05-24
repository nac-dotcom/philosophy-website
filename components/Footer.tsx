import Link from "next/link";

const programLinks = [
  { href: "/radio", label: "راديو الفلسفة" },
  { href: "/alo-falsafa", label: "آلو فلسفة" },
  { href: "/podcast", label: "البودكاست الفلسفي" },
  { href: "/theatre", label: "المسرح الفلسفي" },
  { href: "/cafe", label: "مقهى الفلسفة" },
  { href: "/debates", label: "مناظرات فلسفية" },
  { href: "/audio-essays", label: "الإنشاء الفلسفي المسموع" },
  { href: "/diagrams", label: "خطاطات فلسفية" },
  { href: "/belonging-school", label: "مدرسة الانتماء" },
  { href: "/joy-school", label: "مدرسة الفرح" },
  { href: "/audio-translations", label: "ترجمات صوتية" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-midnight-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-5">
              الفلسفة للجميع
            </h3>
            <p className="text-ivory/50 leading-relaxed text-sm max-w-xs">
              مشروع تربوي ثقافي يهدف إلى نشر التفكير الفلسفي عبر وسائل عصرية مبتكرة.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-gold/80 font-heading font-semibold text-xs tracking-[0.15em] mb-6 uppercase">
              البرامج
            </h4>
            <ul className="space-y-3">
              {programLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/50 hover:text-gold/70 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-gold/80 font-heading font-semibold text-xs tracking-[0.15em] mb-6 uppercase">
              المزيد
            </h4>
            <ul className="space-y-3">
              {programLinks.slice(6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/50 hover:text-gold/70 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-gold/80 font-heading font-semibold text-xs tracking-[0.15em] mb-6 uppercase">
              روابط
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/#vision" className="text-ivory/40 hover:text-gold/70 transition-colors text-sm">
                  الرؤية
                </Link>
              </li>
              <li>
                <Link href="/#programs" className="text-ivory/40 hover:text-gold/70 transition-colors text-sm">
                  البرامج
                </Link>
              </li>
              <li>
                <Link href="/#media" className="text-ivory/40 hover:text-gold/70 transition-colors text-sm">
                  المحتوى
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-ivory/40 hover:text-gold/70 transition-colors text-sm">
                  تواصل
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold-gradient mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/30 text-xs tracking-wide">
            © {new Date().getFullYear()} الفلسفة للجميع. جميع الحقوق محفوظة.
          </p>
          <p className="text-ivory/20 text-xs">
            مشروع تربوي ثقافي
          </p>
        </div>
      </div>
    </footer>
  );
}
