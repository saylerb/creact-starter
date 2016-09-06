class AllSkills extends React.Component {
  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { console.table(response) })
  }

  render() {
    return (
      <div>
        <h1>Hello! This is AllSkills</h1>
      </div>
    )
  }
}
