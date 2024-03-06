    import * as React from 'react';
    import StyledForm from './components/form';
    import styled from 'styled-components';
    import { useState, useEffect } from 'react';
    import reportWebVitals from './reportWebVitals';


    const AppWrapper = styled.div`
    background-color: #e3e3e3;
    text-align: center; 
    padding-top: 50px; 
`;

    function App() {
        const [title, setTitle] = useState("title")
        const [priority, setPriority] = useState("priority");
        const [descriptio, setDescription] = useState("descrption");
        const [MarkAsResolved, setMarkAsResolved] = useState(false);
        const [data,setTickets] = useState ("")


        useEffect(() => {
            fetch('http://localhost:8000/tickets')
            .then(res => {
            return res.json()
            })
            .then(data => {
            setTickets(data) 
            })
            }, [])



    return (
        <AppWrapper>
            <h1>Form-Ticket</h1>
            <StyledForm></StyledForm>
        </AppWrapper>
    
    );

    }

    export default App;
