import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import {Link} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PaletteStyles";

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette,
            this.props.colorId);
        this.state = { format: "hex"};
        this.changeFormat = this.changeFormat.bind(this);
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

    
    changeFormat(val){
        this.setState({
            format: val
        })
    }

    render() {
        const {format} = this.state;
        const {classes} = this.props;
        const {paletteName, emoji, id} = this.props.palette;
        const colorboxes = this._shades.map(color =>
            <ColorBox 
            background={color[format]}
            name={color.name}
            key={color.name}
            showingFullPalette={false} />)
            
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.changeFormat}
                showSlider={false}/>
                <div className={classes.PaletteColors}>
                {colorboxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${id}`}>
                        Go Back</Link>
                </div>
                </div>
                <PaletteFooter 
                paletteName={paletteName}
                emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);