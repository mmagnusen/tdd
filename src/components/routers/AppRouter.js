import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { 
    Footer, 
    HomePage,
    Navigation,
    ResourcesPage,
    JestPage,
    EnzymePage,
} from '../../components';
import './App.scss';

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/jest' component={JestPage} exact={true}/>
                <Route path='/enzyme' component={EnzymePage} exact={true}/>
                <Route path='/resources' component={ResourcesPage} exact={true}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter;