    import React, { useState } from 'react';
    import styled from 'styled-components';

    const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
    `;

    const Label = styled.label`
    margin-bottom: 5px;
    `;

    const Input = styled.input`
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 50px;
    `;

    const Select = styled.select`
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 50px;
    `;

    const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    `;

    const CheckboxLabel = styled.label`
    margin-left: 5px;
    `;


    const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
    `;


    function StyledForm() {
    const [formData, setFormData] = useState({
        title: '',
        priority: '', 
        description: '', 
        agreeTerms: false 
        });


    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
        formData,
        [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
    };



    return (
        
        <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">Title:</Label>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <Label htmlFor="email">Priority:</Label>
            <Select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </Select>
        

        <Label htmlFor="email">Description:</Label>
        <Input type="text" id="description" name="description" value={formData.email} onChange={handleChange} />

        <CheckboxContainer>
        <input type="checkbox" id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
        <CheckboxLabel htmlFor="agreeTerms">Mark as resolved</CheckboxLabel>
        </CheckboxContainer>

        <Button type="submit">Enviar</Button>
        </FormContainer>
    );
    }

    export default StyledForm;
