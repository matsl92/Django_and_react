import '../App.css';
import { createContext, useState, useEffect } from 'react';
import ClientList from '../pages/ClientList';
import { Route, Routes } from 'react-router-dom';
import ReadClient from '../pages/ReadClient';
import UpdateClient from '../pages/UpdateClient';
import CreateClient from '../pages/CreateClient';


export const appContext = createContext([]);

function App() {

  const [clients, setClients] = useState([]);

  const [formFields, setFormFields] = useState({});

  const [creationFormFields, setCreationFormFields] = useState({});

  const [updatingFormFields, setUpdatingFormFields] = useState({});

  useEffect(() => {
    getClients();
  }, []);

  async function getClients() {
    const response = await fetch('http://127.0.0.1:8000/api/client/list');
    const data = await response.json();
    setClients(data);
  }

  // console.log(appContext)

  return (
  
    <div className="App">
      <appContext.Provider value={{ 
        clients, setClients, formFields, setFormFields, getClients, 
        creationFormFields, setCreationFormFields,
        updatingFormFields, setUpdatingFormFields
      }}>
        <Routes>
          <Route path="/" element={<ClientList />}></Route>
          <Route path="client/create" element={<CreateClient />}></Route>
          <Route path="client/read/:id" element={<ReadClient />}></Route>
          <Route path="client/update/:id" element={<UpdateClient />}></Route>
          {/* <Route path="client/delete/:id" element={<DelateClient />}></Route> */}
        </Routes>
      </appContext.Provider>
    </div>

  );
}

export default App;