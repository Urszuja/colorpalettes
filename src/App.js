import React, { Component } from 'react';

import Palette from "./Palette";
import seedColors from "./seedColors";

import {generatePalette} from "./colorHelpers";

import {Route, Switch} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/"
        render={()=> 
        <h1>palette list goes here</h1>}/>
        <Route exact path="/palette/:id" 
        render={()=>
        <h1>some palette</h1>}/>
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    )
  }
}
