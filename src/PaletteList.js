import React, { Component } from 'react';

import {Link} from "react-router-dom";

export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props;

        return (
            <div>
                <h1>React colors</h1>
                {palettes.map((p, i) =>
                    <p><Link to={`/palette/${p.id}`}
                    key={i}>
                        {p.paletteName}
                    </Link></p>)}
            </div>
        )
    }
}
