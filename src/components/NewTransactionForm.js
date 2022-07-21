import {useState} from "react"

export default function NewTransactionForm({onSubmission}){
    const [formData,setFormData]=useState({
        date:"",
        category:"",
        amount:0,
        description:""
    })
    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        onSubmission(formData)
        setFormData({
            date:"",
            category:"",
            amount:0,
            description:""
        })
    }
    return(
        <form onChange={handleChange}  onSubmit={handleSubmit} id="new-item-form">
            <div className="form-inputs">
                <label htmlFor="date">Date:</label>
                <input value={formData.date} name="date" type="date" id="date"/>
                <input value={formData.description} name="description" className="text-input" type="text" placeholder="Description..."/>
                <input value={formData.category} name="category" className="text-input" type="text" placeholder="Category..."/>
                <input value={formData.amount} name="amount" type="number"/>
            </div>
            <button>Add Transaction</button>
        </form>
    )
}