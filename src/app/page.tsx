'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Package, Truck, Shield, ChevronRight, Menu, X, Clock, Award, Users } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">H YAYAN</h1>
                <p className="text-xs text-gray-600">Material Bangunan</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-orange-500 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-orange-500 transition-colors">Tentang</a>
              <a href="#produk" className="text-gray-700 hover:text-orange-500 transition-colors">Produk</a>
              <a href="#kontak" className="text-gray-700 hover:text-orange-500 transition-colors">Kontak</a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <a href="#beranda" className="text-gray-700 hover:text-orange-500 transition-colors">Beranda</a>
                <a href="#tentang" className="text-gray-700 hover:text-orange-500 transition-colors">Tentang</a>
                <a href="#produk" className="text-gray-700 hover:text-orange-500 transition-colors">Produk</a>
                <a href="#kontak" className="text-gray-700 hover:text-orange-500 transition-colors">Kontak</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Selamat Datang di <span className="text-yellow-300">H YAYAN</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Supplier Terpercaya Material Bangunan Berkualitas
            </p>
            <p className="text-lg mb-10 text-orange-50 max-w-2xl mx-auto">
              Menyediakan berbagai macam material bangunan dengan kualitas terbaik dan harga kompetitif untuk kebutuhan proyek konstruksi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#kontak" 
                className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Hubungi Kami
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#produk" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors inline-flex items-center justify-center"
              >
                Lihat Produk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pengiriman Cepat</h3>
              <p className="text-gray-600">Melayani pengiriman material bangunan ke lokasi proyek dengan tepat waktu</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">Semua material bangunan yang kami jual memiliki kualitas terbaik dan teruji</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Produk Lengkap</h3>
              <p className="text-gray-600">Menyediakan berbagai macam material bangunan untuk kebutuhan proyek Anda</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Mengapa Memilih <span className="text-orange-500">H YAYAN</span>?
                </h2>
                <p className="text-gray-600 mb-6">
                  H YAYAN adalah supplier material bangunan terpercaya yang telah berpengalaman dalam menyediakan berbagai macam material bangunan berkualitas untuk kebutuhan proyek konstruksi Anda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Berpengalaman</h4>
                      <p className="text-gray-600">Tim profesional yang berpengalaman dalam industri material bangunan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Pelayanan Terbaik</h4>
                      <p className="text-gray-600">Customer service yang responsif dan siap membantu kebutuhan Anda</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Tepat Waktu</h4>
                      <p className="text-gray-600">Pengiriman material bangunan yang tepat waktu sesuai jadwal</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <img 
                  src="/logo.png" 
                  alt="H YAYAN Logo" 
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <p className="text-gray-600">Kp. Belendung, Karangnunggal, Cibeber, Cianjur</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p className="text-gray-600">0813-6122-6479</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <p className="text-gray-600">hyayan@materialbangunan.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produk" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Produk <span className="text-orange-500">Unggulan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai macam material bangunan berkualitas yang tersedia untuk memenuhi kebutuhan proyek konstruksi Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Semen', desc: 'Semen berkualitas tinggi untuk konstruksi' },
              { name: 'Besi Beton', desc: 'Besi beton dengan standar SNI' },
              { name: 'Pasir & Batu', desc: 'Material pasir dan batu split berkualitas' },
              { name: 'Bata Merah', desc: 'Bata merah press kuat dan tahan lama' },
              { name: 'Genteng', desc: 'Berbagai jenis genteng berkualitas' },
              { name: 'Cat', desc: 'Cat tembok dan kayu berkualitas' },
              { name: 'Pipa', desc: 'Pipa PVC dan besi untuk instalasi' },
              { name: 'Kawat', desc: 'Kawat bendrat dan berbagai jenis kawat' }
            ].map((product, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Butuh Material Bangunan?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Hubungi kami sekarang untuk penawaran harga terbaik
          </p>
          <a 
            href="#kontak" 
            className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 w-5 h-5" />
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Hubungi <span className="text-orange-500">Kami</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Siap melayani kebutuhan material bangunan untuk proyek Anda
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Informasi Kontak</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Alamat</p>
                        <p className="text-gray-600">Kp. Belendung, Desa/Kelurahan Karangnunggal, Kec. Cibeber, Kab. Cianjur, Prov. Jawa Barat 43263</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Telepon</p>
                        <p className="text-gray-600">0813-6122-6479</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">hyayan@materialbangunan.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Jam Operasional</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Senin - Jumat</span>
                      <span className="font-semibold">08:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sabtu</span>
                      <span className="font-semibold">08:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minggu</span>
                      <span className="font-semibold">Tutup</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Pesan:</strong> Untuk pemesanan dalam jumlah besar, silakan hubungi kami 1-2 hari sebelumnya untuk memastikan ketersediaan stok.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">H YAYAN</h3>
                  <p className="text-xs text-gray-400">Material Bangunan</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Supplier terpercaya material bangunan berkualitas untuk kebutuhan proyek konstruksi Anda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-500">Material Bangunan</a></li>
                <li><a href="#" className="hover:text-orange-500">Pengiriman</a></li>
                <li><a href="#" className="hover:text-orange-500">Konsultasi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-500">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-orange-500">Kebijakan Privasi</a></li>
                <li><a href="/terms" className="hover:text-orange-500">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>0813-6122-6479</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hyayan@materialbangunan.com</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Cianjur, Jawa Barat</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 H YAYAN. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}