import React from 'react';
import { Search, Layout, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import './Methodology.css';

const STEPS = [
  {
    number: "01",
    title: "Discovery & Briefing",
    subtitle: "Analisis Kebutuhan Bisnis",
    desc: "Kami menggali alur operasional, memetakan tantangan proses bisnis Anda, dan menyusun Dokumen Spesifikasi Kebutuhan Sistem (SRS) yang komprehensif.",
    icon: <Search size={24} />,
    deliverable: "Dokumen SRS & Blueprint Sistem"
  },
  {
    number: "02",
    title: "UI/UX Prototyping",
    subtitle: "Desain Antarmuka & Alur",
    desc: "Perancangan arsitektur antarmuka dan clickable prototype di Figma. Anda dapat menguji dan menyetujui alur kerja sistem sebelum penulisan kode dimulai.",
    icon: <Layout size={24} />,
    deliverable: "Interactive Figma Prototype"
  },
  {
    number: "03",
    title: "Development & QA",
    subtitle: "Rekayasa Sistem & Pengujian",
    desc: "Pembangunan aplikasi dengan arsitektur scalable, standar keamanan korporat, serta pengujian menyeluruh (Quality Assurance) fungsional dan performa.",
    icon: <Code2 size={24} />,
    deliverable: "Clean Source Code & Laporan QA"
  },
  {
    number: "04",
    title: "Deployment & Handover (BAST)",
    subtitle: "Go-Live & Serah Terima Resmi",
    desc: "Peluncuran ke production server/cloud, pelatihan operasional staf Anda, serta penyerahan dokumentasi teknis dan Berita Acara Serah Terima (BAST) resmi.",
    icon: <Rocket size={24} />,
    deliverable: "Sistem Live, Panduan & BAST Resmi"
  }
];

const Methodology = () => {
  return (
    <section id="methodology" className="methodology-section">
      <div className="container">
        <span className="section-eyebrow fade-in-up">SOP Agensi</span>
        <h2 className="section-title fade-in-up">Metodologi Kerja</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Standar Operasional Prosedur (SOP) 4 langkah terstruktur untuk menjamin transparansi, ketepatan jadwal rilis, dan kualitas arsitektur sistem perusahaan Anda.
        </p>

        <div className="methodology-grid fade-in-up animation-delay-200">
          {STEPS.map((step, idx) => (
            <div key={idx} className="methodology-card glass-card">
              <div className="methodology-card-top">
                <span className="step-number">{step.number}</span>
                <div className="step-icon-box">
                  {step.icon}
                </div>
              </div>

              <div className="methodology-card-body">
                <span className="step-phase-badge">{step.subtitle}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>

              <div className="methodology-card-footer">
                <div className="step-deliverable-item">
                  <CheckCircle2 size={15} className="step-deliverable-icon" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
