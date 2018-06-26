import React from 'react';
import ReactDOM from 'react-dom';

class TimeForm extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      workPeriod: 0,
      breakPeriod: 0,
      goal: ''
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

  render () {
    return (
          <form>
        	<table>
              <tr>
                <td>
                  <p>What would you like to accomplish today?</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input className="goal" type="text" name="goal" />
                </td>
              </tr>
              <tr>
                <td className="question">
                  <p> How long will your work periods be? (25-30 minutes recommended)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="number" name="workPeriod" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>How long will your break periods be? (5-10 minutes recommended)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="number" name="breakPeriod" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>How long are you planning to study?</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="number" name="hours" onChange={this.handleChange} />
                  <label> hours </label>
                  <input type="number" name="minutes" onChange={this.handleChange} />
                  <label> minutes </label>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" value="Submit" />
                </td>
              </tr>
            </table>
          </form>
    );
  }
}

ReactDOM.render(
  <TimeForm />,
  document.getElementById('root')
);
