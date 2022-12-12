import React from 'react'
import styled from 'styled-components'


function HomePage() {
  return (
    <Main>
         <Head  />
         <Content>
             
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
width : 50%;
height: 70%;
background-color: rgba(0,0,0, 0.4); 
border-radius: 20px;
margin: auto;
`;