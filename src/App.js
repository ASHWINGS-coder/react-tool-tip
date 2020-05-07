import React from 'react';
import ReactTooltip from "react-tooltip";
import styled from 'styled-components';

const Container = styled.div`
background-color:lightblue;
width:300px;
margin:40px auto;
padding:10px;
text-align:center;
`
const Head = styled.div`
background-color:black;
color:white;
width:100vh;
margin:40px auto;
padding:10px;
text-align:center;
`

function App(props) {
  return (
    <div>
      <h1>
       <Head> TOOL TIP </Head>
      </h1>
        <Container data-tip data-for='add'> ADD </Container>
        <ReactTooltip id='add' type='success' place={props.pos} effect="solid" >
          <span>Sure you want to Add the item</span>
        </ReactTooltip>
        <Container data-tip data-for='del'> DEL </Container>
        <ReactTooltip id='del' type='warning' place={props.pos}>
          <span>Sure you want to Del the item</span>
        </ReactTooltip>
    </div>
  );
}

export default App;