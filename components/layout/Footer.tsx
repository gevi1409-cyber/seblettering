import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--borde)',
      backgroundColor: 'var(--superficie)',
      padding: '3rem 1.5rem 2rem',
      marginTop: '6rem',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2.5rem',
      }}>

        {/* Marca */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Image src="/logo.png" alt="Seb Lettering" width={56} height={56}
            style={{ borderRadius: '50%' }} />
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            color: 'var(--texto-suave)',
            maxWidth: '220px',
          }}>
            Traduciendo memoria en arte desde 2024.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--oro)', marginBottom: '0.25rem',
          }}>Explorar</span>
          {[
            ['Biblioteca', '/biblioteca'],
            ['Autores', '/autores'],
            ['Entrelazados', '/entrelazados'],
            ['Blog', '/blog'],
          ].map(([label, href]) => (
            <Link key={href} href={href} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.85rem',
              color: 'var(--texto-suave)',
            }}>{label}</Link>
          ))}
        </div>

        {/* Contacto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--oro)', marginBottom: '0.25rem',
          }}>El sello</span>
          {[
            ['Manifiesto', '/manifiesto'],
            ['Únete', '/contacto'],
          ].map(([label, href]) => (
            <Link key={href} href={href} style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.85rem',
              color: 'var(--texto-suave)',
            }}>{label}</Link>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: '1200px', margin: '2.5rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--borde)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '0.5rem',
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
          color: 'var(--texto-suave)',
        }}>
          © {new Date().getFullYear()} Seb Lettering · EST. 2024
        </span>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem',
          fontStyle: 'italic', color: 'var(--borde)',
          filter: 'brightness(2)',
        }}>
          Lo que es real, se honra.
        </span>
      </div>
    </footer>
  )
}