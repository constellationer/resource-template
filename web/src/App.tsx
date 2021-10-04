import React from 'react';

import { useWindowListener } from './hooks/useWindowListener';

function App() {
    const {
        isActive
    } = useWindowListener();

    return (
        <div>
            {isActive ? "isActive is true" : "isActive is false"}
        </div>
    );
}

export default App;