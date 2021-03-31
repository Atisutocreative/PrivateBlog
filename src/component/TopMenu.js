import React from 'react';
import { NavLink } from "react-router-dom";
import Login from "./pages/Login";


function TopMenu() {
    const [isAuthenticated, toggleIsAuthenticated ] = React.useState(true);

    return (
        <nav>
            <div className="nav-container">

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link"> Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" activeClassName="active-link">
                            Inloggen
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/blogposts" activeClassName="active-link" >
                            Blog Overzicht pagina
                        </NavLink>
                    </li>


                    {/*<li>*/}
                    {/*    <NavLink to="/blog/:slug" activeClassName="active-link">*/}
                    {/*        Blogpost pagina*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;