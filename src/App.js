import './App.css';
import React,{useEffect,useState} from 'react';
import Transactions from './components/Transactions';
import NewTransactionForm from './components/NewTransactionForm';
import SearchForm from './components/SearchForm';
// import "semantic-ui-css"
//store data in a state
function App() {
  const[searchFilter,setSearchFilter]=useState("")
  const [transactions,setTransactions]=useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/transactions")
    .then(r=>r.json())
    .then(transactions=>{
      setTransactions(transactions.filter(transaction=>searchFilter===""?true:transaction.description.includes(searchFilter)))
    })
  },[searchFilter,transactions])
  function handleUpdateOnSubmission(newTransaction){
    const serverOptions={
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newTransaction)
    }
    fetch("http://localhost:6001/transactions",serverOptions)
    .then(r=>r.json())
    .then(newItem=>setTransactions(currentTransactions=>[...currentTransactions,newItem]))
    .catch(err=>console.log(err))
  }
  const filteredTransactions=transactions.filter(transaction=>searchFilter===""?true:transaction.description.includes(searchFilter))
function handleOnSearching(search){
  setSearchFilter(search)
}
console.log()
  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <SearchForm onSearching={handleOnSearching}/>
      <NewTransactionForm onSubmission={handleUpdateOnSubmission} />
      <Transactions transactions={filteredTransactions}/>

    </div>
  );
}

export default App;
