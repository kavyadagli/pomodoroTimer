  import React from 'react';
  import ReactDOM from 'react-dom';


  class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hours: 0,
        minutes: 0,
        minutesCounter: 0,
        secondsCounter: 0,
        workPeriod: 0,
        work: 0,
        toggleWork: true,
        breakPeriod: 0,
        breakConst: 0,
        toggleBreak: false,
        goal: '',
        isPressed: false,
        intervals: -1,
        maxIntervals: false
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleTime = this.handleTime.bind(this);
      this.handleMin = this.handleMin.bind(this);
      this.handleHours = this.handleHours.bind(this);


    }

    handleTime(event) {
      this.setState({[event.target.name]: event.target.value*60+1})
    }

    handleHours(event) {
      this.setState({[event.target.name]: event.target.value*60})
    }

    handleMin(event) {
      this.setState({[event.target.name]: event.target.value*60})
    }


   handleClick() {
     this.setState({isPressed: true})
   }

   handleChange(event) {
     this.setState({[event.target.name]: event.target.value});
   }

   leadingZero(num) {
     return num < 10 ? "0" + num : num;
   }


   componentDidMount(){
       setInterval(() => {
        if (this.state.isPressed == true) {
          const interval = Math.floor(((this.state.hours) + this.state.minutes)/(this.state.work-1 + this.state.breakConst-1));
          //alert(" intervals: " + interval + " Hours: " + this.state.hours + " minutes: " + this.state.minutes + " work: " + this.state.work + " break: " + this.state.breakConst)

          if (this.state.toggleWork == true) {

              this.setState({workPeriod: this.state.workPeriod - 1});
              let count = this.state.workPeriod;

              if (this.state.workPeriod >= 0) {
                 this.setState({minutesCounter :  Math.floor(count/60), secondsCounter : Number.parseInt(count%60,10)});
             } else {
                 this.setState({toggleWork: false, toggleBreak: true, workPeriod: this.state.work});
             }
           }


           if (this.state.toggleBreak == true) {
             alert
              this.setState({breakPeriod: this.state.breakPeriod - 1});
              let count = this.state.breakPeriod;

              if (this.state.breakPeriod >= 0) {
                 this.setState({minutesCounter :  Math.floor(count/60), secondsCounter : Number.parseInt(count%60,10)});
             } else {
                 this.setState({toggleWork: true, toggleBreak: false, breakPeriod: this.state.breakConst, intervals: this.state.intervals+1});
                 //alert("Time up? " + this.state.maxIntervals + " Intervals: " + this.state.intervals + " Actual Intervals: " + interval);

             }
           }

           if (this.state.intervals == interval) {
             this.setState({maxIntervals: true});
           }


         }
                           }, 1000);

   }


    render () {

      const isPressed = this.state.isPressed;
      let content;

      if (!isPressed){
        content =

        <form>
          <div id="descr"><h2>The Pomodoro Technique consists of timed work and rest periods to optomize  <br></br> focus and productivity. Use the timer below to help you accomplish your goals!</h2></div>

          <React.Fragment>
                <p className="formSpec">What would you like to accomplish today?</p>
                <input className="goal" type="text" name="goal" maxlength="140" onChange={this.handleChange}/>
                <p className="formSpec"> How long will your work periods be?<br></br>(25-30 minutes recommended)</p>
                <input type="number" name="workPeriod" name="work" min="0" max="59" onChange={this.handleTime}/>
                <p className="formSpec">How long will your break periods be?<br></br>(5-10 minutes recommended)</p>
                <input type="number" name="breakPeriod" name="breakConst" min="0" max="59" onChange={this.handleTime}/>
                <p className="formSpec">How long are you planning to study?</p>
                <input type="number" name="hours" min="1" max="23" onChange={this.handleHours} />
                <label> hours </label>
                <input type="number" name="minutes" min="1" max="59" onChange={this.handleMin} />
                <label> minutes </label>
                <div className="center">
                <input type="submit" value="Submit" onClick={this.handleClick}/>
              </div>
          </React.Fragment>
        </form>

      } else {


        if (this.state.maxIntervals) {
          content =
          <p className="goalDisp"> Time Up! </p>
       } else {
         content =
         <div className={this.state.toggleWork == true ? "green" : "red"}>
           <div className="result">
             <p className="goalDisp">Goal: {this.state.goal}</p>
             <h1 className="timer">{this.leadingZero(this.state.minutesCounter)}:{this.leadingZero(this.state.secondsCounter)}</h1>
           </div>
        </div>
       }

      }


      return (
        <div className="contents"> {content} </div>
      );
    }
  }

  export default UserForm
