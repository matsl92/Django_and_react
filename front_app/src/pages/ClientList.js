import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ListItem from '../components/ListItem';
import { appContext } from '../components/App';
import OneButtonSection from '../components/OneButtonSection';

function ClientList() {

    const navigate = useNavigate();

    const clients = useContext(appContext).clients;

    const props = {
        'text': 'Add',
        onClick: () => navigate('client/create'),
        class: 'success'
    }

    return (
        <div>
            <h1>Clients</h1>
            {
                clients.map((client, index) => (
                    <ListItem key={index} firstName={client.first_name} id={client.id} />
                ))
            }
            <OneButtonSection params={props} />
        </div>
    )
}

export default ClientList;