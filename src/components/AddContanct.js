import {useState} from "react";

const AddContanct = () => {

    const [contact, setContact] = useState({
        firtName: '',
        lastName: '',
        email: ''
    })

    const handleInput = (event) => {
      setContact({...contact , [event.target.name] : event.target.value})
    }

    const createContact = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/contacts/',{
            method : "POST",
            headers :{
              "content-type" : "application/json"
            },
            body:JSON.stringify(contact)
        }).then(response=> response.json());
        window.location.reload();
    }

    return <div className="row card ">
        <form className="col  s12 " onSubmit={createContact}>
            <div className="row">
                <div className="input-field col s6">
                    <input name="firtName"
                           value={contact.firtName}
                           onChange={handleInput}
                           id="first_name"
                           type="text"
                           className="validate"/>
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input name="lastName"
                           value={contact.lastName}
                           onChange={handleInput}
                           id="last_name"
                           type="text"
                           className="validate"/>
                    <label htmlFor="last_name">Last Name</label>
                </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <input name="email"
                           onChange={handleInput}
                           value={contact.email}
                           id="email"
                           type="email"
                           className="validate"/>
                    <label htmlFor="email">Email</label>
                </div>
            </div>

            <div className="row">
                <button type="submit" className="waves-effect waves-light btn" name="action">Create</button>
            </div>
        </form>
    </div>

}

export default AddContanct;