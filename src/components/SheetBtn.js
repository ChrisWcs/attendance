import React, { Component } from 'react';

class SheetBtn extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange(event) {
        const {value} = event.target;
        this.setState( () => ({
            value
        }));
    }

    handleKeyUp(event) {
        if(event.key === "Enter"){
            console.log(event.key);
        }
    }

    render() {
        return (
            <input value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
        );
    }
};

export default SheetBtn;