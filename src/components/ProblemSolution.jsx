import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle, ArrowRight, Zap } from 'lucide-react';
import './ProblemSolution.css';

const ProblemSolution = () => {
  const whatsappUrl =
    'https://wa.me/6281949095389?text=Halo%20FAS%20Digital%20Solutions%2C%20saya%20ingin%20konsultasi%20solusi%20digital%20bisnis.';

  const painPoints = [
    {
      title: "Alur Kerja Manual & Lambat",
      desc: "Proses berulang memakan ratusan jam kerja tim dan rentan terhadap kesalahan manusia (human error) yang merugikan."
    },
    {
      title: "Data Tersebar & Sulit Dikontrol",
      desc: "Laporan bisnis tercecer di berbagai file Excel terpisah tanpa sinkronisasi, menyulitkan pengambilan keputusan strategis."
    },
    {
      title: "Presensi Digital Belum Standar",
      desc: "Ketiadaan portal dan company profile representatif menurunkan kepercayaan klien korporat dan peluang kemitraan besar."
    }
  ];

  const solutions = [
    {
      title: "Otomasi Alur Kerja Terintegrasi",
      desc: "Sistem mengotomatisasi proses bisnis repetitif, memangkas biaya operasional, dan mempercepat alur kerja secara signifikan."
    },
    {
      title: "Database Terpusat & Real-Time",
      desc: "Seluruh data bisnis terkonsolidasi dalam satu dashboard aman dengan role-based access dan pelaporan akurat seketika."
    },
    {
      title: "Kredibilitas Korporat Teruji",
      desc: "Presensi digital profesional berstandar enterprise yang memvalidasi reputasi perusahaan di mata klien dan mitra B2B."
    }
  ];

  return (
    <section id="problem-solution" className="problem-solution-section">
      <div className="container">
        <span className="section-eyebrow fade-in-up">Tantangan &amp; Solusi</span>
        <h2 className="section-title fade-in-up">Mengapa Memilih FAS Digital Solutions?</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Kami menjembatani kesenjangan antara tantangan operasional konvensional dengan efisiensi sistem digital modern yang siap mendorong pertumbuhan bisnis Anda.
        </p>

        <div className="comparison-grid fade-in-up animation-delay-200">
          {/* Kolom Kiri: Masalah */}
          <div className="comparison-card card-problem glass-card">
            <div className="comparison-card-header">
              <div className="card-badge badge-problem">
                <ShieldAlert size={16} />
                <span>Masalah Umum</span>
              </div>
              <span className="card-indicator indicator-problem">Tantangan Bisnis</span>
            </div>

            <div className="comparison-highlight highlight-problem">
              <p className="highlight-quote">
                "Operasional masih manual? Data tersebar di banyak Excel? Kehilangan kredibilitas karena tidak punya presensi digital profesional?"
              </p>
            </div>

            <div className="comparison-points">
              {painPoints.map((item, idx) => (
                <div key={idx} className="point-item point-problem">
                  <div className="point-icon-wrapper problem-icon">
                    <XCircle size={18} />
                  </div>
                  <div className="point-content">
                    <h4 className="point-title">{item.title}</h4>
                    <p className="point-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="comparison-footer footer-problem">
              <span className="footer-impact-text">
                ⚠️ <strong>Dampak Negatif:</strong> Pemborosan waktu, inefisiensi anggaran, dan hilangnya peluang tender berharga.
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Solusi */}
          <div className="comparison-card card-solution glass-card">
            <div className="comparison-card-header">
              <div className="card-badge badge-solution">
                <CheckCircle2 size={16} />
                <span>Solusi FAS Digital</span>
              </div>
              <span className="card-indicator indicator-solution">Solusi Strategis</span>
            </div>

            <div className="comparison-highlight highlight-solution">
              <p className="highlight-quote">
                "Kami merancang arsitektur sistem yang mengotomatisasi alur kerja Anda, memangkas biaya operasional, dan meningkatkan kepercayaan klien Anda."
              </p>
            </div>

            <div className="comparison-points">
              {solutions.map((item, idx) => (
                <div key={idx} className="point-item point-solution">
                  <div className="point-icon-wrapper solution-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="point-content">
                    <h4 className="point-title">{item.title}</h4>
                    <p className="point-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="comparison-footer footer-solution">
              <span className="footer-impact-text">
                🚀 <strong>Hasil Nyata:</strong> Efisiensi operasional terukur, data aman tersentralisasi, dan kepercayaan klien meningkat.
              </span>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="solution-banner glass-card fade-in-up animation-delay-300">
          <div className="solution-banner-content">
            <div className="banner-icon-box">
              <Zap size={24} />
            </div>
            <div className="banner-text">
              <h3 className="banner-title">Siap Mengeliminasi Inefisiensi dalam Operasional Bisnis Anda?</h3>
              <p className="banner-subtitle">
                Konsultasikan kendala alur kerja Anda sekarang dan dapatkan rancangan arsitektur sistem yang disesuaikan dengan SOP perusahaan Anda.
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            className="btn btn-primary banner-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi Kebutuhan Anda <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
