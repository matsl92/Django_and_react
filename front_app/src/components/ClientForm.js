import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../components/App';
import FormField from './FormField';
// import { appContext } from './App';

function ClientForm(props) {

    const setUFF = useContext(appContext).setUpdatingFormFields;

    const params = useParams();

    const clients = useContext(appContext).clients;

    const client = params.id ? 
    clients.find(client => client.id === parseInt(params.id)) :
    {first_name: '', last_name: '', email: '', phone_number: ''};

    const [firstName, setFirstName] = useState(client.first_name);
    const [lastName, setLastName] = useState(client.last_name);
    const [email, setEmail] = useState(client.email);
    const [phoneNumber, setPhoneNumber] = useState(client.phone_number);

    useEffect(() => {
        props.updateFields({
            'first_name': firstName,
            'last_name': lastName,
            'email': email,
            'phone_number': phoneNumber

    });
    }, [firstName, lastName, email, phoneNumber]);

    return (
        <div>
            <form id='client-form'>
                <FormField name="first_name" type="text" text='First Name'
                onChange={(e) => setFirstName(e.target.value)}
                defaultValue={client.first_name}/>
                <FormField name="last_name" type="text" text='Last Name'
                onChange={(e) => setLastName(e.target.value)}
                defaultValue={client.last_name}/>
                <FormField name="email" type="email" text='Email'
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={client.email}/>
                <FormField name="phone_number" type="text" text='Phone Number'
                onChange={(e) => setPhoneNumber(e.target.value)}
                defaultValue={client.phone_number}/>
            </form>
        </div>
    )
}

export default ClientForm;