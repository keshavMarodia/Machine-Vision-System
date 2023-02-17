import classes from "./CapturedImage.module.css";
import Image from "./Image";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useRef } from "react";

const ReferenceImage = (props) => {
  const [src, setSrc] = useState("");
  const [parent, setParent] = useState("");
  const [child, setChild] = useState("");
  const hiddenFileInput = useRef(null);
  const handleParentChange = (event) => {
    setParent(event.target.value);
  };
  const handleChildChange = (event) => {
    setChild(event.target.value);
  };
  const uploadFile = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    const objectUrl = URL.createObjectURL(fileUploaded);
    setSrc(objectUrl);
    props.openTable();
  };
  return (
    <div className={classes.container}>
      <p>Reference Image</p>
      <Image src={src} />
      <div className={classes.buttons}>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="parent-label">Parent Section</InputLabel>
          <Select
            labelId="parent-label"
            id="parent"
            value={parent}
            label="Parent"
            onChange={handleParentChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="A1">A1</MenuItem>
            <MenuItem value="A2">A2</MenuItem>
            <MenuItem value="B1">B1</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="child-label">Child Section</InputLabel>
          <Select
            labelId="child-label"
            id="child"
            value={child}
            label="Child"
            onChange={handleChildChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.buttons}>
      <table>
        <tr>
          <td>
          <button className={classes.button64} onClick={uploadFile}>
              <span class="text">Choose file</span>
        </button>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
          accept="image/jpg,image/png"
        />
        </td>
        <td>
        <button className={classes.button64}>
              <span class="text">Origin</span>
        </button>
        </td>
        </tr>
      </table>
      </div>
    </div>
  );
};
export default ReferenceImage;
