const test = () => {
    console.log("This app is running well");
};

test(); // Panggil fungsi di sini
import React from 'react';

const App = () => {
    const test = () => {
        console.log("This app is running well");
    };

    // Panggil test saat tombol ditekan
    return (
        <div>
            <h1>Welcome to My App</h1>
            <button onClick={test}>Test Console</button>
        </div>
    );
};

export default App;
import React, { useEffect } from 'react';

const App = () => {
    const test = () => {
        console.log("This app is running well");
    };

    useEffect(() => {
        test();
    }, []);

    return (
        <div>
            <h1>Auto Console Test</h1>
        </div>
    );
};

export default App;