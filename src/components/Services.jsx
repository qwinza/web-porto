import React from 'react';
import { Cpu, Palette, Database, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { cvData } from '../data/cvData';
import './Services.css';

const iconMap = {
  Cpu: <Cpu size={26} />,
  Palette: <Palette size={26} />,
  Database: <Database size={26} />,
  Zap: <Zap size={26} />
};

const serviceDeliverables = {
  "Pengembangan Custom Web App": [
    "Enterprise Management Dashboard",
    "Portal Internal & B2B Client Area",
    "Arsitektur Web Skalabel & Responsif"
  ],
  "UI/UX & Design System": [
    "Figma Design System Komprehensif",
    "High-Fidelity Interactive Prototype",
    "Standar Aksesibilitas (WCAG) & Brand Guide"
  ],
  "Arsitektur API & Database": [
    "RESTful & GraphQL API Berkinerja Tinggi",
    "Relational Database Design & Indexing",
    "Autentikasi Aman Berbasis Role & JWT"
  ],
  "Optimasi Performa": [
    "Audit Core Web Vitals (LCP, INP, CLS)",
    "Bundle Code Splitting & Caching Strategy",
    "Optimasi Kecepatan & Skor PageSpeed 95+"
  ]
};

const Services = () => {
  const services = cvData.services || [];

  const whatsappConsultUrl =
    'https://wa.me/6281949095389?text=Halo%20FAS%20Digital%20Solutions%2C%20saya%20ingin%20konsultasi%20layanan%20IT.';

  return (
    <section id="services">
      <div className="container">
        <span className="section-eyebrow fade-in-up">Layanan Kami</span>
        <h2 className="section-title fade-in-up">Solusi IT &amp; Rekayasa Perangkat Lunak</h2>
        <p className="section-subtitle fade-in-up animation-delay-100">
          Layanan pengembangan teknologi end-to-end berstandar korporat untuk mengakselerasi efisiensi operasional dan kapabilitas digital bisnis Anda.
        </p>

        <div className="services-grid fade-in-up animation-delay-200">
          {services.map((service, index) => {
            const deliverables = serviceDeliverables[service.title] || [];
            return (
              <div key={index} className="service-card glass-card">
                <div className="service-card-header">
                  <div className="service-icon-box">
                    {iconMap[service.icon] || <Cpu size={26} />}
                  </div>
                  <span className="service-badge">Enterprise</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                {deliverables.length > 0 && (
                  <ul className="service-deliverables">
                    {deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="deliverable-item">
                        <CheckCircle2 size={16} className="deliverable-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="service-card-footer">
                  <a
                    href={whatsappConsultUrl}
                    className="service-cta-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Konsultasikan Solusi Ini <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

