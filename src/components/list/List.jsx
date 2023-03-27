import React from 'react';
import '../common/Order.css';
import Head from '../order/Head';
import Bank from '../assets/imgs/명함주문_img/bank_logo.jpg';
import Search from '../assets/imgs/주문리스트_img/searchbtn.png';
import Plus from '../assets/imgs/주문리스트_img/btn_o_add.png';
import Cancel from '../assets/imgs/주문리스트_img/btn_o_cancel.png';
import Ico from '../assets/imgs/주문리스트_img/ico_jpg.gif'; 

const List = () => {
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
                                    <a href='http://kjbank.qpop.deals/02_order/order03.php'><p>주문리스트</p></a>
                                </dd>
                                <p className='s_p'>|</p>
                                <dd>
                                    <a href='http://kjbank.qpop.deals/01_main/logout.php'><p>로그아웃</p></a>
                                </dd>
                            </dl>
                            <b className='b_pr'>명함관련 문의사항 062-239-6752~3</b>
                        </div>

                        {/* ---------------Head------------- */}

                        <div id='container'>
                            <div className='container_top'>
                                <div className='content' id='content'>
                                    <div className='linebox1'></div>


                                    <div className='roundbox6'>
                                        <form name='Search' id='Search' method='post'>
                                            <input type="hidden" name="tab" value="0" />
                                            <input type="hidden" name="s_sdate" value="2023-02-15" />
                                            <input type="hidden" name="s_edate" value="2023-02-22" />
                                            <input type="hidden" name="s_dept" value="" />
                                            <input type="hidden" name="s_name" value="" />
                                            <input type="hidden" name="o_name" value="" />
                                            <input type="hidden" name="nowpage" value="1" />
                                            <input type="hidden" name="recodeid" value="" />
                                            <input type="hidden" name="s_sign" value="" />

                                            <p title='기존 명함 찾기' className='sr_name'>
                                                <span>◆</span>&nbsp; 기존 명함 찾기
                                            </p>
                                            <div className='search'>
                                                <ul className='area'>
                                                    <li className='title'>신청자</li>
                                                    <li><input name="order_name" className="input05" id="order_name"  type="text" value="" /></li>
                                                    <li className="title">이름</li>
                                                    <li><input name="search_name" className="input05" id="search_name" type="text" value="" /></li>
                                                    <li className="title">부서명</li>
                                                    <li>
                                                        <select name="search_part" className="part" id="search_part">
                                                            <option value="">전체</option>
                                                            <option value="본점">본점</option>
                                                            <option value="각화동지점">각화동지점</option>
                                                            <option value="강남지점">강남지점</option>
                                                            <option value="강진지점">강진지점</option>
                                                            <option value="경양로지점">경양로지점</option>
                                                            <option value="계림지점">계림지점</option>
                                                            <option value="고흥지점">고흥지점</option>
                                                            <option value="광무동지점">광무동지점</option>
                                                            <option value="광양지점">광양지점</option>
                                                            <option value="광영지점">광영지점</option>
                                                            <option value="광주대학교출장소">광주대학교출장소</option>
                                                            <option value="광주시청지점">광주시청지점</option>
                                                            <option value="광주시청지점OCR센터">광주시청지점OCR센터</option>
                                                            <option value="광주테크노파크출장소">광주테크노파크출장소</option>
                                                            <option value="광천동지점">광천동지점</option>
                                                            <option value="국동지점">국동지점</option>
                                                            <option value="금남로지점">금남로지점</option>
                                                            <option value="금당지점">금당지점</option>
                                                            <option value="금호동지점">금호동지점</option>
                                                            <option value="나주지점">나주지점</option>
                                                            <option value="남구청출장소">남구청출장소</option>
                                                            <option value="문화전당지점">문화전당지점</option>
                                                            <option value="남악지점">남악지점</option>
                                                            <option value="논현지점">논현지점</option>
                                                            <option value="농성동지점">농성동지점</option>
                                                            <option value="담양지점">담양지점</option>
                                                            <option value="대불산단지점">대불산단지점</option>
                                                            <option value="대치동지점">대치동지점</option>
                                                            <option value="도시공사출장소">도시공사출장소</option>
                                                            <option value="동광양금융센터">동광양금융센터</option>
                                                            <option value="동구청출장소">동구청출장소</option>
                                                            <option value="동림지점">동림지점</option>
                                                            <option value="동신대학교">동신대학교</option>
                                                            <option value="동운지점">동운지점</option>
                                                            <option value="두암타운지점">두암타운지점</option>
                                                            <option value="마재지점">마재지점</option>
                                                            <option value="매곡동지점">매곡동지점</option>
                                                            <option value="매월동지점">매월동지점</option>
                                                            <option value="목포시청출장소">목포시청출장소</option>
                                                            <option value="목포지점">목포지점</option>
                                                            <option value="무안지점">무안지점</option>
                                                            <option value="문화동지점">문화동지점</option>
                                                            <option value="문흥지점">문흥지점</option>
                                                            <option value="방림동지점">방림동지점</option>
                                                            <option value="방배지점">방배지점</option>
                                                            <option value="백운동지점">백운동지점</option>
                                                            <option value="법원지점">법원지점</option>
                                                            <option value="보성지점">보성지점</option>
                                                            <option value="봉선동지점">봉선동지점</option>
                                                            <option value="봉선이마트지점">봉선이마트지점</option>
                                                            <option value="부평지점">부평지점</option>
                                                            <option value="북구차량등록사업소출장소">북구차량등록사업소출장소</option>
                                                            <option value="북구청출장소">북구청출장소</option>
                                                            <option value="북부지점">북부지점</option>
                                                            <option value="북항지점">북항지점</option>
                                                            <option value="빛가람지점">빛가람지점</option>
                                                            <option value="빛고을건강타운(출)">빛고을건강타운(출)</option>
                                                            <option value="빛고을전대병원출장소">빛고을전대병원출장소</option>
                                                            <option value="산수동지점">산수동지점</option>
                                                            <option value="삼각지점">삼각지점</option>
                                                            <option value="삼성동지점">삼성동지점</option>
                                                            <option value="상동지점">상동지점</option>
                                                            <option value="상무버들지점">상무버들지점</option>
                                                            <option value="상무비즈니스센터출장소">상무비즈니스센터출장소</option>
                                                            <option value="상무역지점">상무역지점</option>
                                                            <option value="상무지점">상무지점</option>
                                                            <option value="서광주지점">서광주지점</option>
                                                            <option value="서구청출장소">서구청출장소</option>
                                                            <option value="서동지점">서동지점</option>
                                                            <option value="서울영업부">서울영업부</option>
                                                            <option value="소촌동지점">소촌동지점</option>
                                                            <option value="송정지점">송정지점</option>
                                                            <option value="수완지점">수완지점</option>
                                                            <option value="순천신대지점">순천신대지점</option>
                                                            <option value="순천역지점">순천역지점</option>
                                                            <option value="순천지점">순천지점</option>
                                                            <option value="신가동지점">신가동지점</option>
                                                            <option value="신세계지점">신세계지점</option>
                                                            <option value="신안군청출장소">신안군청출장소</option>
                                                            <option value="신안동지점">신안동지점</option>
                                                            <option value="신창동지점">신창동지점</option>
                                                            <option value="쌍촌동지점">쌍촌동지점</option>
                                                            <option value="양림동지점">양림동지점</option>
                                                            <option value="양산동지점">양산동지점</option>
                                                            <option value="양재지점">양재지점</option>
                                                            <option value="여서동지점">여서동지점</option>
                                                            <option value="여수시청출장소">여수시청출장소</option>
                                                            <option value="여수지점">여수지점</option>
                                                            <option value="여의도지점">여의도지점</option>
                                                            <option value="여천금융센터">여천금융센터</option>
                                                            <option value="역전지점">역전지점</option>
                                                            <option value="연동지점">연동지점</option>
                                                            <option value="연향동지점">연향동지점</option>
                                                            <option value="염주지점">염주지점</option>
                                                            <option value="영광지점">영광지점</option>
                                                            <option value="영산포지점">영산포지점</option>
                                                            <option value="영암지점">영암지점</option>
                                                            <option value="오치동지점">오치동지점</option>
                                                            <option value="완도지점">완도지점</option>
                                                            <option value="용당동지점">용당동지점</option>
                                                            <option value="용봉북지점">용봉북지점</option>
                                                            <option value="용봉지점">용봉지점</option>
                                                            <option value="운남동지점">운남동지점</option>
                                                            <option value="운암동지점">운암동지점</option>
                                                            <option value="월곡동지점">월곡동지점</option>
                                                            <option value="율촌산단지점">율촌산단지점</option>
                                                            <option value="일곡동지점">일곡동지점</option>
                                                            <option value="임동지점">임동지점</option>
                                                            <option value="임방울대로지점">임방울대로지점</option>
                                                            <option value="잠실지점">잠실지점</option>
                                                            <option value="장성지점">장성지점</option>
                                                            <option value="장흥지점">장흥지점</option>
                                                            <option value="전남대학교지점">전남대학교지점</option>
                                                            <option value="전남도청지점">전남도청지점</option>
                                                            <option value="전남영업부">전남영업부</option>
                                                            <option value="전대병원지점">전대병원지점</option>
                                                            <option value="전주금융센터지점">전주금융센터지점</option>
                                                            <option value="조대병원출장소">조대병원출장소</option>
                                                            <option value="조선대학교지점">조선대학교지점</option>
                                                            <option value="주월지점">주월지점</option>
                                                            <option value="중부지점">중부지점</option>
                                                            <option value="진월동지점">진월동지점</option>
                                                            <option value="첨단2산단지점">첨단2산단지점</option>
                                                            <option value="첨단금융센터">첨단금융센터</option>
                                                            <option value="첨단월계지점">첨단월계지점</option>
                                                            <option value="청담지점">청담지점</option>
                                                            <option value="충장로지점">충장로지점</option>
                                                            <option value="평동공단금융센터">평동공단금융센터</option>
                                                            <option value="풍암동지점">풍암동지점</option>
                                                            <option value="풍향동지점">풍향동지점</option>
                                                            <option value="하남공단1금융센터">하남공단1금융센터</option>
                                                            <option value="하남공단2금융센터">하남공단2금융센터</option>
                                                            <option value="하남로지점">하남로지점</option>
                                                            <option value="하남용아로지점">하남용아로지점</option>
                                                            <option value="하당지점">하당지점</option>
                                                            <option value="학동지점">학동지점</option>
                                                            <option value="한국광기술원출장소">한국광기술원출장소</option>
                                                            <option value="한전지점">한전지점</option>
                                                            <option value="함평지점">함평지점</option>
                                                            <option value="해남지원출장소">해남지원출장소</option>
                                                            <option value="해남지점">해남지점</option>
                                                            <option value="호남대학교출장소">호남대학교출장소</option>
                                                            <option value="화순전대병원출장소">화순전대병원출장소</option>
                                                            <option value="화순지점">화순지점</option>
                                                            <option value="화정지점">화정지점</option>
                                                            <option value="효천지점">효천지점</option>
                                                        </select>
                                                    </li>
                                                    <li className="title" id="title_day">기간설정</li>
                                                        <li>
                                                            <input name="begin_date" className="input02 hasDatepicker" id="Div1_Input1" type="text" value="2023-02-15" /> ~ 
                                                            <input name="end_date" className="input02 hasDatepicker" id="Div2_Input2" type="text" value="2023-02-22" />   
                                                        </li>
                                                        <li><span className="btn_basic small"><a href=''>오늘</a></span></li>
                                                        <li><span className="btn_basic small"><a href=''>일주일</a></span></li>
                                                        <li><span className="btn_basic small"><a href=''>1개월</a></span></li>
                                                        <li><span className="btn_basic small"><a href=''>3개월</a></span></li>
                                                        <li className="btn"><a href=''><img src={Search} alt="search" /></a></li>
                                                </ul>
                                            </div>
                                        </form>

                                        <div className="list_part2">
                                            <ul id="tab">
                                                <a href=""><li className="p_over">전체 (3)</li></a>
                                                <a href=""><li>승인대기 </li></a>
                                                <a href=""><li>출력대기 </li></a>
                                                <a href=""><li>출력중 </li></a>
                                                <a href=""><li>배송준비중 </li></a>
                                                <a href=""><li>배송중 </li></a>
                                                <a href=""><li>배송완료 </li></a>
                                                <a href=""><li>취소 </li></a>
                                            </ul>
                                        </div>

                                        {/*  */}

                                        <form name="check_box" method="post">
                                            <div className="list_tot">
                                                <input name="user" type="hidden" value="montessori" />
                                                <table className="tb_list2" cellSpacing="0" cellPadding="0">
                                                    <colgroup>
                                                        <col width="10%"/>
                                                    </colgroup>
                                                    <thead>
                                                        <tr>
                                                        <th>주문번호</th>
                                                        <th>신청자</th>
                                                        <th>명함성명</th>
                                                        <th>주문일자</th>
                                                        <th>제작일자</th>
                                                        <th>수량</th>
                                                        <th>부서명</th>
                                                        <th>접수구분</th>
                                                        <th>상태</th>
                                                        <th>추가주문</th>
                                                        </tr>
                                                    </thead>
                                                        <tbody id="tab0" className="state_tab">
                                                            <tr>
                                                                <td>53222C8947</td>
                                                                <td>홍길동</td>
                                                                <td>홍길동</td>
                                                                <td>2023-02-22 00:28</td>
                                                                <td></td>
                                                                <td>100</td>
                                                                <td>테스트본부</td>
                                                                <td></td>
                                                                <td>승인대기</td>
                                                                <td>
                                                                    <span className="btn_blue small">
                                                                        <a href="">
                                                                            <img src={Plus} alt="추가주문" />
                                                                        </a>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="detail" colSpan="8">
                                                                    <ul>
                                                                        <li></li>
                                                                        <li>상세내역 : </li>								 
                                                                        <li>아르떼울트라화이트 210g ,</li>								 
                                                                        <li>양면칼라</li>								 
                                                                        <li></li>							 
                                                                        <li className='list_simg'>
                                                                            <a href="">
                                                                                <img alt="jpeg" src={Ico} />
                                                                            </a>
                                                                        </li>								 
                                                                    </ul>
                                                                </td>
                                                                <td className="detail_btn" colSpan="2">
                                                                    <a href="">
                                                                        <img src={Cancel} alt="주문취소" />
                                                                    </a>					
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>52221C8946</td>
                                                                <td>오경준</td>
                                                                <td>오경준</td>
                                                                <td>2023-02-21 15:20</td>
                                                                <td></td>
                                                                <td>200</td>
                                                                <td>광주은행신용협동조합</td>
                                                                <td></td>
                                                                <td>승인대기</td>
                                                                <td>
                                                                    <span className="btn_blue small">
                                                                        <a href="">
                                                                            <img src={Plus} alt="추가주문" />
                                                                        </a>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="detail" colSpan="8">
                                                                    <ul>
                                                                        <li></li>
                                                                        <li>상세내역 : </li>								 
                                                                        <li>아르떼울트라화이트 210g ,</li>								 
                                                                        <li>양면칼라</li>																 
                                                                        <li></li>							 
                                                                        <li className='list_simg'>
                                                                            <a href="">
                                                                                <img alt="jpeg" src={Ico}/>
                                                                            </a>
                                                                        </li>								 
                                                                    </ul>
                                                                </td>
                                                                <td className="detail_btn" colSpan="2">
                                                                    <a href="">
                                                                        <img src={Cancel} alt="주문취소" />
                                                                    </a>					
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>46215C8945</td>
                                                                <td>김태형</td>
                                                                <td>김태형</td>
                                                                <td>2023-02-15 15:13</td>
                                                                <td></td>
                                                                <td>100</td>
                                                                <td>프로세스혁신부</td>
                                                                <td></td>
                                                                <td>배송완료</td>
                                                                <td>
                                                                    <span className="btn_blue small">
                                                                        <a href="">
                                                                            <img src={Cancel} alt="추가주문" />
                                                                        </a>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="detail" colSpan="8">
                                                                    <ul>
                                                                        <li></li>
                                                                        <li>상세내역 : </li>								 
                                                                        <li>아르떼울트라화이트 210g ,</li>								 
                                                                        <li>양면칼라</li>			
                                                                        <li></li>							 
                                                                        <li className='list_simg'>
                                                                            <a href="">
                                                                                <img alt="jpeg" src={Ico} />
                                                                            </a>
                                                                        </li>								 
                                                                    </ul>
                                                                </td>

                                                                <td className="detail_btn" colSpan="2">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                            

                                            
                                            <tbody id="tab1" className="state_tab">
                                                </tbody>
                                            

                                            
                                            <tbody id="tab2" className="state_tab">
                                                </tbody>
                                            

                                            
                                            <tbody id="tab3" className="state_tab">
                                                </tbody>
                                            

                                           
                                            <tbody id="tab4" className="state_tab">
                                                </tbody>
                                            

                                           
                                            <tbody id="tab5" className="state_tab">
                                                </tbody>
                                            

                                           
                                            <tbody id="tab6" className="state_tab">
                                                </tbody>
                                           

                                         
                                            <tbody id="tab7" className="state_tab">
                                                </tbody>
                                     
                                            </table>
                                            </div>
                                        </form>
                                        <div className='btn_num'></div>
                                    </div>

                                </div>

                            </div>

                            <div className='pagenum0'>
                           
                            <div class="pagenum">
                                <a href="" className="active">
                                    <b>1</b>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                    
        </>
    );
};

export default List;