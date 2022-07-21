import './App.css';
import NewItemForm from './components/NewItemForm';
import SearchForm from './components/SearchForm';
import Transactions from './components/Transactions';
// import "semantic-ui-css"

function App() {
  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <SearchForm/>
      <NewItemForm/>
      <Transactions/>
      
    </div>
  );
}

export default App;
