// Layout.jsx
import React from 'react';
import './App.css'; // Importa il file CSS globale

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {children}
        </div>
    );
};

export default Layout;
