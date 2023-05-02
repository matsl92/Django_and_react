import { useEffect, useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { appContext } from '../components/App';
import ClientForm from '../components/ClientForm';
import OneButtonSection from '../components/OneButtonSection';

export default function CreateClient() {

    const navigate = useNavigate();
    const context = useContext(appContext);
    const params = useParams();
    const updatingFormFields = useContext(appContext).updatingFormFields;
    const setUpdatingFormFields = useContext(appContext).setUpdatingFormFields;
    const clients = useContext(appContext).clients;

    const getToken = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/get_token')
        const data = await response.json();
        const token = data.token;
        console.log('token returned by backend:', token);
        return token;
    }

    const updateClient = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/client/update/${parseInt(params.id)}`,
            {
                method: 'PUT',
                cors: 'cors',
                headers: {
                    'content-type': 'application/json',
                    'X-CSRFToken': await getToken()
                },
                body: JSON.stringify(updatingFormFields)
            }
        );

        const data = await response.json();
        context.getClients();
        navigate('/');
    }

    const deleteClient = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/client/delete/${parseInt(params.id)}`,
            {
                method: 'DELETE',
                cors: 'cors',
                headers: {
                    'content-type': 'application/json',
                    'X-CSRFToken': await getToken()
                },
            }
        );

        const data = await response.json();

        context.getClients();
        navigate('/');

    }

    const props2 = {
        text: 'Done',
        client: updatingFormFields,
        onClick: updateClient
    }

    const props3 = {
        text: 'Delete',
        onClick: deleteClient,
        class: 'danger'
    }

    return (
        <>
            <h1>Update client</h1>
            <OneButtonSection params={props2} />
            <ClientForm updateFields={setUpdatingFormFields}/>
            <OneButtonSection params={props3} />
        </>
    )
}