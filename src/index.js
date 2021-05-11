import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UserGithub from './gitapi'
ReactDOM.render(
     <UserGithub source="https://api.github.com/users/keltonlee" />,
     document.getElementById('root')
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
