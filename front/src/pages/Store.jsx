import Navbar from '../components/Navbar';
import ItemList from '../components/ItemList';
import CurrencyFormater from '../utilities/CurrencyFormater';


function Store() {
  return (
    <div>
      <Navbar />
      <h1>{CurrencyFormater(150000)}</h1>
      <ItemList />
    </div>
  )
}

export default Store;