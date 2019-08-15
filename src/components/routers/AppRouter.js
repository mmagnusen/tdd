import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store/store';

import { 
    HomePage,
    ResourcesPage,
    JestPage,
    EnzymePage,
    SeleniumPage,
    HowToPage,
    ConceptsPage,
    MechanicsPage,
    JavaScriptBasicsPage
} from '../../components';
import './App.scss';

class AppRouter extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={HomePage} exact={true}/>
                        <Route path='/jest/:slug' component={JestPage} />
                        <Route path='/enzyme' component={EnzymePage} exact={true}/>
                        <Route path='/selenium' component={SeleniumPage} exact={true}/>
                        <Route path='/resources' component={ResourcesPage} exact={true}/>
                        <Route path='/javascript-mechanics/:slug' component={MechanicsPage} />
                        <Route path='/how-to/:slug' component={HowToPage} />
                        <Route path='/concepts/javascript/:slug' component={ConceptsPage} />
                        <Route path='/courses/:course/:chapter/:slug' component={JavaScriptBasicsPage} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
};

export default AppRouter;