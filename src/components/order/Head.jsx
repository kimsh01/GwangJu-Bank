import React from 'react';
import '../common/Order.css';
import bank_logo from '../assets/imgs/명함주문_img/bank_logo.jpg';

const Head = () => {
    return (
        <>
            <div className='h_container'>
                <div className='top_logo'>
                    <a href='"http://kjbank.qpop.deals/02_order/order01.php'>
                        <img src={bank_logo} alert="광주은행" alt='' />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Head;