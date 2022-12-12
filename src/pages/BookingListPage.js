import React, {  useState } from 'react';
import styled from 'styled-components';

function BookingListPage() {
    const [bookings, setBookings] = useState([]);



    return (
        <Main>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Country</th>
                        <th scope="col">No. of People</th>
                        <th scope="col">Budget</th>
                    </tr>
                </thead>
                {bookings.map((data)=>(
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.country}</td>
                        <td>{data.no_of_persons}</td>
                        <td>${data.budget}</td>
                    </tr>
                </tbody>))}
            </table>
        </Main>
    )
}

export default BookingListPage

const Main = styled.div`
background-image : url('https://res.cloudinary.com/enchanting/q_70,f_auto,c_fill,w_1280,h_650,g_face/travelopia-web/2021/08/USA-Arches-National-Park-UT-e1640034251676.png');
height: 100vh;
width: 100vw;
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;

.table{
    height: fit-content;
    width: 70%;
    background-color: rgba(0,0,0, 0.6); 
    color: white;
    margin-top: 150px
}
`;