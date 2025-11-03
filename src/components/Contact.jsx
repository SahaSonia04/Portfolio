import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" action={<span className="badge">Open to internships</span>}>
      <div className="grid">
        <p>
          I’m currently looking for opportunities in front‑end development and data‑driven
          products. If my work aligns with what you’re building, let’s talk.
        </p>
        <div className="btn-row">
          <a className="btn primary" href="mailto:sahasonia848@gmail.com">Email</a>
          <a className="btn accent" href="https://www.linkedin.com/in/sonia-saha-b9a675293/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn ghost" href="https://github.com/SahaSonia04" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </Section>
  )
}


