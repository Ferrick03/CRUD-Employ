
import { Container } from 'react-bootstrap';
import './App.css'
import Example from './table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Popup from './popup';
import { useState } from 'react';
function App() {
  const [upto, setUpto] = useState(false)
  const [count, setcount] = useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {

    if (rowData) {
      setFieldData(rowData);
    }
    else {
      setFieldData({
        name: null,
        email: null,
        location: null,
        mobile: null,
        qualification: null
      })
    }
    setShow(true)
  };

  const [fieldData, setFieldData] = useState({})
  return (
    <>
      <Container fluid className='p-4'>
        <h1 className='text-center'>CRUD App</h1>
        <Popup cardShow={show} cardClose={handleClose} temp={fieldData} settemp={setFieldData} refresh={upto} setRefresh={setUpto} />
        <Example cardClick={handleShow} refresh={upto} setRefresh={setUpto}  />

      </Container>
    </>
  )
}

export default App
