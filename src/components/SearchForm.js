import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
export default function SearchForm(){
    return (
            <form id="search-form">
                <input id="search" placeholder="Search Transanctions..." type={"text"}/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </form>
    )
}