import React, { Component } from 'react';
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
    HowToPage,
    ConceptsPage,
} from '../../components';
import './App.scss';

class AppRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation />
                    <Switch>
                        <Route path='/' component={HomePage} exact={true}/>
                        <Route path='/jest/:slug' component={JestPage} />
                        <Route path='/enzyme' component={EnzymePage} exact={true}/>
                        <Route path='/selenium' component={SeleniumPage} exact={true}/>
                        <Route path='/resources' component={ResourcesPage} exact={true}/>
                        <Route path='/how-to/:slug' component={HowToPage} />
                        <Route path='/concepts/javascript/:slug' component={ConceptsPage} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </Provider>
        )
    }
};

export default AppRouter;