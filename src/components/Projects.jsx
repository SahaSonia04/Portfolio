import Section from './Section'

function Project({ name, stack, points, link, repo }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div className="item-title">
        {name}
      </div>
      <div className="item-sub">{stack}</div>
      <ul style={{ marginTop: 10, marginBottom: 0 }}>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      {(link || repo) && (
        <div className="btn-row" style={{ marginTop: 12 }}>
          {link && <a className="btn primary" href={link} target="_blank" rel="noreferrer">Live Demo</a>}
          {repo && <a className="btn ghost" href={repo} target="_blank" rel="noreferrer">Source Code</a>}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Academic & Personal Projects">
      <div className="grid">
        <Project
          name="Iris-Based Attendance System"
          stack="Python, OpenCV"
          points={[
            'Engineered a contactless authentication platform achieving 94% recognition accuracy on 200+ test samples.',
            'Generated analytical reports on error rates, improving model performance by 6% through iterative tuning.'
          ]}
          repo="#"
        />
        <Project
          name="The Spice Route-South (Restaurant Web App)"
          stack="Node.js, MongoDB"
          points={[
            'Utilized MongoDB aggregation pipelines to deliver personalized dish recommendations, boosting user engagement.',
            'Deployed on Render with CI/CD best practices via GitHub Actions.'
          ]}
          link="#"
          repo="#"
        />
        <Project
          name="Truth Detector – Fake News Detection"
          stack="Python (NLP)"
          points={[
            'Built rule-based and credibility-scoring NLP model achieving 88% F1-score on Kaggle dataset.',
            'Used Pandas for data cleansing and Matplotlib/Seaborn for exploratory analysis & visualization.'
          ]}
          repo="#"
        />
      </div>
    </Section>
  )
}


