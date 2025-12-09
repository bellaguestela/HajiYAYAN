import React from 'react'
import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">H YAYAN</h1>
                <p className="text-xs text-gray-600">Material Bangunan</p>
              </div>
            </div>
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kebijakan Privasi <span className="text-orange-500">H YAYAN</span>
              </h1>
              <p className="text-gray-600">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Pendahuluan</h2>
                <p className="text-gray-600 mb-4">
                  Selamat datang di H YAYAN. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat menggunakan layanan kami.
                </p>
                <p className="text-gray-600">
                  Dengan menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">2.1 Informasi Pribadi</h3>
                    <p className="text-gray-600">
                      Kami dapat mengumpulkan informasi pribadi seperti:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Nomor telepon</li>
                      <li>Alamat email</li>
                      <li>Alamat pengiriman</li>
                      <li>Informasi pembayaran</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">2.2 Informasi Non-Pribadi</h3>
                    <p className="text-gray-600">
                      Kami juga dapat mengumpulkan informasi non-pribadi seperti:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Alamat IP</li>
                      <li>Jenis browser</li>
                      <li>Informasi perangkat</li>
                      <li>Data penggunaan website</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
                <p className="text-gray-600 mb-4">
                  Kami menggunakan informasi yang kami kumpulkan untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memproses dan menyelesaikan pesanan Anda</li>
                  <li>Menyediakan layanan pelanggan</li>
                  <li>Mengirim informasi produk dan promosi</li>
                  <li>Meningkatkan layanan kami</li>
                  <li>Memproses pembayaran</li>
                  <li>Mengatur pengiriman produk</li>
                  <li>Mematuhi kewajiban hukum</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Berbagi Informasi</h2>
                <p className="text-gray-600 mb-4">
                  Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan persetujuan Anda</li>
                  <li>Untuk memproses pesanan (pihak pengiriman, pembayaran)</li>
                  <li>Untuk mematuhi hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan lainnya</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Keamanan Data</h2>
                <p className="text-gray-600 mb-4">
                  Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses tidak sah, penggunaan, atau perubahan. Langkah-langkah ini meliputi:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Pemantauan keamanan berkelanjutan</li>
                  <li>Update sistem keamanan secara berkala</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Hak Anda</h2>
                <p className="text-gray-600 mb-4">
                  Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses informasi pribadi Anda</li>
                  <li>Memperbarui informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda</li>
                  <li>Menolak pemasaran langsung</li>
                  <li>Meminta salinan data pribadi Anda</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file teks kecil yang disimpan di browser Anda. Kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Mempersonalisasi konten</li>
                  <li>Meningkatkan keamanan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Link ke Pihak Ketiga</h2>
                <p className="text-gray-600">
                  Website kami mungkin mengandung link ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi website tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi dari setiap website yang Anda kunjungi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Perubahan Kebijakan</h2>
                <p className="text-gray-600">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan tanggal revisi terbaru. Kami akan memberitahu Anda tentang perubahan material melalui email atau pemberitahuan di website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Kontak Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau praktik privasi kami, silakan hubungi kami:
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700"><strong>H YAYAN</strong></p>
                  <p className="text-gray-700">Kp. Belendung, Desa/Kelurahan Karangnunggal, Kec. Cibeber, Kab. Cianjur, Prov. Jawa Barat 43263</p>
                  <p className="text-gray-700">Telepon: 0813-6122-6479</p>
                  <p className="text-gray-700">Email: hyayan@materialbangunan.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 H YAYAN. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}