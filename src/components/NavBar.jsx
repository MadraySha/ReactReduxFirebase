import { NavLink, Outlet,} from "react-router-dom"
import React from 'react';

const Navbar = () => {
    return (
        <>
            <header>
                <NavLink to="/">Main</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
                <NavLink to="/login">Login</NavLink>
            </header>
            <Outlet/>

            <br/>
                <br/>
                    <br/>
                        <br/>
                            <br/>
            <footer> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eligendi enim impedit? Accusamus, aliquam atque beatae commodi consequuntur, debitis dolore doloremque doloribus eos est, et exercitationem fuga ipsa libero nulla perferendis placeat praesentium quas quibusdam quis quisquam quo sed? Amet animi dolore doloremque eum ipsum magnam magni, nemo odio sint! A amet aut consectetur corporis dolore dolorum earum, eligendi excepturi harum impedit iusto laborum laudantium magni minima molestiae necessitatibus non nostrum odio odit perspiciatis provident quidem temporibus ullam! Corporis et excepturi molestias perspiciatis voluptatem! Eos laudantium, magni, minus molestias mollitia nostrum odit quaerat repellendus temporibus unde veniam veritatis vero, voluptas?
                Urddy </footer>
        </>
    );
};

export {Navbar};