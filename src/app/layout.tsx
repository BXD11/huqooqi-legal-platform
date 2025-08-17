import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'حقوقي - منصة قانونية ذكية للعالم العربي',
  description: 'منصة قانونية ذكية تهدف إلى تسهيل الوصول إلى الخدمات القانونية في العالم العربي باستخدام تقنيات الذكاء الاصطناعي المتقدمة.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: 'Noto Sans Arabic', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              direction: rtl;
              text-align: right;
            }
            .hover\\:scale-105:hover {
              transform: scale(1.05);
            }
            .transition-all {
              transition: all 0.3s ease;
            }
            .backdrop-blur {
              backdrop-filter: blur(10px);
            }
            .shadow-xl {
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            .shadow-lg {
              box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  )
}