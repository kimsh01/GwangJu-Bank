import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import '../common/Order.css';
import Bank from '../assets/imgs/명함주문_img/bank_logo.jpg';
import Lef from '../assets/imgs/주문완료_img/jmok_img1.png';
import Rig from '../assets/imgs/주문완료_img/jmok_img2.png';
import Home from '../assets/imgs/주문완료_img/btn_logout3.jpg';
import List from '../assets/imgs/주문완료_img/btn_order3.jpg';

const Complete = () => {
    return (
        <>
            <div className='back_container'>
                <div className='o_container'>
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
                                    <Link to='/login'><p>로그아웃</p></Link>
                                </dd>
                            </dl>
                            <b className='b_pr'>명함관련 문의사항 062-239-6752~3</b>
                        </div>

                        {/* ------------Head------------------- */}

                        <div id='container'>
                            <div id='content'>
                                <div className='linebox1'></div>
                                <div className='linebox1'></div>
                                <div className='roundbox4'>
                                    <table align='center' className='orderinfo tb04' cellPadding="0" cellSpacing="0">
                                        <colgroup>
                                            <col width="15%" />
                                            <col width="70%" />
                                            <col width="15%" />
                                        </colgroup>
                                        <tbody>
                                            <tr className='orderinfo2'>
                                                <td id='orderinfo_td'>
                                                    <img src={Lef} alt='' />
                                                </td>
                                                <td className='order_td'>
                                                    <p className='ot1'>주문완료</p>
                                                    <p className='ot2'>주문이 완료되었습니다. 감사합니다.</p>
                                                    <p className='ot3'>제작 및 배송에 관하여 문의하실 때, 주문번호를 알려주시면 더욱 빠른 답변을 받으실 수 있습니다.</p>
                                                </td>
                                                <td id='orderinfo_td'>
                                                    <img src={Rig} alt='' />
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                    <table className='tb01' cellPadding='0' cellSpacing='0'>
                                        
                                        <colgroup>
                                            <col width="20%" />
                                            <col width="10%" span="6" />
                                        </colgroup>

                                        <thead>
                                            <tr>
                                                <th>주문번호</th>
                                                <th>명함이름</th>
                                                <th>부서</th>
                                                <th>주문자성명</th>
                                                <th>전화번호</th>
                                                <th>수량</th>
                                                <th>가격</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>53222C8947</td>
                                                <td>홍길동</td>
                                                <td>테스트본부</td>
                                                <td>홍길동</td>
                                                <td>010-1234-5678</td>
                                                <td>100</td>
                                                <td>0</td>
                                            </tr>
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <td colSpan="7">
                                                    <div class="add_dv">
                                                        <span>상세내역 : 
                                                            아르떼울트라화이트 210g /
                                                            양면칼라				
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <div class="btn_box_ok">
                                        <a href="http://kjbank.qpop.deals/02_order/order01.php">
                                            <img alt="홈" src={Home} />                                               
                                        </a>
                                        &nbsp;
                                        <a href="http://kjbank.qpop.deals/02_order/order03.php">
                                            <img alt="주문리스트" src={List} />
                                        </a> 
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Complete;