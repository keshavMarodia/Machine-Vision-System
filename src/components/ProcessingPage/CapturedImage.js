import classes from "./CapturedImage.module.css";
import Image from "./Image";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
const CapturedImage = (props) => {
  const [capturedImage, setCapturedImage] = useState("");
  const [capture, setCapture] = useState(0);
  const [halfImage, sethalfImage] = useState(false);
  const captureHandler = () => {
    if (capture === 0) {
      setCapture(1);
      setCapturedImage(
        "https://2.imimg.com/data2/PT/JW/MY-2552251/bevel-worm-spur-gear-500x500.jpg"
      );
      sethalfImage(true);
    } else if (capture === 2) {
      setCapture(3);
      setCapturedImage(
        "https://5.imimg.com/data5/KK/YV/OL/SELLER-81049771/spur-gear-500x500.jpg"
      );
      sethalfImage(false);
    }
  };
  const nextFrameHandler = () => {
    setCapture(2);
  };
  const processHandler = () => {
    props.openTable();
    setCapturedImage("https://cdn.hswstatic.com/gif/gears-1.jpg");
    axios({
      method: "post",
      responseType: "json",
      url: `http://localhost:7000/process`,
      data: {},
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        //error.data.error.message
        console.log(error);
      });
    return;
  };
  return (
    <div className={classes.container}>
      <p>Captured Image</p>
      <Image src={capturedImage} halfImage={halfImage} />
      <div className={classes.buttons}>
        <Button variant="contained">Origin</Button>
        <Button variant="contained" onClick={nextFrameHandler}>
          Next Frame
        </Button>
      </div>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          disabled={props.captureEnable}
          onClick={captureHandler}
        >
          Capture
        </Button>
        <Button variant="contained" onClick={processHandler}>
          Process
        </Button>
      </div>
    </div>
  );
};
export default CapturedImage;
