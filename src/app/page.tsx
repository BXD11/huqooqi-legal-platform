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
              <span className="text-sm bg-yellow-400 text-blue-900 px-2 py-1 rounded-full font-bold">BETA</span>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a href="#services" className="text-white hover:text-blue-200 transition-colors">الخدمات</a>
              <a href="#features" className="text-white hover:text-blue-200 transition-colors">المميزات</a>
              <a href="#about" className="text-white hover:text-blue-200 transition-colors">من نحن</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">تواصل معنا</a>
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
              شاهد كيف تعمل المنصة
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">+10,000</div>
              <div className="text-gray-200">قضية تم حلها</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">+2,500</div>
              <div className="text-gray-200">محامي معتمد</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">15</div>
              <div className="text-gray-200">دولة عربية</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" id="features">
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
      <section className="py-20 bg-white/5" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات القانونية المدعومة بالذكاء الاصطناعي لتلبية جميع احتياجاتكم القانونية
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">المطابقة الذكية</h3>
              <p className="text-gray-300">ربط العملاء بالمحامين المناسبين باستخدام خوارزميات متقدمة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">تحليل المستندات</h3>
              <p className="text-gray-300">تحليل ذكي للعقود والمستندات القانونية واستخراج النقاط المهمة</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">التنبؤ بالنتائج</h3>
              <p className="text-gray-300">تقدير فرص نجاح القضايا بناءً على البيانات التاريخية</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">الترجمة القانونية</h3>
              <p className="text-gray-300">ترجمة متخصصة ودقيقة للنصوص والمستندات القانونية</p>
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
            انضم إلى آلاف المستخدمين الذين يثقون بمنصة حقوقي للحصول على أفضل الخدمات القانونية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-12 py-4 text-xl font-bold rounded-xl shadow-xl transition-all transform hover:scale-105">
              سجل مجاناً الآن
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 px-12 py-4 text-xl font-bold rounded-xl transition-all">
              تواصل معنا
            </button>
          </div>
          <div className="flex items-center justify-center space-x-6 space-x-reverse text-gray-300">
            <div className="flex items-center">
              <span className="text-green-400 ml-2">✓</span>
              <span>تسجيل مجاني 100%</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 ml-2">✓</span>
              <span>دعم فني 24/7</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-400 ml-2">✓</span>
              <span>ضمان الرضا</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 py-12" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center ml-3">
                  <span className="text-xl font-bold text-blue-600">ح</span>
                </div>
                <span className="text-2xl font-bold text-white">حقوقي</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                منصة قانونية ذكية تهدف إلى تسهيل الوصول إلى الخدمات القانونية في العالم العربي باستخدام تقنيات الذكاء الاصطناعي المتقدمة.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">الخدمات</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">المطابقة الذكية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تحليل المستندات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التنبؤ بالنتائج</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الترجمة القانونية</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">الشركة</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الفريق</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الوظائف</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 حقوقي. جميع الحقوق محفوظة. | صُنع بـ ❤️ في العالم العربي
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}