import { MenuItems } from './MenuItem';
import { useState } from 'react';
import './NavBar.css'
import { Button } from "../Button.js"

function NavBar() {
    const [clicked, clickedFunc] = useState(false);

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo"> SistoElemento <i className="fab fa-react"></i></h1>
            <div className="menu-icon" onClick={() => clickedFunc(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) =>
                    <ul key={item.cName + 'ul'} >
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </ul>
                )
                };
            </ul>
            <Button id={'SignUpButton'}>Sign</Button>
        </nav >
    );
}

export default NavBar;