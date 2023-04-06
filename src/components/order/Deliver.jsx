import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './Deliver.module.css';
import Bank from '../assets/imgs/명함주문_img/bank_logo.jpg';
import Check from '../assets/imgs/명함주문_img/check.png';
import Newn1 from '../assets/imgs/명함주문_img/202312122722kjbuser_2.jpg';
import Newn2 from '../assets/imgs/명함주문_img/202312122722kjbuser_3.jpg';
import Pre from '../assets/imgs/명함주문_img/btn_pre.jpg';
import Next from '../assets/imgs/명함주문_img/btn_next.jpg';

const Deliver = () => {
    // check_box black -> alert
    const Chk01 = document.getElementById('chk01');
    const Chk02 = document.getElementById('chk02');
    const Chk03 = document.getElementById('chk0');

    function checkBox(){
        if(!document.getElementById('chk01').checked){
            alert('미리보기 이미지를 통하여 오탈자를 확인하여 주시기 바랍니다.')
            return;
        }   
        if(!document.getElementById('chk02').checked){
            alert('미리보기 이미지를 통하여 오탈자를 확인하여 주시기 바랍니다.')
            return;
        }
        if(!document.getElementById('chk03').checked){
            alert('미리보기 이미지를 통하여 오탈자를 확인하여 주시기 바랍니다.')
            return;
        }      
    }

    // check_box black -> alert

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
                            <a href='http://kjbank.qpop.deals/02_order/order03.php'><p>주문리스트</p></a>
                        </dd>
                        <p className='s_p'>|</p>
                        <dd>
                            <a href='http://kjbank.qpop.deals/01_main/logout.php'><p>로그아웃</p></a>
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

                                                    <tbody>
                                                        
                                                        <tr>
                                                            <th>
                                                                신청인
                                                            </th>
                                                           
                                                            <td id='td'>
                                                                <input type='text' className='input02'  />
                                                            </td>    
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                수취인
                                                            </th>
                                                            <td>
                                                                <input type='text' className='input02'  />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                전화번호
                                                            </th>
                                                            <td>
                                                                <input type='text' className='input02'  />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                부서
                                                            </th>
                                                            <td>
                                                                <input type='text' className='input02'  />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                핸드폰
                                                            </th>
                                                            <td>
                                                                <input type='text' className='input02'  />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                주소
                                                            </th>
                                                            <td>
                                                                <input type='text' className='input02 tb_phnum'  />
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

                                                <div className='sub03_cont4 '>
                                                    <br/>
                                                    <table className='tb03'>
                                                        <colgroup>
                                                            <col width='30%' />
                                                            <col width='70%' />
                                                        </colgroup>

                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    수량선택
                                                                </th>
                                                                <td>
                                                                    <select>
                                                                        <option value="100">1갑 - 100 매</option>
                                                                        <option value="200">2갑 - 200 매</option>
                                                                        <option value="300">3갑 - 300 매</option>
                                                                        <option value="400">4갑 - 400 매</option>
                                                                        <option value="500">5갑 - 500 매</option>
                                                                        <option value="600">6갑 - 600 매</option>
                                                                        <option value="700">7갑 - 700 매</option>
                                                                        <option value="800">8갑 - 800 매</option>
                                                                        <option value="900">9갑 - 900 매</option>
                                                                        <option value="1000">10갑 - 1,000 매</option>
                                                                    </select>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>
                                                                    옵션선택
                                                                </th>
                                                                <td>
                                                                    <p className='check_input03'>
                                                                        <input type='radio' id='check_input02' checked readOnly /> <span id='span_fs'>코팅&nbsp;&nbsp;&nbsp;</span>
                                                                        <input type='radio' id='check_input02' /> <span id='span_fs'>무코팅(디지털)</span>
                                                                    </p>
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
                                    <div className='step02'>
                                        <div className="btn_box4">
                                            <div className="btn_box4_div1">
                                                <input name="chk01" className="btn_box4_div_input01" id="chk01" type="checkbox" />
                                                <p className="btn_box4_div_p1">오탈자는 없는지 확인하셨습니까?</p>
                                            </div>
                                            <div className="btn_box4_div2">
                                                <input name="chk02" className="btn_box4_div_input01" id="chk02" type="checkbox" />
                                                <p className="btn_box4_div_p1">원하시는 정보(전화번호, 이메일, 핸드폰 등)를 정확히 입력하셨습니까?</p>
                                            </div>
                                            <div className="btn_box4_div3">
                                                <input name="chk03" className="btn_box4_div_input01" id="chk03" type="checkbox" />
                                                <p className="btn_box4_div_p1">양면 디자인 모두 확인하셨습니까?</p>
                                            </div>
                                            {/* --------btn_box2--------- */}
                                            <div className='btn_box3'>
                                                <div className='btn_box2_1'>
                                                    <div className='btn_box2_left left'>
                                                        <p className='btn_box2_1'>
                                                            결재 전 마지막으로 입력한 내용이 정확한지 확인하여 주시기 바랍니다. 
                                                        </p>
                                                        <p className='btn_box2_2'>
                                                            결재 후 배송지 변경시 배송비용이 추가될 수 있습니다.
                                                        </p>
                                                    </div>

                                                    <div className='btn_box2_right'>
                                                        <a href=''>
                                                            <img src={Pre} alt='' />
                                                        </a>
                                                        &nbsp;&nbsp;
                                                        <a href=''>
                                                            <img src={Next} alt='' onClick={checkBox}  />
                                                        </a>
                                                        {/* btn <p> css 하는중 */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* --------btn_box2--------- */}
			                            </div>
                                    </div>
                                {/* -------btn_box3------- */}
                            

                        </div>                    
                    </div> 
                                 
                </div>
        
        </>
    );
};

export default Deliver;