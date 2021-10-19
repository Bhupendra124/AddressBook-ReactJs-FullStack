import React, { useState, useEffect } from 'react';
import './Home.css';
import AddressBookService from '../../services/AddressBookService';

import 'react-toastify/dist/ReactToastify.css';
import EditAddress from './EditAddress';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialValue = { name: "", address: "", city: "", state: "", zip: "", phoneNo: "" }

function Display() {

    const getAllContact = () => {
        AddressBookService.getAllAddresses().then(
            (response) => {
               
                setContacts(response.data.data);
            },
            (error) => {
                console.log(error);
                
            }
        );
    };

    useEffect(() => {
       
        getAllContact();
    }, []);

    const [contacts, setContacts] = useState([])


    const [open, setOpen] = React.useState(false)


    const [formData, setFormData] = useState(initialValue)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = (Data) => {
        setFormData(Data)
        handleClickOpen()
    }

    const onChange = (e) => {
        const { value, id } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleFormSubmit = () => {

       AddressBookService.updateAddress(formData, formData.addressBookId).then(
            (response) => {
               
                getAllContact();
                handleClose();
            },
            (error) => {
              console("something went wrong")
            }
        );
    }

    const deleteaddress = (id) => {
        AddressBookService.deleteAddress(id).then(
            (response) => {
               const cofirm=window.confirm("Are you sure want to delete "+id);
            //    console.log(confirm);
                updateOnRelod(id);
            },
            (error) => {
               alert("Something went wrong");
            }
        );
    };

    const updateOnRelod = (id) => {
        setContacts(contacts.filter((e) => e.addressBookId !== id));
    };

    return (
        <>
            <table className="table-display">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Phone Number</th>
                        <th>Actions</th>
                    </tr>
                    {
                        contacts.length > 0 && contacts.map((contact) => (
                            <tr key={contact.addressBookId}>
                                <td>{contact.addressBookId}</td>
                                <td>{contact.name}</td>
                                <td>{contact.address}</td>
                                <td>{contact.city}</td>
                                <td>{contact.state}</td>
                                <td>{contact.zip}</td>
                                <td>{contact.phoneNo}</td>
                                <td>

                                <Button  onClick={() => handleUpdate(contact)} variant="contained" href="#contained-buttons">
                                        Edit
                                     </Button>
                                    {/* <Button onClick={() => handleUpdate(contact)} startIcon={<EditIcon />} /> */}
                                    {/* <Button onClick={() => deleteaddress(contact.addressBookId)} startIcon={<DeleteIcon />} /> */}
                                    <Button  onClick={() => deleteaddress(contact.addressBookId)}   variant="contained" color="success">
 Delete
</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/* //component */}
            <EditAddress open={open} handleClose={handleClose} data={formData} onChange={onChange} handleFormSubmit={handleFormSubmit} />
          
        </>
    )
}

export default Display