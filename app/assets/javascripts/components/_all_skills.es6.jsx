class AllSkills extends React.Component {
  render() {
    let skills = this.props.skills.map(skill => {
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
