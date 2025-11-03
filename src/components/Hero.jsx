export default function Hero() {
  return (
    <section className="hero card" id="top">
      <div className="hero-grid">
        <div>
          <h1 className="title"><span className="display-name">Sonia Saha</span> — Results‑driven CS undergrad • Front‑end & Data</h1>
          <p>
            B.Tech (2026) with hands‑on experience building responsive UIs, transforming data into
            insights, and collaborating in Agile teams. Proficient in HTML5, CSS3, JavaScript, Python,
            SQL, and modern frameworks.
          </p>
          <div className="meta">
            <span>Bengaluru, Karnataka</span>
            <span>CGPA 7.0</span>
          </div>
          <div className="links btn-row">
            <a className="btn primary" href="mailto:sahasonia848@gmail.com" rel="noreferrer">Email</a>
            <a className="btn accent" href="https://www.linkedin.com/in/sonia-saha-b9a675293/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href="https://github.com/SahaSonia04" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <img
          src="/profile.png"
          alt="Sonia Saha profile"
          className="avatar"
          onError={(e) => {
            // Try alternate common filename, then fallback to placeholder
            const img = e.currentTarget
            if (!img.dataset.triedJpg) {
              img.dataset.triedJpg = '1'
              img.src = '/profile.jpg'
            } else {
              img.onerror = null
              img.src = '/profile-placeholder.svg'
            }
          }}
        />
      </div>
    </section>
  )
}


