import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaRegEdit } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

function Popup(xyz) {
  console.log(xyz.temp);

  const updateData = ()=>{
    
fetch(`https://67d7ed5e9d5e3a10152c9edc.mockapi.io/Employee/Details/${xyz.temp.id} `, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(xyz.temp)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
 alert("....Suceess")
xyz.setRefresh(!xyz.refresh)
}).catch(error => {
  // handle error
})
  xyz.cardClose();
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ///////Create///////

  const create = ()=>{

    
    fetch('https://67d7ed5e9d5e3a10152c9edc.mockapi.io/Employee/Details', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(xyz.temp)
    }).then(res => {
      if (res.ok) {
          return res.json();
      }
      // handle error
    }).then(task => {
      alert("User Added Successfully")
      xyz.setRefresh(!xyz.refresh)
    }).catch(error => {
      // handle error
    })
    xyz.cardClose();
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={xyz.cardShow} onHide={xyz.cardClose}>
        <Modal.Header closeButton>
          {xyz.temp.id ? <Modal.Title>Edit <FaRegEdit /></Modal.Title> :
           <Modal.Title>Add Data <IoIosAddCircleOutline /></Modal.Title>}
          
          
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Name"
                autoFocus
                defaultValue={xyz.temp.name}
                onChange={(e)=>xyz.settemp({...xyz.temp,name : e.target.value})}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>E-mail</Form.Label>
              <Form.Control type ="text" placeholder="name@example.com"
                autoFocus
                defaultValue={xyz.temp.email}
                onChange={(e)=>xyz.settemp({...xyz.temp,email : e.target.value})}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Qualification</Form.Label>
              <Form.Control type ="text" placeholder="Enter a Degree"
                autoFocus
                defaultValue={xyz.temp.qualification}
                onChange={(e)=>xyz.settemp({...xyz.temp,qualification : e.target.value})}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Location</Form.Label>
              <Form.Control type ="text" placeholder="Enter Location"
                autoFocus
                defaultValue={xyz.temp.location}
                onChange={(e)=>xyz.settemp({...xyz.temp,location : e.target.value})}/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mobile.No</Form.Label>
              <Form.Control type ="text" placeholder="mobile.no"
                autoFocus
                defaultValue={xyz.temp.mobile}
                onChange={(e)=>xyz.settemp({...xyz.temp,mobile : e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={xyz.cardClose}>
            Close
          </Button>
          {xyz.temp.id ?  <Button variant="primary" onClick={updateData}>
            Save Changes
          </Button> :  <Button  variant="warning" onClick={create}>Create Data</Button>}
         
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;