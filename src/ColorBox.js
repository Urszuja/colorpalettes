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
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        zIndex: "10",
        transform: "scale(50)",
        position: "absolute"
    },
    copyMsg : {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
        "& h1" : {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase"
        },
        "& p" : {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    showMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in",
        transitionDelay: "0.3s"
    },


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
            className={`${classes.copyOverlay} 
            ${copied && classes.showOverlay}`}></div>

            <div className={`${classes.copyMsg} 
            ${copied && classes.showMsg}`}>
                <h1>copied!</h1>
                <p className={classes.copyText}
                >{background}</p>
            </div>
                <div className={classes.boxContent}>
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