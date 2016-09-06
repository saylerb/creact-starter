class AllSkills extends React.Component {
  constructor() {
    super()
    this.state = { skills: [] }
  }

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', response => { this.setState( {skills: response }) })
  }

  render() {
    let skills = this.state.skills.map(skill => {
      return (
        <div>
          <h3>{skill.name}</h3>
          <p>Level: {skill.level}</p>
          <p>{skill.details}</p>
        </div>
      )
    })

    return (
      <div>
        {skills}
      </div>
    )
  }
}
