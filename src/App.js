import React, { Component } from 'react';

import Column from './components/Column';
import Row from './components/Row';
import SheetBtn from './components/SheetBtn';
import AttenBtn from './components/AttenBtn';
import reducer from './reducers/reducer';

import {createAddStudent} from './reducers/actionCreators';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: [],
      attendance: [],
      students: [],
    };

    this.dispatch = this.dispatch.bind(this);
  }
  
  dispatch(action){
    return (value) => {
      this.setState(prevState => reducer(prevState, action(value)));
    }
  }

  render() {
    return (
      <Column>
        {
          this.state.students.map(x => <h2>{x}</h2>)
        }
        <SheetBtn passUpFunc={this.dispatch(createAddStudent)}/>
      </Column>
    );
  }
}

export default App;