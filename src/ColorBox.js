import React, { Component } from 'react'

import "./ColorBox.css"

export default class ColorBox extends Component {
    render() {
        return (
            <div style={{background: this.props.background }}
            className="ColorBox">
                <h2>{this.props.background}</h2>
                <h3>{this.props.name}</h3>
                <span>MORE</span>
            </div>
        )
    }
}
