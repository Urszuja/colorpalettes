import React, { Component } from 'react';

import MiniPalette from "./MiniPalette";


export default class PaletteList extends Component {
    render() {
        const {palettes} = this.props;

        return (
            <div>
                <h1>React colors</h1>
                {palettes.map((p, i) =>
                    <MiniPalette {...p}/>
                  )  }
            </div>
        )
    }
}
