import React, { Component } from 'react';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Link} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import "./ColorBox.css";

import chroma from "chroma-js";

const styles = {
    ColorBox: {
        height: props =>
        props.showingFullPalette ? "25%" : "50%",
        width: "20%",
        margin: "-3.5px auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button" : {
            opacity: 1
        } 
    }, 
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.8 ? "black" : "white"
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.06 ? "white" : "black"
    },
    seeMore: {
    color: props => 
    chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    background: "rgba(255,255,255,0.3)",
    position: "absolute",
    bottom: "0px",
    border: "none",
    right: "0px",
    width: "60px",
    height: "30px",
    fontSize: "12px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "capitalize",
    },
    copyButton: {
        color: 
            props => 
            chroma(props.background).luminance >= 0.8 ? "black": "white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft:"-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    }

}

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {copied: false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState(
            {copied: true},
            () => 
            setTimeout(() => 
            this.setState({copied: false}), 1500)
        )
    }
    
    render() {
        //classes come from styles / withStyles
        const {classes, name, background, paletteId,
             id, showingFullPalette} = this.props;
        const {copied} = this.state;
        return (
            <CopyToClipboard text={background}
            onCopy={this.changeCopyState}>
            <div style={{background}}
            className={classes.ColorBox}>

            <div style={{background}}
            className={`copy-overlay 
            ${copied && "show" }`}></div>

            <div className={`copy-msg 
            ${copied && "show" }`}>
                <h1>copied!</h1>
                <p className={classes.copyText}
                >{background}</p>
            </div>


                <div className="copy-container"></div>
                <div className="box-content">
                <span className={classes.colorName}>{name}</span>
                </div>
                <button className={classes.copyButton}>Copy</button>
                {showingFullPalette && <Link to={`/palette/${paletteId}/${id}`}
                 onClick={e=>e.stopPropagation()}>
                    <span className={classes.seeMore}  >more</span>
                </Link>}
                
            </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox);