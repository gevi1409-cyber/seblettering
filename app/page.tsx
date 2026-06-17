"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ═══ HERO — El archivo se abre ═══ */}
        <section
          style={{
            minHeight: "100vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            position: "relative",
            borderBottom: "1px solid var(--borde)",
          }}
        >
          {/* Columna izquierda — texto */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "8rem 4rem 8rem 8rem",
              borderRight: "1px solid var(--borde)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "3rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  backgroundColor: "var(--lacre)",
                }}
              />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--lacre)",
                }}
              >
                Notaría del Alma · Est. 2024
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                marginBottom: "2rem",
                color: "var(--pergamino)",
              }}
            >
              Lo que
              <br />
              es real,
              <br />
              <em style={{ color: "var(--oro)" }}>se honra.</em>
            </h1>

            <p
              style={{
                fontFamily: "Lora, serif",
                fontSize: "1rem",
                lineHeight: 1.9,
                color: "var(--texto-suave)",
                maxWidth: "380px",
                marginBottom: "3rem",
              }}
            >
              Un sello que certifica la conexión entre autor, historia y lector.
              Aquí las memorias no se pierden — se convierten en legado.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                maxWidth: "280px",
              }}
            >
              <Link
                href="/biblioteca"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                  backgroundColor: "var(--lacre)",
                  color: "var(--pergamino)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span>Entrar al archivo</span>
                <span>→</span>
              </Link>
              <Link
                href="/entrelazados"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.25rem",
                  border: "1px solid var(--borde)",
                  color: "var(--texto-suave)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span>Ver Entrelazados</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Columna derecha — sello grande */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Círculo decorativo de fondo */}
            <div
              style={{
                position: "absolute",
                width: "480px",
                height: "480px",
                borderRadius: "50%",
                border: "1px solid var(--borde)",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "380px",
                height: "380px",
                borderRadius: "50%",
                border: "1px solid var(--borde)",
                opacity: 0.5,
              }}
            />
            <Image
              src="/logo.png"
              alt="Sello Seb Lettering"
              width={320}
              height={320}
              style={{
                borderRadius: "50%",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 0 40px rgba(201, 168, 76, 0.15))",
                mixBlendMode: "multiply",
              }}
              priority
            />
          </div>
        </section>

        {/* ═══ FRANJA — Qué es el sello ═══ */}
        <section
          style={{
            borderBottom: "1px solid var(--borde)",
            padding: "2rem 8rem",
            display: "flex",
            alignItems: "center",
            gap: "4rem",
            backgroundColor: "var(--superficie)",
            overflowX: "auto",
          }}
        >
          {[
            { num: "11", label: "Autores en Entrelazados" },
            { num: "3", label: "Libros publicados" },
            { num: "2024", label: "Año de fundación" },
            { num: "∞", label: "Historias por honrar" },
          ].map(({ num, label }) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "1rem",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "2.5rem",
                  fontWeight: 600,
                  color: "var(--oro)",
                }}
              >
                {num}
              </span>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--texto-suave)",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </section>

        {/* ═══ DOS PUERTAS — Autores / Lectores ═══ */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid var(--borde)",
            minHeight: "480px",
          }}
        >
          {/* Puerta autor */}
          <Link
            href="/contacto"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "4rem",
              borderRight: "1px solid var(--borde)",
              position: "relative",
              overflow: "hidden",
              textDecoration: "none",
              transition: "background-color 0.3s",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--superficie)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <span
              style={{
                position: "absolute",
                top: "3rem",
                right: "3rem",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "6rem",
                fontWeight: 700,
                color: "var(--borde)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              I
            </span>
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--lacre)",
                  marginBottom: "1rem",
                }}
              >
                Para autores
              </p>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  color: "var(--pergamino)",
                }}
              >
                Tu historia
                <br />
                merece el sello.
              </h2>
              <p
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "0.9rem",
                  color: "var(--texto-suave)",
                  lineHeight: 1.8,
                  maxWidth: "320px",
                  marginBottom: "2rem",
                }}
              >
                Únete a la comunidad. Tu libro gana visibilidad, entrevista en
                Entrelazados y el respaldo de un colectivo real.
              </p>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--oro)",
                }}
              >
                Quiero el sello →
              </span>
            </div>
          </Link>

          {/* Puerta lector */}
          <Link
            href="/biblioteca"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "4rem",
              position: "relative",
              overflow: "hidden",
              textDecoration: "none",
              transition: "background-color 0.3s",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--superficie)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <span
              style={{
                position: "absolute",
                top: "3rem",
                right: "3rem",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "6rem",
                fontWeight: 700,
                color: "var(--borde)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              II
            </span>
            <div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--lacre)",
                  marginBottom: "1rem",
                }}
              >
                Para lectores
              </p>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  color: "var(--pergamino)",
                }}
              >
                Detrás del libro
                <br />
                hay una vida.
              </h2>
              <p
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "0.9rem",
                  color: "var(--texto-suave)",
                  lineHeight: 1.8,
                  maxWidth: "320px",
                  marginBottom: "2rem",
                }}
              >
                Cada libro con el sello de seb.lettering tiene un trasfondo más
                allá de las páginas. Descubre la historia detrás de la historia.
              </p>
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--oro)",
                }}
              >
                Explorar biblioteca →
              </span>
            </div>
          </Link>
        </section>

        {/* ═══ ENTRELAZADOS — Teaser ═══ */}
        <section
          style={{
            padding: "6rem 8rem",
            borderBottom: "1px solid var(--borde)",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--lacre)",
                marginBottom: "1.5rem",
              }}
            >
              Temporada 1
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 3vw, 2.5rem)",
                marginBottom: "1.5rem",
              }}
            >
              Entrelazados
            </h2>
            <p
              style={{
                fontFamily: "Lora, serif",
                fontSize: "0.95rem",
                color: "var(--texto-suave)",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              Once autores. Once conversaciones sin filtro sobre el proceso
              creativo, la técnica y la vivencia humana que sostiene cada página
              escrita.
            </p>
            <Link
              href="/entrelazados"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--oro)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Ver todos los episodios →
            </Link>
          </div>

          {/* Grid de episodios placeholder */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              backgroundColor: "var(--borde)",
              border: "1px solid var(--borde)",
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "var(--tinta)",
                  padding: "1.5rem",
                  aspectRatio: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "0.7rem",
                    color: "var(--texto-suave)",
                    letterSpacing: "0.1em",
                  }}
                >
                  EP. {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ FRASE CIERRE ═══ */}
        <section
          style={{
            padding: "8rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Image
            src="/logo.png"
            alt="Sello"
            width={80}
            height={80}
            style={{ borderRadius: "50%", opacity: 0.6 }}
          />
          <blockquote
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--texto-suave)",
              maxWidth: "640px",
              lineHeight: 1.4,
            }}
          >
            "Cada vida narrada es un capítulo
            <br />
            que le da sentido a este colectivo."
          </blockquote>
          <Link
            href="/manifiesto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--lacre)",
            }}
          >
            Leer el manifiesto completo →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
