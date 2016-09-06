class AllSkills extends React.Component {
  getInitialState() {
    return { skills: [] }
  }

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState( {skills: response }) })
  }

  render() {
    console.log("Current State:", this.state)
    return (
      <div>
        <h1>Hello! This is AllSkills</h1>
      </div>
    )
  }
}
