import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FormDialog = (props) => {
  const [passcode, setPasscode] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("passcode", passcode);
    axios({
      method: "post",
      responseType: "json",
      url: `http://localhost:7000/passcode`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        setIsError(false);
        navigate("/SignUp");
      })
      .catch((error) => {
        //error.data.error.message
        console.log(error);
        setIsError(true);
      });
  };
  const onChangeHandler = (event) => {
    setPasscode(event.target.value);
  };
  return (
    <div>
      <Dialog open={props.open} onClose={props.close}>
        <DialogTitle>Passcode</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the Passcode provided by the admin
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="passcode"
            label="Passcode"
            type="password"
            fullWidth
            variant="standard"
            value={passcode}
            onChange={onChangeHandler}
            error={isError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>Cancel</Button>
          <Button variant="contained" onClick={onSubmitHandler}>
            Enter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default FormDialog;
