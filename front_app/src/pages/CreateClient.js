import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../components/App';
import ClientForm from '../components/ClientForm';
import OneButtonSection from '../components/OneButtonSection';

export default function CreateClient() {

    const navigate = useNavigate();
    const context = useContext(appContext);
    const creationFormFields = useContext(appContext).creationFormFields; // not needed for creation form
    const setCreationFormFields = useContext(appContext).setCreationFormFields;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const getToken = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/get_token')
        const data = await response.json();
        const token = data.token;
        console.log('token returned by backend:', token);
        return token;
    }

    async function createClient() {

        const token = await getToken();
        const response = await fetch(
            'http://127.0.0.1:8000/api/client/create',
            {
                method: 'POST',
                mmode: 'same-origin',
                cors: 'cors',
                headers: {
                    'content-type': 'application/json',
                    'X-CSRFToken': token
                },
                body: JSON.stringify(creationFormFields)
            }
        );

        const data = await response.json();

        context.getClients();
        navigate('/');
    }

    useEffect(() => {
        setCreationFormFields({
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'phone_number': phoneNumber
        });
    }, [firstName, lastName, email, phoneNumber]);

    const props2 = {
        text: 'Create',
        onClick: createClient
    }

    return (
        <>
            <h1>Add a client</h1>
            <OneButtonSection params={props2} />
            <ClientForm updateFields={setCreationFormFields} />
        </>
    )
}