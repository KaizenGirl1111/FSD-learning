import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from "react-redux"
import { createTasks, updateTasks } from '../utils/tasksSlice';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack';
function TaskFormBootstrap() {
    const { Formik } = formik;
    /*
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    onSubmit={(values) => {
                console.log(values)
                const newTask = { ...values, id: Math.floor(Math.random() * 100) + 1 }
                console.log(newTask)
                dispatch(createTasks(newTask))
            }}
    */
    const dispatch = useDispatch()

  
    return (
        <>
            <Formik

                onSubmit={(values) => {
                    console.log(values)
                    const newTask = { ...values, id: Math.floor(Math.random() * 100) + 1 }
                    console.log(newTask)
                    dispatch(createTasks(newTask))
                }}
                initialValues={{
            taskName: "",
            taskDetails: "To be updated..",
            status: "Pending",
            priority: "High priority",
            id: "",
            }}
            >
                {({ handleSubmit, handleChange, values }) => (
     
                    <Container>
                        <Form onSubmit={handleSubmit} className="mt-4">
                        <Stack direction="horizontal" gap={3}>
                            
                           
                                <Form.Control type="text" placeholder="Enter task" name="taskName"
                                    value={values.taskName}
                                    onChange={handleChange} className="py-2"/>
                                <Button type="submit" className="py-2 fs-5 btn-color">Submit</Button>
                        
                            </Stack>
                        </Form>
                    </Container>
            )}
        </Formik>
        </>
        )
    }
     
 

export default TaskFormBootstrap;