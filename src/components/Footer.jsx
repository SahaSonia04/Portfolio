export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="container" style={{ opacity: .8, paddingTop: 0 }}>
      <div className="card" style={{ textAlign: 'center' }}>
        <small>© {year} Sonia Saha · Built with React & Vite</small>
      </div>
    </footer>
  )
}


