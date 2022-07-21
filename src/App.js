import './App.css';
import Transactions from './components/Transactions';
// import "semantic-ui-css"

function App() {
  return (
    <div className="ui raise segment">
      <div className='ui segment violet inverted'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Transactions/>
    </div>
  );
}

export default App;
