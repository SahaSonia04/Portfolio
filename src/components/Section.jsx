export default function Section({ id, title, children, action }) {
  return (
    <section className="section" id={id}>
      <header>
        <h2>{title}</h2>
        {action}
      </header>
      <div className="card">
        {children}
      </div>
    </section>
  )
}


