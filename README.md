# منصة حقوقي - Huqooqi Legal Platform

![Huqooqi Logo](https://via.placeholder.com/150x60/4F46E5/FFFFFF?text=حقوقي)

منصة قانونية ذكية تهدف إلى تسهيل الوصول إلى الخدمات القانونية في العالم العربي باستخدام تقنيات الذكاء الاصطناعي المتقدمة.

## 🌟 المميزات الرئيسية

### 🔍 المطابقة الذكية
- ربط العملاء بالمحامين المناسبين باستخدام خوارزميات الذكاء الاصطناعي
- تحليل وصف القضية تلقائياً ومطابقة دقيقة مع التخصصات

### 📄 تحليل المستندات
- تحليل ذكي للعقود والمستندات القانونية
- استخراج النقاط الرئيسية وتحليل المخاطر

### 🔮 التنبؤ بالنتائج
- تقدير فرص نجاح القضايا بناءً على السوابق القضائية
- تحليل البيانات التاريخية والإحصائيات

### 🌐 الترجمة القانونية
- ترجمة متخصصة للنصوص القانونية
- الحفاظ على المصطلحات الدقيقة والسياق القانوني

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 15, TypeScript, TailwindCSS
- **UI Components**: Radix UI, Custom Components
- **AI Integration**: OpenAI API, Google Gemini
- **Authentication**: NextAuth.js
- **Database**: Prisma ORM
- **Deployment**: Vercel, Cloudflare

## 🚀 البدء السريع

### المتطلبات الأساسية
- Node.js 18+ 
- npm أو yarn
- حساب OpenAI API (اختياري للذكاء الاصطناعي)

### التثبيت

```bash
# استنساخ المشروع
git clone https://github.com/BXD11/huqooqi-legal-platform.git
cd huqooqi-legal-platform

# تثبيت التبعيات
npm install

# نسخ ملف البيئة
cp .env.example .env.local

# تشغيل السيرفر المحلي
npm run dev
```

### إعداد متغيرات البيئة

```env
# قاعدة البيانات
DATABASE_URL="postgresql://username:password@localhost:5432/huqooqi"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# APIs الذكاء الاصطناعي
OPENAI_API_KEY="your-openai-api-key"
GOOGLE_AI_API_KEY="your-google-ai-api-key"
```

## 📱 معاينة المشروع

🌟 **المعاينة المباشرة**: https://3000-i7jnm7comidsc5uqbocqv-6532622b.e2b.dev

**الحالة**: ✅ يعمل الآن - تم تشغيله بنجاح على الخادم!

## 🏗️ هيكل المشروع

```
huqooqi/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # مكونات React
│   │   ├── ui/                # مكونات واجهة المستخدم
│   │   ├── forms/             # نماذج الإدخال
│   │   ├── layout/            # مكونات التخطيط
│   │   └── sections/          # أقسام الصفحات
│   ├── lib/                   # أدوات مساعدة
│   ├── hooks/                 # React Hooks
│   ├── data/                  # بيانات ثابتة
│   └── types/                 # تعريفات TypeScript
├── public/                    # ملفات ثابتة
└── docs/                      # التوثيق
```

## 🎯 خارطة الطريق

### المكتمل ✅
- [x] تصميم واجهة المستخدم الرئيسية
- [x] نظام المصادقة الأساسي
- [x] هيكل المشروع والإعدادات
- [x] دعم اللغة العربية RTL

### قيد التطوير 🚧
- [ ] تكامل الذكاء الاصطناعي
- [ ] لوحة تحكم المحامين
- [ ] نظام الدفع
- [ ] تطبيق الهاتف المحمول

### مخطط مستقبلي 📋
- [ ] محرك بحث متقدم
- [ ] نظام التقييم والمراجعات
- [ ] دعم لغات إضافية
- [ ] تكامل مع المحاكم الإلكترونية

## 🤝 المساهمة

نرحب بمساهماتكم! يرجى قراءة [دليل المساهمة](CONTRIBUTING.md) قبل البدء.

### خطوات المساهمة:
1. Fork المشروع
2. إنشاء branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى Branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## 📞 التواصل

- **الموقع**: [huqooqi.com](https://huqooqi.com)
- **البريد الإلكتروني**: info@huqooqi.com
- **تويتر**: [@HuqooqiPlatform](https://twitter.com/HuqooqiPlatform)

## 🙏 شكر وتقدير

- [Next.js](https://nextjs.org/) - إطار عمل React
- [TailwindCSS](https://tailwindcss.com/) - إطار عمل CSS
- [Radix UI](https://www.radix-ui.com/) - مكونات واجهة المستخدم
- [OpenAI](https://openai.com/) - واجهات برمجة الذكاء الاصطناعي

---

<div align="center">
  <p>صُنع بـ ❤️ في العالم العربي</p>
  <p>© 2024 منصة حقوقي. جميع الحقوق محفوظة.</p>
</div>