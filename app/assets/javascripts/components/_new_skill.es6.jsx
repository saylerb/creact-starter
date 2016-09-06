class NewSkill extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let name = this.name
    let details = this.details

    console.log(name, details)
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
