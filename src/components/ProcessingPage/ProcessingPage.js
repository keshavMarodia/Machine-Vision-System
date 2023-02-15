import CapturedImage from "./CapturedImage";
import ReferenceImage from "./ReferenceImage";
import classes from "./ProcessingPage.module.css";
import Table1 from "./Table1";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Table2 from "./Table2";

const ProcessingPage = (props) => {
  const [process, setProcess] = useState("");
  const [captureEnable, setCaptureEnable] = useState(true);
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);
  const openTable1 = () => {
    setShowTable1(true);
  };
  const openTable2 = () => {
    setShowTable2(true);
  };
  const handleChange = (event) => {
    setProcess(event.target.value);
    event.target.value !== ""
      ? setCaptureEnable(false)
      : setCaptureEnable(true);
  };
  return (
    <div className={classes.container}>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="process-label">Process</InputLabel>
        <Select
          labelId="process-label"
          id="process"
          value={process}
          label="Process"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="drilling">Drilling</MenuItem>
          <MenuItem value="marking">Marking</MenuItem>
          <MenuItem value="torquing">Torquing</MenuItem>
          <MenuItem value="wirelocking">Wirelocking</MenuItem>
        </Select>
      </FormControl>
      <CapturedImage captureEnable={captureEnable} openTable={openTable2} />
      <ReferenceImage openTable={openTable1} />
      <div className={classes.table}>
        {showTable1 && <Table1 />}
        {showTable2 && <Table2 />}
      </div>
    </div>
  );
};
export default ProcessingPage;
