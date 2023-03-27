import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import '../common/Order.css';
import Head from './Head';
import Body from './Body';
import Deliver from './Deliver';
import Confirm from './Confirm';
import Complete from '../complete/Complete';

const Order = () => {
    return (
            <div className='back_container'>
                <div className='o_container'>
                    <Body />
                    
                </div>
            </div>   
    );
};

export default Order;