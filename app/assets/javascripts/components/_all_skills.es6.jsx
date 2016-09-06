class AllSkills extends React.Component {
  constructor() {
    super()
    this.state = { skills: [] }
  }

  componentDidMount() {
    let request = new Request('/api/v1/skills.json', { method: 'GET' })

    fetch(request)
      .then(response => response.json())
      .then(response => this.setState( {skills: response }) )
      .catch(err => console.log(err))
  }

  render() {
    let skills = this.state.skills.map(skill => {
      return (
        <div key={skill.id}>
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
