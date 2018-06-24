class TimeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert('Intervals: ' + Math.floor(((+this.state.hours*60) + (+this.state.minutes))/30) );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="number" name="hours" onChange={this.handleChange} />
        <label> hours </label>
        <input type="number" name="minutes" onChange={this.handleChange} />
        <label> minutes </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <TimeForm />,
  document.getElementById('root')
);
