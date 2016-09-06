class NewSkill extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    var name = this.name.value
    var details = this.details.value

    var request = new Request('/api/v1/skills.json')

    fetch(request, {
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( { skill: { name: name, details: details } } ) 
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))

  }

  render() {
    return (
      <div>
        <input ref={ref => this.name = ref} placeholder='Enter name of skill' />
        <input ref={ref => this.details = ref} placeholder='Details' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}
