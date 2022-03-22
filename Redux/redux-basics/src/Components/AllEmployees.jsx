import React, { useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Button
  } from '@chakra-ui/react';

import * as actions from "../Actions/employeeActions";
import axios from 'axios';
import { connect } from 'react-redux';

const AllEmployees = ({setEmployeeList,deleteEmployee, employees}) => {

    useEffect(() => {
        debugger;
        axios.get("https://622623012dfa524018fd2400.mockapi.io/employee").then((response) => {
            setEmployeeList(response.data)
        })
    }, [setEmployeeList])
    
    const handleDelete = (event) => {
        console.log(event.target.id);
        event.preventDefault();
        axios.delete(`https://622623012dfa524018fd2400.mockapi.io/employee/${event.target.id}`).then((response) => {
            console.log(response.status);
            deleteEmployee(event.target.id);
        })
    }

  return (
    <Box w='100%' p={4} >
        <Table>
            <Thead>
            <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Joining Date</Th>
                <Th></Th>
            </Tr>
            </Thead>
            <Tbody>
                {employees.map((employee) => {
                    return (
                        <Tr key={employee.id}>
                            <Td>{employee.id}</Td>
                            <Td>{employee.name}</Td>
                            <Td>{employee.createdAt}</Td>
                            <Td><Button  colorScheme='pink' id={employee.id} onClick={handleDelete}>Delete</Button>
                            </Td>
                        </Tr>
                    )
                })}
            
            </Tbody>
        </Table>
  </Box>
  )
}

function mapPropsToStore(store) {
    return {
        employees: store.employees
    }
}

export default connect(mapPropsToStore, actions)(AllEmployees)
