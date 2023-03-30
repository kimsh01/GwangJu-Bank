import React from 'react';
import '../korea/Kor.css';
import Logo from '../korea/main_bank_logo.png';

const KorW = () => {
    return (
        <>
            <div className='container_c'>
                <div className='f_flex'>
                    <div id='f_wrap'>
                        <div className='logo_c'>
                            <img src={Logo} alt='' />
                        </div>
                            <form id='r_part'>
                                <span className='name_01'>홍 길 동</span>
                                <br/>
                                <div className='name_02'>
                                    <span>양재지점</span> <span>|</span> <span>지점장</span>
                                </div>
                                <div className='infor'>
                                    <div className='name_03'>
                                        <span>T12312312312</span>
                                        <span>F12312312312</span>
                                    </div>
                                    <div className='name_04'>
                                        <span>M</span>
                                        <span>E</span>
                                    </div>
                                    <span>상세주소</span>
                                    <span>www.kjbank.com</span>
                                </div>
                                
                            </form>
                        </div>

                        <div id='l_part'>
                            <p id='border_line'>JB금융그룹</p>
                            <p>JB금융지주</p>
                            <p>광주은행</p>
                            <p>전북은행</p>
                            <p>JB우리캐피탈</p>
                            <p>JB자산운용</p>
                            <p>JB인베스트먼트</p>
                            <p>PPCBank</p>
                            <p>JB PPAM</p>
                            <p>JB Capital Myanmar</p>
                            <p>JB Securities Vietnam</p>
                        </div>  
                    </div>
            </div>

            
        
        </>
    );
};


// 5mm = 18.5px
// 5.5mm = 20.35px
// 6mm = 22.2px
// 50mm = 185px
// 90mm = 333px

// Notion , JWP , API , Flutter
export default KorW;