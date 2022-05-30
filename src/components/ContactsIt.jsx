import React from 'react';


const ContactsIt = (props) => {

    return (
        <div>
            <div className="contact">
                <div className="contact__cont">
                    <h2>{props.number}. {props.contact.name}</h2>
                    <div> {props.contact.phone}</div>
                </div>
                <div>
                    <button className="btnCont" onClick={() => props.remove(props.contact)}>Удалить контакт!</button>
                </div>
            </div>
        </div>
    );
};

export default ContactsIt;