import React from 'react';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandBox/NewsSandBox";
import News from "../views/news/News";
import Detail from "../views/news/Detail";

function IndexRouter() {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/login'} component={Login}/>
                <Route path="/news" component={News}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path={'/'} render={() =>
                    localStorage.getItem('token') ?
                        <NewsSandBox/> : <Redirect to={'/login'}/>
                }/>
            </Switch>
        </HashRouter>
    );
}

export default IndexRouter;
