import React from 'react';
import './App.css';
import Overview from './components/Overview/Overview';
import Details from './components/Details/Details';
import {Route, Switch} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './fonts/GothamProMedium.ttf';

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/' render={() => <Overview/>}/>
                <Route path='/overview' render={() => <Overview/>}/>
                <Route path='/details' render={() => <Details/>}/>
            </Switch>
        </div>
    );
}

export default App;
