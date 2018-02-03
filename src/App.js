import React, { Component } from 'react';

import Column from './components/Column';
import Row from './components/Row';

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
      <Row>
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </Row>
    );
  }
}

export default App;
