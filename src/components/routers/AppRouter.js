import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';

import { 
    Footer, 
    HomePage,
    Navigation,
    ResourcesPage,
    JestPage,
    EnzymePage,
    SeleniumPage,
    HowToPage
} from '../../components';
import './App.scss';

const AppRouter = () =>  (
    <Provider store={store}>
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/jest' component={JestPage} exact={true}/>
                <Route path='/enzyme' component={EnzymePage} exact={true}/>
                <Route path='/selenium' component={SeleniumPage} exact={true}/>
                <Route path='/resources' component={ResourcesPage} exact={true}/>
                <Route path='/how-to' component={HowToPage} exact={true}/>
            </Switch>
            <Footer />
        </BrowserRouter>
    </Provider>
);

export default AppRouter;