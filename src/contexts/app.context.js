import React, { createContext, useReducer } from 'react';
import appReducer from '../reducers/app.reducer';
const initialState = { items: [], currUrl: '', currShortUrl: '' };
export const AppContext = createContext();
export const DispatchContext = createContext();
export function AppProvider(props) {
    const [appState, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={appState}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </AppContext.Provider>
    );
}