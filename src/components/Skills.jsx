import Section from './Section'

const skills = {
  Languages: ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'PHP', 'SQL'],
  Frameworks: ['Node.js', 'React (academic)'],
  Databases: ['MySQL', 'MongoDB'],
  Tools: ['VS Code', 'GitHub', 'Jupyter Notebook'],
  Other: ['Team Work', 'Communication', 'Adaptability', 'Leadership']
}

function SkillRow({ label, items }) {
  return (
    <div>
      <div className="item-title" style={{ marginBottom: 6 }}>{label}</div>
      <div className="skills">
        {items.map(s => (
          <span key={s} className="badge">{s}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid">
        {Object.entries(skills).map(([k, v]) => (
          <SkillRow key={k} label={k} items={v} />
        ))}
      </div>
    </Section>
  )
}


