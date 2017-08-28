import React, { Component } from 'react';

class Band extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (event) => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.id
    })
  }
 
  render() {
    return(
      <div>
        <li>{this.props.band.text}  <button onClick={this.handleClick} >Delete</button></li>
      </div>
    );
  }
};

export default Band;
