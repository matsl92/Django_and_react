import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { appContext } from '../components/App';


function ButtonSection() {

    const context = useContext(appContext);

    const params = useParams();
    
    const navigate = useNavigate();

    const getToken = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/get_token')
        const data = await response.json();
        const token = data.token;
        console.log('token returned by backend:', token);
        return token;
    }

    async function deleteClient(id) {
        const response = await fetch(
            `http://127.0.0.1:8000/api/client/delete/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'X-CSRFToken': await getToken()
                }
            }
        );
        const data = await response.json();
        console.log(data);
        context.getClients();
        navigate('/');

    } 

    return (
        <div className="buttonSection">
            <button onClick={() => navigate(-1)} className="primary button">Go Back</button>
            <button onClick={() => navigate(`/client/update/${params.id}`)} className="edit button">Edit</button>
            <button onClick={() => deleteClient(params.id)} className="danger button">Delete</button>
        </div>
    )
}

export default ButtonSection;