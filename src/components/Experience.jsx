import Section from './Section'

function Role({ company, role, time, points }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div className="item-title">{role} — {company}</div>
      <div className="item-sub">{time}</div>
      <ul style={{ marginTop: 10, marginBottom: 0 }}>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid">
        <Role
          company="Rinex Technologies (Remote)"
          role="Web Development Intern"
          time="Nov 2023 — Jan 2024"
          points={[
            'Developed and maintained responsive web applications using HTML, CSS, JavaScript, and related frameworks.',
            'Gained hands-on experience in front-end development, version control (Git), and basic backend integration.'
          ]}
        />
        <Role
          company="MotionCut (Remote)"
          role="Front-End Development Intern"
          time="Feb 2025 — Apr 2025"
          points={[
            'Built responsive web pages using HTML5, Tailwind CSS, and vanilla JavaScript, improving mobile load speed by 18%.',
            'Utilized Git for version control and participated in Agile sprints, contributing to 3 successful product releases.'
          ]}
        />
      </div>
    </Section>
  )
}


