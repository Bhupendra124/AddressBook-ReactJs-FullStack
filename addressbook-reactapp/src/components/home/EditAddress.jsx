import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditAddress({ open, handleClose, data, onChange, handleFormSubmit }) {

    const { name, address, city, state, zip, phoneNo} = data

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>UPDATE CONTACT</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Full Name"
                        type="text"
                        fullWidth
                        name="name"
                        variant="outlined"
                        value={name}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        name="address"
                        variant="outlined"
                        value={address}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label="City"
                        type="text"
                        fullWidth
                        name="city"
                        variant="outlined"
                        value={city}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="state"
                        label="State"
                        type="text"
                        fullWidth
                        name="state"
                        variant="outlined"
                        value={state}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="zip"
                        label="Zip Code"
                        type="text"
                        fullWidth
                        name="zip"
                        variant="outlined"
                        value={zip}
                        onChange={e => onChange(e)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phoneNumber"
                        label="Phone Number"
                        type="number"
                        fullWidth
                        name="phoneNo"
                        value={phoneNo}
                        onChange={e => onChange(e)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="outlined" color="primary">Close</Button>
                    <Button onClick={() => handleFormSubmit()} variant="contained" color="success">EDIT</Button>
                </DialogActions>
            </Dialog>
         
        </div>
    );
}
