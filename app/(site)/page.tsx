import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '6rem 1.5rem',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--oro)',
            marginBottom: '1.5rem',
          }}>
            EST. 2024 · Sello Editorial Independiente
          </p>

          <h1 style={{ maxWidth: '800px' }}>
            Traduciendo<br />
            <em>Memoria</em> en Arte
          </h1>

          <p style={{
            marginTop: '2rem',
            maxWidth: '520px',
            color: 'var(--texto-suave)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
          }}>
            Un sello que honra lo real. Comunidad de autores que eligen
            la verdad sobre la ficción.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/biblioteca" style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'var(--oro)',
              color: 'var(--tinta)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
              fontWeight: 500,
            }}>
              Ver biblioteca
            </a>
            <a href="/manifiesto" style={{
              padding: '0.75rem 2rem',
              border: '1px solid var(--borde)',
              color: 'var(--texto-suave)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderRadius: '2px',
            }}>
              Leer manifiesto
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}