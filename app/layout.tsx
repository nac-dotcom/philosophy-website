import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "الفلسفة للجميع | الضيافة المدرسية عبر الوساطة الفلسفية",
  description:
    "مشروع تربوي ثقافي يهدف إلى نشر التفكير الفلسفي عبر وسائل عصرية مبتكرة: راديو، بودكاست، مسرح، مناظرات، ومقاهي فلسفية.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-midnight-900 text-ivory font-body antialiased">
        {children}
      </body>
    </html>
  );
}
