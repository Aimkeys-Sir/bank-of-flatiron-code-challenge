import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import {useState} from "react"

export default function SearchForm({onSearching}){
    const [search,setSearch]=useState("")
    function handleChange(e){
        setSearch(e.target.value)
        onSearching(search)
    }
    return (
        <form  id="search-form">
            <input onChange={handleChange} value={search} type={"text"} id="search" placeholder="Search recent transactions..."/>
            <button><FontAwesomeIcon icon={faSearch}/></button>
        </form>
    )
}