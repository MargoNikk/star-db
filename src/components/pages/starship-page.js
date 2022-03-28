import React from 'react';
import { Outlet } from "react-router-dom";
import Row from '../row';
import { StarShipList } from '../sw-components';

import './starship-page.css';

const StarshipPage = () => {
    return (
        <Row left={<StarShipList />} right={<Outlet />} />
    );
}

export default StarshipPage;