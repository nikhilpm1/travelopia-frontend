import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import SuccessModal from '../components/Modals/SuccessModal';
import { createBooking } from '../service/Api';


function HomePage() {

    const [firstName, setFirstName] = useState('');
    const [thanksModal, setThanksModal] = useState(false);
    const [lastName, setLastName] = useState('');
    const [emailField, setEmailField] = useState('');
    const [countrySelect, setcountrySelect] = useState('');
    const [persons, setPersons] = useState('');
    const [budgetField, setBudgetField] = useState('');


    const HandleSubmit =(e)=>{
        e.preventDefault();
        const formValues = {
            first_name: firstName,
            last_name: lastName,
            email: emailField,
            country:countrySelect,
            no_of_persons: persons,
            budget: budgetField,
        }
        createBooking({...formValues}).then((res)=>{
            if(res.status === 201){
                setThanksModal(true)
            }else{
                alert('Cannot submit form')
            }
        })
    }

    return (
        <Main>
            <Head />
            <Content>
                <Form onSubmit={HandleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" required onChange={(e)=>setFirstName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setLastName(e.target.value)}   required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e)=>setEmailField(e.target.value)}   required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Where do you want to go?</Form.Label>
                        <select class="form-select" aria-label="Default select example" onChange={(e)=>setcountrySelect(e.target.value)} >
                            <option selected>Open this select menu</option>
                            <option value="1">India</option>
                            <option value="2">Africa</option>
                            <option value="3">Europe</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Number of People</Form.Label>
                        <Form.Control type="number" required onChange={(e)=>setPersons(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Budget Per Person</Form.Label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="number" onChange={(e)=>setBudgetField(e.target.value)}  required class="form-control" aria-label="Amount (to the nearest dollar)" />
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Content>
            {thanksModal && (
                <SuccessModal setThanksModal={setThanksModal} />
            )}
        </Main>
    )
}

export default HomePage


const Main = styled.div`
background-image : url('https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,w_1280,h_650,g_face/travelopia-web/2021/08/USA-Arches-National-Park-UT-e1640034251676.png');
height: 100vh;
width: 100vw;
background-repeat: no-repeat;
background-size: cover;
display: flex;
`;

const Head = styled.img`

`;

const Content = styled.div`
background-color: rgba(0,0,0, 0.6); 
border-radius: 20px;
margin: auto;
padding: 40px;
color: white;

.mb-3{
    width: 425px;
}
`;