import React from 'react';
import ContactsIt from "./ContactsIt";

const ContactsList = ({contacts, remove}) => {
    return (
        <div>
            <h1>Contacts here!</h1>
            {contacts.map((contact, index) =>
                <ContactsIt remove={remove} number={index + 1} contact={contact} key={contact.id}/>
            )}

        </div>
    );
};

export default ContactsList;