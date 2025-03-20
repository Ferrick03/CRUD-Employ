
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function Example(bcd) {
  const [tableData, setTableData] = useState(null)

  useEffect(() => {
    fetch('https://67d7ed5e9d5e3a10152c9edc.mockapi.io/Employee/Details', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      setTableData(tasks.reverse());

    }).catch(error => {
      // handle error
    })
  }, [bcd.refresh])
  console.log(tableData);

  ///////////Delete Method//////////

  const erase = (id) => {

    fetch(`https://67d7ed5e9d5e3a10152c9edc.mockapi.io/Employee/Details/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {
      alert("Deleted SuccessFully")
      bcd.setRefresh(!bcd.refresh) 
    }).catch(error => {
      // handle error
    })
  }
  ////////  Create
 

  return (
    <>
    <Button onClick={()=>bcd.cardClick()} variant='info' className='p-3 m-3'>Add</Button>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr className='fs-3 text-center'>
          <th className='p-3'>S.no</th>
          <th className='p-3'> Name</th>
          <th className='p-3'> E-mail</th>
          <th className='p-3'>Qualification</th>
          <th className='p-3'>Location</th>
          <th className='p-3'>Mobile.No</th>
          <th className='p-3'>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData && tableData.map((item, inv) => {
          return (
            <>
              <tr className='text-center'>
                <td className='p-3'>{inv + 1}</td>
                <td className='p-3'>{item.name}</td>
                <td className='p-3'>{item.email}</td>
                <td className='p-3'>{item.qualification}</td>
                <td className='p-3'>{item.location}</td>
                <td className='p-3'>{item.mobile}</td>
                <td className='p-3'><Button variant="success me-3" onClick={() => bcd.cardClick(item)}>Edit</Button>
                  <Button variant="danger" onClick={() => erase(item.id)}>Delete</Button> </td>

              </tr>
            </>
          )
        })}



      </tbody>
    </Table>
    </>
  );
}

