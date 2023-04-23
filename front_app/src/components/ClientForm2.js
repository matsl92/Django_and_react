import { useState, useContext, useEffect } from 'react';
import ClientField from './ClientField';
import FormField from './FormField';
import { appContext } from './App';

function ClientForm() {

    const setFormFields = useContext(appContext).setFormFields;

    const formFields = useContext(appContext).formFields;

    // console.log(useContext(appContext));

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // const [clientList, setClientList] = useState([]);

    useEffect(() => {
        setFormFields({firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber}); 
        // setFormFields(({}) => ({firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber}));
    }, [firstName, lastName, email, phoneNumber])

    const addClient = async () => {

        let client = {
            first_name: firstName, 
            last_name: lastName, 
            email: email, 
            phone_number: phoneNumber
        };

        const options = {
            method: 'POST', 
            mode: 'cors', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(client)
        }

        const response = await fetch(
            'http://127.0.0.1:8000/api/client/create', 
            options
        );

        let data = await response.json();
        console.log(data);

    }

    const getClients = async () => {

        const response = await fetch('http://127.0.0.1:8000/api/client/list');
        let data = await response.json();
        console.log(data);
        // setClientList(data);
    }

    return (
        <div>
            <h1>Add a client</h1>
            <form id='client-form'>
                <FormField name="first_name" type="text" onChange={(e) => setFirstName(e.target.value)}/>
                <FormField name="last_name" type="text" onChange={(e) => setLastName(e.target.value)}/>
                <FormField name="email" type="email" onChange={(e) => setEmail(e.target.value)}/>
                <FormField name="phone_number" type="text" onChange={(e) => setPhoneNumber(e.target.value)}/>
                <button type="button" onClick={addClient}>Add client</button>
            </form>
        </div>
    )
}

export default ClientForm