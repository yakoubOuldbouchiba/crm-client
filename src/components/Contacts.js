import {useEffect, useState} from "react";
import AddContanct from "./AddContanct";
import SingleContact from "./SingleContact";

const Contacts = ()=>{
    const [contacts , setContacts] = useState([]);

    useEffect(()=>{
        (
            async  ()=>{
                await  fetch('http://localhost:8080/api/contacts/')
                    .then(response=>response.json())
                    .then(data=>setContacts(data))
            }
        )();
    },[contacts]);

    return <div>
        <div className="row">
            <AddContanct  />
        </div>
        <div className="row">
            {
                contacts.map(contact=>{
                    return <SingleContact key={contact.id}  item={contact} />
                })
            }
        </div>
    </div>


}

export default Contacts;