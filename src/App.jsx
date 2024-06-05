/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import church from './images/church_service.jpg';
import OrganizationDetails from './components/OrganizationDetails';
import OrphanageDetails from './components/OrphanageDetails';

function App() {
    return (
        <div className="App">
            <h1>Home Of Peace Childrens Home</h1>
            <img
                src={church}
                alt="church service image"
            />
            <OrganizationDetails />
            <OrphanageDetails />
        </div>
    );
}

export default App;
