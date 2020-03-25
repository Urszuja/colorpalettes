import React, { Component } from 'react';
import ColorBox from './ColorBox';

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette,
            this.props.colorId);
        console.log(this._shades);
    }

    gatherShades(palette, color){
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors){
            shades = shades.concat(
                allColors[key].filter(
                c => c.id === color
            ))
        }
        // return all shades of color
        return shades.slice(1);
    }
    render() {
        const colorboxes = this._shades.map(color =>
            <ColorBox 
            background={color.hex}
            name={color.name}
            key={color.id}
            showLink={false} />)
        return (
            <div className="Palette">
                <div className="Palette-colors">
                {colorboxes}
                </div>
                
            </div>
        )
    }
}
