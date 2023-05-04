import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ListItem from './components/ListItem';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ListItem /> */}
      <ItemList />
    </div>
  );
}

export default App;
