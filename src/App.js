import React from 'react';
import {createStore} from 'redux';

import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import {reducer} from "./reducer/reducer";
import {createEffects} from "./services/createEffects";

function App() {

    const store = createStore(reducer);
    const effects = createEffects(store.dispatch);

    return (
        <StoreContext.Provider value={store}>
            <EffectContext.Provider value={effects}>
                <Header/>
                <Content/>
                <Footer/>
            </EffectContext.Provider>
        </StoreContext.Provider>
  )
}

export default App;
export const StoreContext = React.createContext('');
export const EffectContext = React.createContext('');
