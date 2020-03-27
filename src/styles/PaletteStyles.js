export default {
    Palette : {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    PaletteColors : {
        height: "90%"
    },
    goBack : {
        backgroundColor: "black",
        height: "50%",
        width: "20%",
        margin: "-3.5px auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: "1",
        "& a" : {
        color: "white",
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
        opacity: "1"
        }
    }
}