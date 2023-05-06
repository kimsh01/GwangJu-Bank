import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './Confirm.module.css';
import Bank from '../assets/imgs/명함주문_img/bank_logo.jpg';
import Check from '../assets/imgs/명함주문_img/check.png';
import Newn1 from '../assets/imgs/명함주문_img/202312122722kjbuser_2.jpg';
import Newn2 from '../assets/imgs/명함주문_img/202312122722kjbuser_3.jpg';
import Preview from '../assets/imgs/명함주문_img/preview.png';
import Pre from '../assets/imgs/명함주문_img/btn_pre.jpg';
import Next from '../assets/imgs/명함주문_img/btn_next.jpg';
import Ok from '../assets/imgs/명함주문_img/btn_ok.jpg';

const Confirm = () => {
    return (
        <>
            <div className='b_container'>
                <div className='top_logo'>
                    <img src={Bank} alt='' />
                </div>
                <div className='top_left'>
                    <dl>
                        <dd>
                            <p><b>광주은행</b> 로그인 하였습니다.</p>
                        </dd>
                        <p className='s_p'>|</p>
                        <dd>
                            <Link to='/list'><p>주문리스트</p></Link>
                        </dd>
                        <p className='s_p'>|</p>
                        <dd>
                            <Link to='/'><p>로그아웃</p></Link>
                        </dd>
                    </dl>
                    <b className='b_pr'>명함관련 문의사항 062-239-6752~3</b>
                </div>
                
                <div className='content'>

                    <div className='linebox1'></div>
                    <div className='roundbox5'></div>
                    
                    <div className='roundbox4'>
                        <div className='sub_tit'>
                            <div className='sub_img2'> <img src={Check} alt='' /> </div>

                            <div className='sub_tit_p'> <p>최종 디자인 확인</p> </div>
                        </div>

                            <div className='c_sub_tit_img'>
                                <div className='sub_tit_img'>
                                    <div className='f_name'>
                                        <img src={Newn1} alt='' />
                                    </div>                                
                                </div>

                                <div className='sub_tit_img'>
                                    <div className='s_name'>
                                        <img src={Newn2} alt='' />
                                    </div>
                                </div>
                            </div>
                            
                            {/* -----------------------input----------------------------- */}
                            
                                <div className='step_02'>
                                    <div className='round1_3'>
                                        <div className='dv_left02'>

                                        <div className='sub_tit_d'>
                                            <div className='sub_img3'> <img src={Check} alt='' /> </div>

                                            <div id='sub_tit_p_1'> <p>배송정보</p> </div>
                                        </div>

                                            <div className='sub03_cont4 '>
                                                <br/>
                                                <table className='tb03' cellSpacing='0px' cellPadding='0px'>
                                                    <colgroup>
                                                        <col width='30%' />
                                                        <col width='70%' />
                                                    </colgroup>

                                                    <tbody className='dr_th'>
                                                        
                                                        <tr>
                                                            <th>
                                                                신청인
                                                            </th>
                                                           
                                                            <td id='td'>
                                                                
                                                            </td>    
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                수취인
                                                            </th>
                                                            <td>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                전화번호
                                                            </th>
                                                            <td>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                부서
                                                            </th>
                                                            <td>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                핸드폰
                                                            </th>
                                                            <td>
                                                                
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                주소
                                                            </th>
                                                            <td>
                                                                
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        </div>
                                        </div>
                                    </div>

                                    {/* --------------------round1_1-------------- */}

                                    <div className='round1_4'>
                                        <div className='dv_left02'>
                                            <div className='d_back'>
                                                <div className='sub_tit_d'>
                                                    <div className='sub_img3'> <img src={Check} alt='' /> </div>

                                                    <div id='sub_tit_p_1'> <p>결제 정보</p> </div>  
                                                </div>

                                                <div className='sub03_cont4_s '>
                                                    <br/>
                                                    <table className='tb03'>
                                                        <colgroup>
                                                            <col width='30%' />
                                                            <col width='70%' />
                                                        </colgroup>

                                                        <tbody className='dr_th_s'>
                                                            <tr>
                                                                <th>
                                                                    수량선택
                                                                </th>
                                                                <td>
                                                                    
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    옵션선택
                                                                </th>
                                                                <td>
                                                                    
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* -------btn_box3------- */}
                                <div className='btn_box2_c'>

                                    <div className='btn_box2_left'>
                                        <p className='btn_box2_cp'>
                                            결재 전 마지막으로 입력한 내용이 정확한지 확인하여 주시기 바랍니다. 
                                        </p>
                                        <p className='btn_box2_cp'>
                                            결재 후 배송지 변경시 배송비용이 추가될 수 있습니다.
                                        </p>
                                    </div>

                                    <div className='btn_box2_right'>
                                        <Link to='/deliver'>
                                            <img src={Pre} alt='' />
                                        </Link>
                                        &nbsp;&nbsp;
                                        <Link to='/complete'>
                                            <img src={Ok} alt=''  />
                                        </Link>
                                    </div>

                                </div>
                                    {/* --------btn_box2--------- */}
			                    </div>
                            </div>
                        </div>                    
                    
                              
                </>
    );
};

export default Confirm;