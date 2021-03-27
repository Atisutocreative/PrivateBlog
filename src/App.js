import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useHistory,
    Redirect,
} from "react-router-dom";
import './App.css';
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blogpost";
import Home from "./pages/Home"



function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
  const history = useHistory();


  function handleClick() {
      console.log("je heb geklikt");
      history.push('/')


  }
  return (
        <>
<Router>
        <nav>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName="active-link" >home</NavLink>
                    </li>
                    {isAuthenticated === true &&
                    <li>
                        <NavLink to='/login' activeClassName="active-link">Login</NavLink>
                    </li>
                    }
                    <li>
                        <NavLink to='/blog' activeClassName="active-link" >Blog</NavLink>
                    </li>

                    <li>
                        <NavLink to='/blogPost' activeClassName="active-link" >BlogPost</NavLink>
                    </li>
                </ul>

        </nav>

            <Switch>
                <Route exact path='/'>//?:home
                    <Home />
                </Route>

                <Route path='/login'>
                    {isAuthenticated === true
                        ?
                    <section>
                        <h1>Login</h1>
                        <button onClick={handleClick} type="button">Inloggen</button>
                    </section>
                        :
                        <Redirect to="/"/>}
                </Route>

                <Route path='/blog/'>//?:id
                    <Blog />
                </Route>

                <Route path='/blogpost'>
                    <BlogPost />
                </Route>
            </Switch>
</Router>
        </>
  );
}

export default App;
