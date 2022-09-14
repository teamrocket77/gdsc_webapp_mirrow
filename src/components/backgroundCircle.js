import { Grid } from "@mui/material"

const BackgroundCircle = (props) => {
    let color = props.color

    return (
        <Grid container item>
            <Grid item sx={{ position: "absolute", ml: "-38vw", width: "750.53px", height: "783.74px", backgroundImage: `url(/static/images/background_circle_${color}.svg)`, zIndex: 0 }}></Grid>
            <Grid item sx={{ position: "absolute", ml: "63vw", mt: "6vh", width: "750.53px", height: "783.74px", backgroundImage: `url(/static/images/background_circle_${color}.svg)`, transform: "rotate(180deg)", opacity: "0.5", zIndex: 0}}></Grid>
        </Grid>
    )
}

export default BackgroundCircle
