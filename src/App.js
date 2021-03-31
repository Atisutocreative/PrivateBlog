import React, {useState} from 'react';
import './App.css';
import {
    Switch,
    Route,
    NavLink,
    useHistory,
    Redirect
} from 'react-router-dom';
import Home from "./pages/Home";
//import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import BlogSingel from "./component/BlogSingel";
//import Blog from "../component/Blog";
//import TopMenu from "./component/TopMenu";
//import LogOut from "./pages/LogOut";


function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);
    const history = useHistory();
    //console.log(isAuthenticated)

    function handleClickLogIn() {
        history.push("/blogposts");
        toggleIsAuthenticated(true)
    }

    function handleClickLogOut() {
        history.push("/");
        toggleIsAuthenticated(false)
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <ul>
                        <li>
                            <NavLink to="/" exact activeClassName="active-link"> Home</NavLink>
                        </li>
                        {isAuthenticated && <li>
                            <NavLink to="/blogposts" activeClassName="active-link">
                                Blog Overzicht
                            </NavLink>
                        </li>}

                        {!isAuthenticated ? <li>
                                <NavLink to="/login" activeClassName="active-link">
                                    Inloggen
                                </NavLink>
                            </li>
                            :
                            <li>
                                <NavLink to="/logout" activeClassName="active-link">
                                    Uitloggen
                                </NavLink>
                            </li>}
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/login">

                    <div className="main">
                        <button type="button" className="login-button" onClick={handleClickLogIn}>Log in</button>
                    </div>
                </Route>

                <Route path="/logout">
                    <div className="main">
                        <button type="button" className="login-button" onClick={handleClickLogOut}>Uitloggen</button>
                    </div>

                </Route>
                <Route exact path="/blogposts" component={BlogPost}>
                    {isAuthenticated ? <BlogPost/>
                        :
                        <Redirect to="/" />}

                </Route>
                <Route path="/blogsingels/:slug" component={BlogSingel}>
                    {isAuthenticated ? <BlogSingel />
                        :
                        <Redirect to="/" />}
                </Route>
            </Switch>

        </>
    );
}

export default App;