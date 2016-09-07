class Body extends React.Component {
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
    return (
      <div>
        <div>
          <NewSkill />
        </div>
        <div>
          <AllSkills skills={this.state.skills} />
        </div>
      </div>
    )
  }
}
