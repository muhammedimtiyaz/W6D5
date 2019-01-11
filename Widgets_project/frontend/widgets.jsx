import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

function Root() {
    return (
        <div>
            <Clock />
            <Tabs tabs={tabs} />
        </div>
    )
}
const tabs = [
    {title: 'Motherfuckin One', content: 'I am the first'},
    {title: 'Two thine ownself get fucked', content: 'Hamlet was a biiiitch'},
    {title: 'Thrice is rice', content: 'Macbeth too'} 
];

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("main");
    ReactDOM.render(<Root/> , root);
});

