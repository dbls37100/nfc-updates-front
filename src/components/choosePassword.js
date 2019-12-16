import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [ setOpen ] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <Dialog open={handleClickOpen}  aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create your password, please enter this here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="password"
            type="password"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="repeat your password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save Password
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}