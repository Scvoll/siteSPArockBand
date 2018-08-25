import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, HashRouter } from "react-router-dom"
import { Header } from "./header"
import { General } from "./tabs/general"
import { Video } from "./tabs/video"
import { Footer } from "./footer"
import {Songs} from "./tabs/songs"
import {Sale} from "./tabs/sale"
import "../styles/style.scss"
import {Contacts} from "./tabs/contacts"
import registerServiceWorker from './registerServiceWorker'


const RouteTabs = () => {
    return (
     <div>
        <Switch>
            <Route exact path='/' component={General}/>
            <Route exact path='/songs' component={Songs}/>
            <Route path='/video' component={Video}/>
            <Route path='/sale' component={Sale}/>
            <Route path='/contacts' component={Contacts}/>
        </Switch>
     </div>
    )
}
;

const App = () => {
    return (
        <div>
            <Header/>
            <RouteTabs/>
            <Footer/>
        </div>
    )
};

ReactDOM.render((
    <HashRouter>
        <App/>
    </HashRouter>),
    document.getElementById('root')
);
registerServiceWorker();
