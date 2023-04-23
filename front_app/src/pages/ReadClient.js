import { useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import ClientField from '../components/ClientField';
import { appContext } from '../components/App';
import ButtonSection from '../components/ButtonSection';



function ReadClient() {

    const params = useParams();

    const context = useContext(appContext);

    const client = context.clients.find(client => client.id === parseInt(params.id))

    return (
        <>
            <ButtonSection />
            <ClientField text={client.first_name} />
            <ClientField text={client.last_name} />
            <ClientField text={client.email} />
            <ClientField text={client.phone_number} />
        </>
    )
}

export default ReadClient;