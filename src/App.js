import React, { Component } from 'react';

import Column from './components/Column';
import Row from './components/Row';
import SheetBtn from './components/SheetBtn';

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
  
  dispatch(){

  }

  render() {
    return (
      <Column>
        <SheetBtn/>
      </Column>
    );
  }
}

export default App;