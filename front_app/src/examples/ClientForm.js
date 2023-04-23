import { useState } from 'react';

function ClientForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [clientList, setClientList] = useState([]);
    

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
        setClientList(data);
    }

    return (
        <div>
            <h1>Add a client</h1>
            <form>
                <label htmlFor="firstName">Name</label>
                <input id="firstName" type="text" value={firstName}
                onChange={(e) => setFirstName(e.target.value)}></input>
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" value={lastName}
                onChange={(e) => setLastName(e.target.value)}></input>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="text" value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}></input>

                <button type="button" onClick={addClient}>Add client</button>
            </form>
        </div>
    )
}

export default ClientForm