import React from 'react'
import { FileText, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
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
                Syarat & Ketentuan <span className="text-orange-500">H YAYAN</span>
              </h1>
              <p className="text-gray-600">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
                <p className="text-gray-600 mb-4">
                  Selamat datang di H YAYAN. Dengan mengakses dan menggunakan website dan layanan kami, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Definisi</h2>
                <div className="space-y-2">
                  <p className="text-gray-600"><strong>"Perusahaan"</strong> mengacu pada H YAYAN, supplier material bangunan.</p>
                  <p className="text-gray-600"><strong>"Pelanggan"</strong> mengacu pada individu atau entitas yang menggunakan layanan kami.</p>
                  <p className="text-gray-600"><strong>"Produk"</strong> mengacu pada material bangunan yang kami jual.</p>
                  <p className="text-gray-600"><strong>"Layanan"</strong> mengacu pada penjualan dan pengiriman produk material bangunan.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Produk dan Layanan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">3.1 Ketersediaan Produk</h3>
                    <p className="text-gray-600">
                      Kami berusaha untuk menyediakan informasi produk yang akurat, namun ketersediaan produk dapat berubah tanpa pemberitahuan sebelumnya. Harga dan spesifikasi produk dapat berubah sewaktu-waktu.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">3.2 Kualitas Produk</h3>
                    <p className="text-gray-600">
                      Semua produk yang kami jual memenuhi standar kualitas yang berlaku di Indonesia. Kami menjamin keaslian dan kualitas produk yang kami jual.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">3.3 Pengiriman</h3>
                    <p className="text-gray-600">
                      Kami menyediakan layanan pengiriman untuk wilayah tertentu. Biaya pengiriman akan diinformasikan sebelum pemesanan dikonfirmasi. Waktu pengiriman dapat bervariasi tergantung lokasi dan ketersediaan produk.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Pemesanan dan Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">4.1 Proses Pemesanan</h3>
                    <p className="text-gray-600">
                      Pemesanan dapat dilakukan melalui telepon, email, atau langsung ke lokasi kami. Setiap pemesanan akan dikonfirmasi sebelum proses pengiriman dilakukan.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">4.2 Pembayaran</h3>
                    <p className="text-gray-600">
                      Pembayaran dapat dilakukan melalui:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Tunai (Cash on Delivery)</li>
                      <li>Transfer Bank</li>
                      <li>Pembayaran langsung di lokasi</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">4.3 Pembatalan Pesanan</h3>
                    <p className="text-gray-600">
                      Pembatalan pesanan dapat dilakukan maksimal 24 jam sebelum pengiriman. Untuk pembatalan yang dilakukan kurang dari 24 jam, mungkin akan dikenakan biaya administrasi.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Harga dan Promosi</h2>
                <p className="text-gray-600 mb-4">
                  Harga yang tercantum adalah harga berlaku dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. Promosi dan diskon berlaku sesuai dengan periode yang ditentukan dan tidak dapat digabungkan dengan promosi lainnya.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Garansi dan Pengembalian</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">6.1 Garansi Produk</h3>
                    <p className="text-gray-600">
                      Beberapa produk mungkin memiliki garansi dari produsen. Klaim garansi akan diproses sesuai dengan kebijakan masing-masing produsen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">6.2 Pengembalian Produk</h3>
                    <p className="text-gray-600">
                      Pengembalian produk dapat dilakukan jika:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Produk rusak saat diterima</li>
                      <li>Produk tidak sesuai dengan spesifikasi yang dipesan</li>
                      <li>Ada cacat produksi</li>
                    </ul>
                    <p className="text-gray-600 mt-2">
                      Pengembalian harus dilakukan maksimal 3 hari sejak produk diterima dengan kondisi produk masih utuh dan dalam kemasan asli.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Kewajiban Pelanggan</h2>
                <p className="text-gray-600 mb-4">
                  Sebagai pelanggan, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memastikan alamat pengiriman benar dan dapat diakses</li>
                  <li>Melakukan pembayaran tepat waktu</li>
                  <li>Memeriksa kondisi produk saat diterima</li>
                  <li>Melaporkan masalah atau keluhan dengan cara yang sopan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Batasan Tanggung Jawab</h2>
                <p className="text-gray-600 mb-4">
                  H YAYAN tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Keterlambatan pengiriman yang disebabkan oleh faktor di luar kendali kami (cuaca, jalan, dll)</li>
                  <li>Kerusakan yang terjadi setelah produk diterima pelanggan</li>
                  <li>Kerugian tidak langsung yang timbul dari penggunaan produk</li>
                  <li>Kesalahan spesifikasi yang disebabkan oleh informasi yang tidak akurat dari pelanggan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Kekayaan Intelektual</h2>
                <p className="text-gray-600">
                  Semua konten di website ini, termasuk namun tidak terbatas pada teks, gambar, logo, dan desain, dilindungi oleh hak cipta dan merek dagang. Tidak ada bagian dari website ini yang boleh direproduksi tanpa izin tertulis dari H YAYAN.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privasi</h2>
                <p className="text-gray-600">
                  Privasi Anda penting bagi kami. Penggunaan informasi pribadi Anda diatur oleh Kebijakan Privasi kami yang dapat diakses melalui link di website kami.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-600">
                  Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif segera setelah diposting di website. Penggunaan layanan yang berkelanjutan constitutes acceptance dari syarat yang telah diubah.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Hukum yang Berlaku</h2>
                <p className="text-gray-600">
                  Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui negosiasi terlebih dahulu, dan jika tidak mencapai kesepakatan, akan diselesaikan melalui pengadilan yang berwenang di wilayah Cianjur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Kontak Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
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