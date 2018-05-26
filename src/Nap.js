import React, { Component } from 'react';
const a={
    firstname:"a",
    fun:function(){
        return this.firstname
    }
}
const b={
    firstname:"b"
}

class Nap extends Component {
  render() {
    return <h1>{a.fun}</h1>
  }
}

export default Nap;
