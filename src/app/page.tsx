export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" dir="rtl">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">ح</span>
              </div>
              <h1 className="text-3xl font-bold text-white">حقوقي</h1>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">الرئيسية</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">الخدمات</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">المحامون</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">من نحن</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            منصة <span className="text-yellow-300">حقوقي</span>
            <br />
            القانونية الذكية
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto">
            اكتشف عالماً جديداً من الخدمات القانونية المدعومة بالذكاء الاصطناعي. 
            احصل على الاستشارة القانونية المناسبة وتواصل مع أفضل المحامين في العالم العربي.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-lg transition-all transform hover:scale-105">
              ابدأ مجاناً الآن
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold rounded-xl transition-all">
              كيف تعمل المنصة؟
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition-all">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">ذكاء اصطناعي متقدم</h3>
              <p className="text-gray-200">
                تحليل ذكي للقضايا ومطابقة دقيقة مع المحامين المناسبين باستخدام أحدث تقنيات الذكاء الاصطناعي
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition-all">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-4">خبراء قانونيون معتمدون</h3>
              <p className="text-gray-200">
                شبكة واسعة من المحامين المعتمدين والمتخصصين في جميع أنحاء العالم العربي
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 hover:bg-white/20 transition-all">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4">أمان وخصوصية عالية</h3>
              <p className="text-gray-200">
                حماية متقدمة لبياناتك وقضاياك القانونية الحساسة مع أعلى معايير الأمان
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            خدماتنا المتميزة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">المطابقة الذكية</h3>
              <p className="text-gray-300">ربط العملاء بالمحامين المناسبين</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">تحليل المستندات</h3>
              <p className="text-gray-300">تحليل ذكي للعقود القانونية</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">التنبؤ بالنتائج</h3>
              <p className="text-gray-300">تقدير فرص نجاح القضايا</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">الترجمة القانونية</h3>
              <p className="text-gray-300">ترجمة متخصصة للنصوص القانونية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ابدأ رحلتك القانونية اليوم
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            انضم إلى آلاف المستخدمين الذين يثقون بمنصة حقوقي
          </p>
          <button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-12 py-4 text-xl font-bold rounded-xl shadow-xl transition-all transform hover:scale-105">
            سجل مجاناً الآن
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ml-3">
              <span className="text-xl font-bold text-blue-600">ح</span>
            </div>
            <span className="text-2xl font-bold text-white">حقوقي</span>
          </div>
          <p className="text-gray-300 mb-4">
            منصة قانونية ذكية للعالم العربي
          </p>
          <p className="text-gray-400">
            © 2024 حقوقي. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </main>
  )
}