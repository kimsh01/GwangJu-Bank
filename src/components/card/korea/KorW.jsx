import React from 'react';
import './Kor.css';
import Logo from '../korea/main_bank_logo.png';

const KorW = () => {
    return (
        <>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo} alt='' />
                </div>

                <form>
                    <span className='name_01'>홍길동</span>
                    <br/>
                    <div className='name_02'>
                        <span>양재지점</span>
                        <span>지점장</span>
                    </div>
                    <div className='name_03'>
                        <span>T12312312312</span>
                        <span>F12312312312</span>
                    </div>
                    <div className='name_04'>
                        <span>M</span>
                        <span>E</span>
                    </div>
                </form>
                
            </div>
        
        </>
    );
};


// 5mm = 18.5px
// 5.5mm = 20.35px
// 6mm = 22.2px
// 50mm = 185px
// 90mm = 333px
export default KorW;