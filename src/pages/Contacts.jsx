import React, {useEffect, useMemo, useState} from 'react';
import {Navigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useDispatch} from "react-redux";
import {removeUser} from "../store/slices/userSlice";
import axios from "axios";
import ContactsList from "../components/ContactsList";
import Selector from "../components/Selector";



const Contacts = () => {
    const [contacts, setContacts] = useState( [])

    useEffect(() => {
        fetchContacts()
    }, [] )

async function fetchContacts() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    setContacts(response.data)
}

const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [selectedCont, setSelectedCont] = useState('')
const sortCont = (sort) => {
    setSelectedCont(sort);

}
const [searchQuery, setSearchQuery] = useState('')

const sortedContacts = useMemo(() => {
    if(selectedCont) {
        return [...contacts].sort((a,b) => a[selectedCont].localeCompare(b[selectedCont]))
    }
    return contacts;
}, [selectedCont, contacts])
const removeContact = (contact) => {
setContacts(contacts.filter(p => p.id !== contact.id))
}
const addNewContact = (e) => {
        e.preventDefault()
        const newContact = {
            id: Date.now(),
            name,
            phone
        }
    setContacts([...contacts,newContact])
    setName('')
    setPhone('')
}
    const dispatch = useDispatch();
    const {isAuth, email} = useAuth();



    return isAuth? (
        <div>

            <form>
                <input className="inpCont" value={name}
                       onChange={e => setName(e.target.value)}
                       type="text" placeholder="Name"/>
                <input className="inpCont" value={phone}
                       onChange={e => setPhone(e.target.value)}
                    type="text" placeholder="Phone"/>
                <button className="btnCont" onClick={addNewContact} >Добавить контакт!</button>
            </form>
            <hr/>
            <div>

                <Selector
                    value={selectedCont}
                    onChange={sortCont}
                    defVal="Coртировка по"
                options={[
                    {value: "name", name: 'По алфавиту'},
                    {value: "phone", name: 'По номеру'}
                ]}/>
            </div>
            <hr/>
            <ContactsList remove={removeContact} contacts={sortedContacts} />
            <br/>
            <hr/>
            <button className="btnCont" onClick={() => dispatch(removeUser())}>Log out</button>
        </div>) : (
    <Navigate to="/login"/>

    );
};

export {Contacts};