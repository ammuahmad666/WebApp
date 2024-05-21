import './Nav.css'

export default function Nav({city="Tahini"}){


    return <>
        <div class="nav">
            
            <ul class="list_container">
                <li class="nav_list welcome-text"> Welcome to {city} </li>
                <li class="nav_list"> Visit </li>
            </ul>

        </div>
    </>
    
}