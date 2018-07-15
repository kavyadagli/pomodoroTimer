import React from 'react';
import ReactDOM from 'react-dom';

class PomodoroTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: 0,
      minutes: 0,
      workPeriod: 0,
      breakPeriod: 0,
      goal: '',
      isPressed: true
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.hangleGoal = this.handleGoal.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleGoal(event){
    this.setState({goal: event.target.goal})
  }

  handleSubmit(event) {
    //idk
  }

  handleClick(){
    this.setState({isPressed: false});
 }

  render () {
    const isPressed = this.state.isPressed;
    let content;

    if (isPressed) {
      content =
        <form>
          <div id="descr"><h2>The Pomodoro Technique consists of timed work and rest periods to optomize  <br></br> focus and productivity. Use the timer below to help you accomplish your goals!</h2></div>
        <table>
            <tr>
              <td>
                <p className="formSpec">What would you like to accomplish today?</p>
              </td>
            </tr>
            <tr>
              <td>
                <input className="goal" type="text" name="goal" maxlength="140" onChange={this.handleChange}/>
              </td>
            </tr>
            <tr>
              <td className="question">
                <p className="formSpec"> How long will your work periods be?<br></br>(25-30 minutes recommended)</p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="workPeriod" min="0" max="59"/>
              </td>
            </tr>
            <tr>
              <td>
                <p className="formSpec">How long will your break periods be?<br></br>(5-10 minutes recommended)</p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="breakPeriod" min="0" max="59"/>
              </td>
            </tr>
            <tr>
              <td>
                <p className="formSpec">How long are you planning to study?</p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" name="hours" min="1" max="23" onChange={this.handleChange} />
                <label> hours </label>
                <input type="number" name="minutes" min="1" max="59" onChange={this.handleChange} />
                <label> minutes </label>
              </td>
            </tr>
            <tr>
              <td className="enter">
                <input type="submit" value="Submit" onClick={this.handleClick}/>
              </td>
            </tr>
          </table>
        </form>;
    } else {
      content =
      <p className="goalDisp">Goal: {this.state.goal}</p>;
      <h4>{Minutes} : Seconds</h4>
    }
    return (
      <div className="contents">
        {content}
      </div>
    );
  }
}

ReactDOM.render(
  <PomodoroTimer />,
  document.getElementById('root')
);

// timeblock: workPeriod + breakPeriod
// intervals: Math.floor((hours*60+minutes)/(timerBlock))
// totalMinutes: timeblock*intervals
//

export default App
