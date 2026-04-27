import { useState, useEffect } from 'react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const [formData, setFormData] = useState({ name: '', phone: '', course: 'Frontend' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    { id: 1, name: 'Frontend', tech: 'HTML / CSS / JS / React', duration: '6 oy', price: '1 200 000', icon: '◐' },
    { id: 2, name: 'Backend', tech: 'Node.js / Python / SQL', duration: '8 oy', price: '1 500 000', icon: '◑' },
    { id: 3, name: 'Mobile Dev', tech: 'Flutter / React Native', duration: '7 oy', price: '1 400 000', icon: '◒' },
    { id: 4, name: 'UI/UX Design', tech: 'Figma / Adobe XD', duration: '5 oy', price: '1 100 000', icon: '◓' },
    { id: 5, name: 'Data Science', tech: 'Python / ML / AI', duration: '9 oy', price: '1 800 000', icon: '◉' },
    { id: 6, name: 'Cybersecurity', tech: 'Pentest / Network', duration: '8 oy', price: '1 700 000', icon: '◎' },
  ];

  const stats = [
    { value: '2500+', label: 'Bitiruvchilar' },
    { value: '95%', label: 'Ish bilan ta\'minlangan' },
    { value: '40+', label: 'Mentor o\'qituvchilar' },
    { value: '8', label: 'Yillik tajriba' },
  ];

  const handleSubmit = () => {
    if (formData.name && formData.phone) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', phone: '', course: 'Frontend' });
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0f',
      color: '#fff',
      fontFamily: "'Space Mono', 'Courier New', monospace",
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Imported Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Bebas+Neue&family=Syne:wght@400;600;800&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { background: #0a0a0f; }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 89, 0, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 89, 0, 0.6); }
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(255, 89, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 89, 0, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .course-card:hover {
          transform: translateY(-8px);
          border-color: #ff5900 !important;
        }
        
        .course-card:hover .card-icon {
          transform: rotate(180deg);
        }
        
        .cta-btn:hover {
          background: #ff5900 !important;
          color: #0a0a0f !important;
          transform: scale(1.02);
        }
        
        input:focus, select:focus {
          outline: none;
          border-color: #ff5900 !important;
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 14vw !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .nav-links { display: none !important; }
        }
      `}</style>

      {/* Animated Background Grid */}
      <div className="grid-bg" style={{
        position: 'fixed',
        inset: 0,
        opacity: 0.3,
        zIndex: 0,
        transform: `translateY(${scrollY * 0.3}px)`,
      }} />

      {/* Scanline Effect */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #ff5900, transparent)',
        animation: 'scanline 8s linear infinite',
        zIndex: 1,
        opacity: 0.5,
      }} />

      {/* NAVIGATION */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrollY > 50 ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid rgba(255, 89, 0, 0.2)' : 'none',
        zIndex: 100,
        transition: 'all 0.3s ease',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: '#ff5900',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '24px',
            color: '#0a0a0f',
            fontWeight: 'bold',
            transform: 'rotate(-5deg)',
          }}>M</div>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '24px',
            letterSpacing: '2px',
          }}>MARS<span style={{ color: '#ff5900' }}>.IT</span></span>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '32px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <a href="#courses" style={{ color: '#fff', textDecoration: 'none' }}>Kurslar</a>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>Biz haqimizda</a>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Aloqa</a>
        </div>
        <a href="#contact" className="cta-btn" style={{
          padding: '10px 20px',
          border: '1px solid #ff5900',
          color: '#ff5900',
          textDecoration: 'none',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          transition: 'all 0.3s ease',
        }}>
          Ro'yxatdan o'tish →
        </a>
      </nav>

      {/* HERO SECTION */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 5% 80px',
        zIndex: 2,
      }}>
        {/* Floating Mars Planet */}
        <div style={{
          position: 'absolute',
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ff5900, #c43d00 40%, #5a1c00 80%)',
          boxShadow: '0 0 100px rgba(255, 89, 0, 0.3), inset -50px -50px 100px rgba(0,0,0,0.5)',
          animation: 'float 6s ease-in-out infinite',
          opacity: 0.6,
          zIndex: 0,
        }}>
          {/* Orbiting dots */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#fff',
              animation: `orbit ${4 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }} />
          ))}
        </div>

        <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            border: '1px solid #ff5900',
            color: '#ff5900',
            fontSize: '11px',
            letterSpacing: '3px',
            marginBottom: '32px',
            animation: 'slideIn 0.6s ease-out',
          }}>
            ◉ TOSHKENT · O'ZBEKISTON
          </div>
          
          <h1 className="hero-title" style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(60px, 9vw, 140px)',
            lineHeight: '0.9',
            letterSpacing: '-2px',
            marginBottom: '32px',
            animation: 'slideIn 0.8s ease-out',
          }}>
            KELAJAGINGNI<br/>
            <span style={{ color: '#ff5900' }}>KOD</span>LAB OL<span style={{ animation: 'blink 1s infinite' }}>_</span>
          </h1>

          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '18px',
            lineHeight: '1.6',
            maxWidth: '560px',
            color: '#a0a0a8',
            marginBottom: '48px',
            animation: 'slideIn 1s ease-out',
          }}>
            MARS IT — Toshkentdagi yetakchi IT o'quv markazi. Real loyihalar, professional mentorlar va kafolatlangan ish o'rni bilan dasturchi bo'l.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'slideIn 1.2s ease-out' }}>
            <a href="#courses" className="cta-btn" style={{
              padding: '18px 36px',
              background: '#ff5900',
              color: '#0a0a0f',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'all 0.3s ease',
              animation: 'glow 3s ease-in-out infinite',
            }}>
              Kurslarni ko'rish
            </a>
            <a href="#contact" className="cta-btn" style={{
              padding: '18px 36px',
              background: 'transparent',
              border: '1px solid #fff',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'all 0.3s ease',
            }}>
              Bepul sinov darsi
            </a>
          </div>
        </div>

        {/* Bottom indicator */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '5%',
          fontSize: '11px',
          color: '#666',
          letterSpacing: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{ width: '40px', height: '1px', background: '#ff5900' }} />
          PASTGA SCROLL QILING
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{
        padding: '80px 5%',
        borderTop: '1px solid rgba(255, 89, 0, 0.2)',
        borderBottom: '1px solid rgba(255, 89, 0, 0.2)',
        position: 'relative',
        zIndex: 2,
        background: 'rgba(255, 89, 0, 0.02)',
      }}>
        <div className="grid-4" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              textAlign: 'left',
              borderLeft: '2px solid #ff5900',
              paddingLeft: '20px',
            }}>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(40px, 5vw, 64px)',
                color: '#ff5900',
                lineHeight: '1',
                marginBottom: '8px',
              }}>{stat.value}</div>
              <div style={{
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#a0a0a8',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES SECTION */}
      <section id="courses" style={{
        padding: '120px 5%',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#ff5900', letterSpacing: '3px', marginBottom: '16px' }}>
                [01] — KURSLARIMIZ
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(44px, 6vw, 88px)',
                lineHeight: '0.95',
                letterSpacing: '-1px',
              }}>
                Yo'nalishni<br/>tanla
              </h2>
            </div>
            <div style={{ maxWidth: '400px', fontSize: '14px', color: '#a0a0a8', lineHeight: '1.6' }}>
              Har bir kurs amaliyotga yo'naltirilgan. Real loyihalar ustida ishlab, portfolio yarating.
            </div>
          </div>

          <div className="grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {courses.map((course, i) => (
              <div
                key={course.id}
                className="course-card"
                onMouseEnter={() => setActiveCard(course.id)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  padding: '32px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '10px',
                  color: '#666',
                  letterSpacing: '1px',
                }}>
                  0{i + 1}/06
                </div>
                
                <div className="card-icon" style={{
                  fontSize: '48px',
                  color: '#ff5900',
                  marginBottom: '32px',
                  transition: 'transform 0.6s ease',
                }}>{course.icon}</div>
                
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '32px',
                  marginBottom: '8px',
                  letterSpacing: '1px',
                }}>{course.name}</h3>
                
                <div style={{
                  fontSize: '13px',
                  color: '#a0a0a8',
                  marginBottom: '32px',
                  fontFamily: "'Space Mono', monospace",
                }}>
                  &gt; {course.tech}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '12px',
                }}>
                  <div>
                    <div style={{ color: '#666', marginBottom: '4px', letterSpacing: '1px' }}>DAVOMIYLIK</div>
                    <div style={{ color: '#fff' }}>{course.duration}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#666', marginBottom: '4px', letterSpacing: '1px' }}>OYIGA</div>
                    <div style={{ color: '#ff5900', fontWeight: 'bold' }}>{course.price} so'm</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" style={{
        padding: '120px 5%',
        background: 'rgba(255, 89, 0, 0.03)',
        borderTop: '1px solid rgba(255, 89, 0, 0.1)',
        position: 'relative',
        zIndex: 2,
      }}>
        <div className="grid-2" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          maxWidth: '1400px',
          margin: '0 auto',
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: '12px', color: '#ff5900', letterSpacing: '3px', marginBottom: '16px' }}>
              [02] — NEGA MARS IT?
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(44px, 6vw, 80px)',
              lineHeight: '0.95',
              marginBottom: '32px',
              letterSpacing: '-1px',
            }}>
              Biz <span style={{ color: '#ff5900' }}>kelajak</span> dasturchilarini tayyorlaymiz
            </h2>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '16px',
              color: '#a0a0a8',
              lineHeight: '1.7',
              marginBottom: '40px',
            }}>
              MARS IT — bu shunchaki kurs emas, balki IT olamiga sayohatdir. Bizda zamonaviy texnologiyalar, real loyihalar va sanoat eksperti mentorlar bilan ishlash imkoniyati mavjud.
            </p>
            
            {[
              { num: '01', title: 'Amaliy yo\'naltirilgan', desc: 'Har bir darsda real loyihalar ustida ishlaymiz' },
              { num: '02', title: 'Mentorlik tizimi', desc: 'Har bir talabaga shaxsiy mentor biriktiriladi' },
              { num: '03', title: 'Ish bilan ta\'minlash', desc: 'Bitiruvchilarimizning 95% IT kompaniyalarda ishlaydi' },
            ].map((item) => (
              <div key={item.num} style={{
                display: 'flex',
                gap: '24px',
                padding: '20px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '32px',
                  color: '#ff5900',
                  minWidth: '50px',
                }}>{item.num}</div>
                <div>
                  <h4 style={{ fontSize: '16px', marginBottom: '6px', fontFamily: "'Syne', sans-serif", fontWeight: '600' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#a0a0a8', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            position: 'relative',
            aspectRatio: '1',
            background: 'linear-gradient(135deg, #1a1a24 0%, #0a0a0f 100%)',
            border: '1px solid rgba(255, 89, 0, 0.3)',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}>
            {/* Terminal-like display */}
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#a0a0a8' }}>
              <div style={{ color: '#ff5900', marginBottom: '8px' }}>$ mars-it --status</div>
              <div>&gt; Manzil: Toshkent shahri</div>
              <div>&gt; Tartib: 24/7 online qo'llab-quvvatlash</div>
              <div>&gt; Format: Offline + Online hybrid</div>
              <div>&gt; Sertifikat: Xalqaro tan olingan</div>
              <div style={{ marginTop: '12px', color: '#ff5900' }}>
                &gt; Status: <span style={{ animation: 'blink 1s infinite' }}>● ACTIVE</span>
              </div>
            </div>

            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(40px, 8vw, 100px)',
              lineHeight: '0.9',
              color: '#ff5900',
              opacity: 0.9,
              letterSpacing: '-2px',
            }}>
              SINCE<br/>2018
            </div>

            {/* Decorative corner */}
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '40px',
              height: '40px',
              border: '1px solid #ff5900',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" style={{
        padding: '120px 5%',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ fontSize: '12px', color: '#ff5900', letterSpacing: '3px', marginBottom: '16px' }}>
              [03] — RO'YXATDAN O'TISH
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(44px, 6vw, 88px)',
              lineHeight: '0.95',
              letterSpacing: '-1px',
              marginBottom: '20px',
            }}>
              Bepul sinov darsi<br/>uchun yozil
            </h2>
            <p style={{ color: '#a0a0a8', fontSize: '15px' }}>
              Operatorlarimiz 30 daqiqa ichida siz bilan bog'lanishadi
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 89, 0, 0.3)',
            padding: '48px',
          }}>
            <div style={{ display: 'grid', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#ff5900', marginBottom: '10px', letterSpacing: '2px' }}>
                  ISMINGIZ *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ali Valiyev"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '15px',
                    fontFamily: "'Space Mono', monospace",
                    transition: 'border-color 0.3s ease',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#ff5900', marginBottom: '10px', letterSpacing: '2px' }}>
                  TELEFON RAQAM *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+998 (90) 123-45-67"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '15px',
                    fontFamily: "'Space Mono', monospace",
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', color: '#ff5900', marginBottom: '10px', letterSpacing: '2px' }}>
                  YO'NALISH
                </label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: '#0a0a0f',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    fontSize: '15px',
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {courses.map(c => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className="cta-btn"
                style={{
                  padding: '20px',
                  background: submitted ? '#22c55e' : '#ff5900',
                  border: 'none',
                  color: '#0a0a0f',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  cursor: 'pointer',
                  fontFamily: "'Space Mono', monospace",
                  transition: 'all 0.3s ease',
                  marginTop: '12px',
                }}
              >
                {submitted ? '✓ ARIZA QABUL QILINDI' : 'YUBORISH →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '60px 5% 40px',
        borderTop: '1px solid rgba(255, 89, 0, 0.2)',
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '28px',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}>MARS<span style={{ color: '#ff5900' }}>.IT</span></div>
            <p style={{ fontSize: '13px', color: '#a0a0a8', lineHeight: '1.6' }}>
              Toshkentdagi yetakchi IT o'quv markazi
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: '11px', color: '#ff5900', letterSpacing: '2px', marginBottom: '16px' }}>MANZIL</h5>
            <p style={{ fontSize: '13px', color: '#a0a0a8', lineHeight: '1.7' }}>
              Toshkent shahri,<br/>
              Mirzo Ulug'bek tumani,<br/>
              Buyuk Ipak Yo'li ko'chasi 24
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: '11px', color: '#ff5900', letterSpacing: '2px', marginBottom: '16px' }}>ALOQA</h5>
            <p style={{ fontSize: '13px', color: '#a0a0a8', lineHeight: '1.7' }}>
              +998 (71) 200-00-00<br/>
              info@marsit.uz<br/>
              t.me/marsit_uz
            </p>
          </div>
          <div>
            <h5 style={{ fontSize: '11px', color: '#ff5900', letterSpacing: '2px', marginBottom: '16px' }}>ISH VAQTI</h5>
            <p style={{ fontSize: '13px', color: '#a0a0a8', lineHeight: '1.7' }}>
              Du - Sha: 09:00 - 21:00<br/>
              Yak: 10:00 - 18:00
            </p>
          </div>
        </div>
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '11px',
          color: '#666',
          letterSpacing: '1px',
        }}>
          <div>© 2026 MARS IT — BARCHA HUQUQLAR HIMOYALANGAN</div>
          <div>MADE IN TASHKENT · UZBEKISTAN ◉</div>
        </div>
      </footer>
    </div>
  );
}