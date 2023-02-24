import CapturedImage from "./CapturedImage";
import ReferenceImage from "./ReferenceImage";
import classes from "./ProcessingPage.module.css";
import Table1 from "./Tables/Table1";
import { useState } from "react";
import Table2 from "./Tables/Table2";

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
      <CapturedImage captureEnable={captureEnable} openTable={openTable2} />
      <ReferenceImage openTable={openTable1} />
      <div className={classes.table}>
      {showTable2 && <Table2 />}
        {showTable1 && <Table1 />}
      </div>
    </div>
    
  );
};
export default ProcessingPage;
