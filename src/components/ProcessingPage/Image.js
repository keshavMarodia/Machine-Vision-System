import classes from "./Image.module.css";
import { Paper } from "@mui/material";

const Image = (props) => {
  return (
    <Paper elevation={3} className={props.halfImage?classes.framehalf:classes.frame}>
      <img
        alt=""
        src={props.src}
        className ={props.halfImage?classes.half:''}
      />
    </Paper>
  );
};
export default Image;
