import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MapPage from './screens/Map/MapPage';
import HomePage from './screens/Home/HomePage';

import {PokemonProvider} from './contexts/PokemonContext'

const App = () => (
    <PokemonProvider>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/map"  component={MapPage} />
        </Switch>
    </PokemonProvider>
);

export default App;
