import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';


function HomePage() {
    return (
        <Main>
            <Head />
            <Content>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Number of People</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Where do you want to go?</Form.Label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">India</option>
                            <option value="2">Africa</option>
                            <option value="3">Europe</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Budget Per Person</Form.Label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Content>
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