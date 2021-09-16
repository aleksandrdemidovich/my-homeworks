import React, {useEffect, useState} from 'react'
import Error404 from "./pages/Error404";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import Header from "./Header";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}


function Routes() {

    const [showHeader, setShowHeader] = useState(true)
    const {pathname} = useLocation();

    useEffect(() => {
        setShowHeader(Object.values(PATH).includes(pathname))
    }, [pathname])

    return (
        <>
            {showHeader && <Header/>}
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </>
    )
}

export default Routes
