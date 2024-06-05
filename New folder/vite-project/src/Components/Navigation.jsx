import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react"
import {useSelector } from "react-redux"
import store from "../utils/store.jsx"
import { statusTask, priorityTask,filteredStatusTask } from "../utils/constant.js"
/*import { useContext } from "react"*/
/*import MenuOptionContext from '../utils/useMenuOption.js';
import {Link } from "react-router-dom"*/
function Navigation({ taskData, setTaskData, filteredTaskData, setFilteredTaskData }) { 
    const handleFilterChange = (e) => { 
        console.log(e.target.value)
        const selectedStatus = e.target.value
        if (selectedStatus == "All") {
            setFilteredTaskData(taskData)
        }
        else {
            
            const filter1 = taskData.filter((element) => {
                element.status === selectedStatus
                console.log(element.status)
            })
            setFilteredTaskData(filter1)
        }
        console.log(taskData)
        console.log(filteredTaskData)
    }
    const expand = 'md'
    const [showNestedDropdown, setShowNestedDropdown] = useState(false);
    /*const [choice,setChoice] = useContext(MenuOptionContext)*/
    const [showNestedDropdownPriority, setShowNestedDropdownPriority] = useState(false);
    const handleNestedDropdownToggle = () => {
        setShowNestedDropdown(!showNestedDropdown)
    }
    const handleNestedDropdownPriority = () => {
        setShowNestedDropdownPriority(!showNestedDropdownPriority)
    }
    const taskList = useSelector((store) => store.tasks)

    return (
        <>
            <Navbar key={expand} expand={expand} className="mb-3 nav-color">
                    <Container fluid>
                    <Navbar.Brand href="#" style={{ color: "white" }} >JUST DO IT ✔️</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="text-white bg-white"/>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start" className="text-white"
                        >
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: "white" }} className="ml-2">
                                    JUST DO IT ✔️
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                        <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                {/* 
                                <NavDropdown onChange={handleFilterChange }
                                    title="Sort task by"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    className="text-white" autoClose={false} >
                                    {
                                        statusTask.map((element) => (
                                            <>
                                            <NavDropdown.Item>

                                                    {element.status }

                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            </>
                                        ))
                                    }
                         
                                   
                                </NavDropdown>
                                    */}
                                <select className="form-select form-select-sm"  onChange={ handleFilterChange}>
                                    {filteredStatusTask.map((element) => (<option value={element.status} >{element.status}</option>))}

                                </select>
                                </Nav>
                               
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            <p>{JSON.stringify(filteredTaskData)}</p>
        </>
    );
}

export default Navigation;