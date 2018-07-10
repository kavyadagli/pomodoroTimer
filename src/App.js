import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './form.js';

class App extends React.Component {

  render () {
    return (
      <UserForm />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// timeblock: workPeriod + breakPeriod
// intervals: Math.floor((hours*60+minutes)/(timerBlock))
// totalMinutes: timeblock*intervals
//

export default App
