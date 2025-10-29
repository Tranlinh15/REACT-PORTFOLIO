import './App.css'

function App() {
  return (
    <main className="min-h-dvh w-full bg-gradient-to-b from-[#f8fbff] to-[#e6efff] text-[#0f172a] dark:from-[#0a0f1f] dark:to-[#0a0f1f] dark:text-white font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-[#0a0f1f]/80 border-b border-slate-200/60 dark:border-slate-800/60 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col text-left">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">TRẦN VĂN LĨNH</h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">Công nghệ Vật lý điện tử & Tin học</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-600 transition">Giới thiệu</a>
            <a href="#skills" className="hover:text-blue-600 transition">Kỹ năng</a>
            <a href="#experience" className="hover:text-blue-600 transition">Đồ án</a>
            <a href="#contact" className="hover:text-blue-600 transition">Liên hệ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 blur-3xl"></div>
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-blue-600 dark:text-cyan-400">THÔNG TIN CÁ NHÂN</h2>
            <div className="bg-white/80 dark:bg-slate-800/80 shadow-xl rounded-2xl p-6 border border-slate-200 dark:border-slate-700 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-y-4 gap-x-3 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                <span className="font-semibold flex items-center">👤 Họ và tên:</span><span className="font-medium">Trần Văn Lĩnh</span>
                <span className="font-semibold flex items-center">🎂 Ngày sinh:</span><span className="font-medium">01/01/2003</span>
                <span className="font-semibold flex items-center">🚹 Giới tính:</span><span className="font-medium">Nam</span>
                <span className="font-semibold flex items-center">🏠 Địa chỉ:</span><span className="font-medium">Thủ Đức, TP. Hồ Chí Minh</span>
                <span className="font-semibold flex items-center">📧 Email:</span><span className="font-medium">tranlinh151103@gmail.com</span>
                <span className="font-semibold flex items-center">📞 SĐT:</span><span className="font-medium">(+84) 911 214 034</span>
                <span className="font-semibold flex items-center">💡 Sở thích:</span><span className="font-medium">Nghe nhạc, xem phim, công nghệ</span>
              </div>
            </div>
            <a href="#experience" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium shadow hover:shadow-lg transition-all">
              Xem đồ án →
            </a>
          </div>

          <div className="mx-auto relative">
            <div className="h-56 w-56 sm:h-64 sm:w-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
              <img src="src/assets/avata.JPG" alt="Avatar" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-3 py-1 rounded-lg text-xs font-medium shadow">Online</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-cyan-400">Giới thiệu</h3>
        <div className="bg-white/80 dark:bg-slate-800/80 p-6 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 leading-relaxed">
          <p>
            Sinh viên năm cuối tại Đại học Khoa học Tự nhiên – ĐHQG TP.HCM. Có kiến thức vững về linh kiện bán dẫn, điện tử và lập trình.
            Đã từng thực tập và tham gia nhiều dự án IoT, điện tử số, machine learning tại trường.
          </p>
          <p className="mt-3">
            Mong muốn phát triển trong các lĩnh vực: <span className="font-semibold text-blue-600 dark:text-cyan-400">IoT, điện tử, vi mạch</span>.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-cyan-400">Kỹ năng</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            'Python','C/C++','Java','SQL','HTML/CSS','JavaScript','React','Node.js','Git','Linux',
          ].map((skill) => (
            <div key={skill} className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-700 dark:to-slate-800 text-center font-semibold shadow-sm hover:scale-105 transition">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-cyan-400">Đồ án</h3>
        <ol className="relative border-s border-slate-300 dark:border-slate-700">
          {[
            {
              name: 'HỆ THỐNG QUẢN LÝ HỒ SƠ SINH VIÊN',
              subject: 'Lập trình hướng đối tượng (C++)',
              period: '05/2024',
              desc: 'Xây dựng hệ thống quản lý hồ sơ sinh viên: thêm, sửa, xóa, tìm kiếm, hiển thị dữ liệu.',
            },
            {
              name: 'HỆ THỐNG NHẬN DIỆN BIỂN SỐ XE',
              subject: 'Xử lý tín hiệu số (Python)',
              period: '11/2024',
              desc: 'Ứng dụng Fourier, Gauss và KNN để nhận diện và trích xuất biển số xe theo thời gian thực.',
            },
            {
              name: 'NHẬN DIỆN NGÔN NGỮ KÝ HIỆU',
              subject: 'Machine Learning (Python)',
              period: '12/2024',
              desc: 'Huấn luyện mô hình VGG16 và xử lý ảnh để nhận diện ngôn ngữ ký hiệu theo thời gian thực.',
            },
          ].map((item, idx) => (
            <li key={idx} className="ms-6 pb-10 group">
              <span className="absolute -start-3.5 mt-2 h-3.5 w-3.5 rounded-full bg-blue-500 ring-4 ring-blue-300/50 dark:ring-cyan-500/30" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <time className="text-sm text-slate-500 dark:text-slate-400">{item.period}</time>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.subject}</p>
              <p className="mt-2 text-slate-700 dark:text-slate-400">{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-cyan-400">Liên hệ</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a className="contact-item bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition" href="mailto:tranlinh151103@gmail.com">📧 tranlinh151103@gmail.com</a>
          <a className="contact-item bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition" href="tel:+84911214034">📱 (+84) 911 214 034</a>
          <a className="contact-item bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition" href="www.linkedin.com/in/tranvanlinh2003" target="_blank">💼 LinkedIn</a>
          <a className="contact-item bg-white/80 dark:bg-slate-800/80 p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition" href="https://github.com/Tranlinh15" target="_blank">💻 GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Trần Văn Lĩnh. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-blue-600 transition" href="#">Privacy</a>
            <a className="hover:text-blue-600 transition" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
