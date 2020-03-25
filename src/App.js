import React, { Component } from 'react';

import Palette from "./Palette";
import seedColors from "./seedColors";

import {generatePalette} from "./colorHelpers";

import {Route, Switch} from "react-router-dom";

import PaletteList from "./PaletteList";

export default class App extends Component {
  constructor(props){
    super(props);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id){
   return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/"
        render={(routeProps)=> 
          <PaletteList 
          palettes={seedColors} 
          {...routeProps}/>}/>
        <Route exact path="/palette/:id" 
        render={(routeProps)=>
        <Palette 
        palette={generatePalette(
          this.findPalette(routeProps.match.params.id)
        )}/>}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])}/>
      // </div>
    )
  }
}
