import React from 'react'
import ReactDOM from 'react-dom'

import { WindowListenerProvider } from './contexts/WindowListener';
import App from './App';

ReactDOM.render(
    <WindowListenerProvider>
        <App />
    </WindowListenerProvider>, document.getElementById('root')
);