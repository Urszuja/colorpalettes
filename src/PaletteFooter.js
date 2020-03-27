import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/FooterStyles"

function PaletteFooter(props) {
    
    const {classes, paletteName, emoji} = props;

    return (
        <footer className={classes.PaletteFooter}>
                    {paletteName}
                    <span className={classes.Emoji}>
                        {emoji}
                    </span>
                </footer>

    )
}

export default withStyles(styles)(PaletteFooter);