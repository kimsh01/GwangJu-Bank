import React from 'react';
import { useState } from 'react';
import { Routes, Router, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import './Body.css';
import Deliver from '../order/Deliver';
import Load from '../assets/imgs/명함주문_img/ajax-loader.gif';
import Bank from '../assets/imgs/명함주문_img/bank_logo.jpg';
import Check from '../assets/imgs/명함주문_img/check.png';
import Newn1 from '../assets/imgs/명함주문_img/202312122722kjbuser_2.jpg';
import Newn2 from '../assets/imgs/명함주문_img/202312122722kjbuser_3.jpg';
import Preview from '../assets/imgs/명함주문_img/preview.png';
import Pre from '../assets/imgs/명함주문_img/btn_pre.jpg';
import Next from '../assets/imgs/명함주문_img/btn_next.jpg';



const Body = () => {
    // page 이동 : next
    const navigate = useNavigate();
    function moveD(){
        navigate('/deliver')
    }

    // page 이동 : next

    // input blank -> alert 띄우기
    function Blank(){
        if(document.getElementById("essen1").value === ""){
            alert("[앞면] 필수 입력 항목 중 비어있는 곳이 있습니다.")
            return;
        }
        if(document.getElementById("essen1").value === ""){
            alert("[앞면] 필수 입력 항목 중 비어있는 곳이 있습니다.")
            return;
        }
        else{
            return(
            document.getElementById('ajax_indicator').style.display = 'block'
            );  
        }
    };
    // input blank -> alert 띄우기

    // Next alert

    function nextBtn(){
        if(document.getElementById('essen1').value === ""){
            alert("[앞면] 필수 입력 항목 중 비어있는 곳이 있습니다.")
            return;
        }
        if(document.getElementById('essen2').value === ""){
            alert("[앞면] 필수 입력 항목 중 비어있는 곳이 있습니다.")
            return;
        }
        
        else{
            window.confirm("주소가 제대로 입력되어있습니까?\n다시한번 확인하시기 바랍니다.\n※ 시안 교정을 한 발주건에 관해서는 인쇄사고 발생시 당사가 책임지지 않음을 말씀드립니다.")
                return;
        } 
    }
    function btnHandler(){
        nextBtn();
        moveD();
    }

    // numberCheck

    const [checkNumber , setCheckNumber] = useState("");

    function numberCheck(e){
        const newCheck = e.target.value;
        if(!isNaN(newCheck)){
            setCheckNumber(newCheck);
        }
    }

    // numberCheck

    // Next alert

    const [spot , setSpot] = useState("");
    const [num , setNum] = useState("");
    const [section , setSection] = useState("");
    const [load , setLoad] = useState("");
    const [essen1 , setEssen1] = useState("")
   
    const handleDeliveryInfo = (info) => {
        setSpot(info);
        setNum(info);
        setLoad(info);
    }

    return (
        <>
        <div id="resultDIV">
            <div id="ajax_indicator" className='ajax_indicator'>
                <strong>
                    <p>이미지 생성중입니다. 다소 시간이 걸릴수 있습니다. 잠시만 기다려주세요.</p>
                    <img src={Load} alt='로딩창' />
                </strong>
            </div>
        </div>

                <div className='b_container'>
                    <div className='top_logo'>
                        <img src={Bank} alt />
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

                            <div className='sub_tit_p'> <p>내용입력 및 수정</p> </div>
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
                            <div className='view_btn1 step01' onClick={Blank}>
                                <a href=''>
                                    <img src={Preview} alt='미리보기' />
                                </a>
                            </div>
                            {/* -----------------------input----------------------------- */}
                            <form>
                                <div className='step_01'>
                                    <div className='round1_1'>
                                        <div className='dv_left02'>

                                            <div className='sub_front'>
                                                <p> &lt; 앞면 &gt; </p>
                                            </div>
                                            
                                            <div className='sub03_cont2 front'>
                                                <table className='tb03'>
                                                    <colgroup>
                                                        <col width='18%' />
                                                        <col width='32%' />
                                                        <col width='50%' />
                                                    </colgroup>

                                                    <tbody>
                                                        <tr>
                                                            <th>
                                                                이름
                                                                <span> *</span>
                                                            </th>
                                                            <td id='td'>
                                                                <input type='text' name='edit_' className='input02' id='essen1'  />
                                                            </td>
                                                            
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                영문이름
                                                                <span> *</span>
                                                            </th>
                                                            <td id='td'>
                                                                <input type='text' name='edit_' className='input02' id='essen2' />
                                                                <p id='p_blue'> 영문이름 작성은 샘플과 동일한 형식으로 입력하시기 바랍니다. </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                지점
                                                            </th>
                                                            <td id='td'>
                                                                <select id='op_value' name='select_dept1'     
                                                                    onChange={(e)=>{
                                                                        const selectedValue = e.target.value;
                                                                        const [spot , num , section , load] = selectedValue.split("<br/>")
                                                                        setSpot(spot);
                                                                        setNum(num);
                                                                        setSection(section);
                                                                        setLoad(load);
                                                                    }}    
                                                                >
                                                                    <option value="">선택하세요.</option>
                                                                    <option value="본점&lt;br/&gt;61470&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 제봉로 225(대인동) 광주은행 본점">본점</option>
                                                                    <option value="각화동지점&lt;br/&gt;61137&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 동문대로 280(각화동,광주화물터미널)">각화동지점</option>
                                                                    <option value="강남지점&lt;br/&gt;06221&lt;br/&gt; 서울특별시 강남구&lt;br/&gt; 테헤란로 234">강남지점</option>
                                                                    <option value="강진지점&lt;br/&gt;59233&lt;br/&gt; 전라남도 강진군&lt;br/&gt; 강진읍 보은로2길 35">강진지점</option>
                                                                    <option value="경양로지점&lt;br/&gt;61419&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 무등로 306(계림동)">경양로지점</option>
                                                                    <option value="계림지점&lt;br/&gt;61429&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 중앙로 240(동명동)">계림지점</option>
                                                                    <option value="고흥지점&lt;br/&gt;59543&lt;br/&gt; 전라남도 고흥군&lt;br/&gt; 고흥읍 고흥로 1762">고흥지점</option>
                                                                    <option value="광무동지점&lt;br/&gt;59718&lt;br/&gt; 전라남도 여수시&lt;br/&gt; 좌수영로 55(광무동)">광무동지점</option>
                                                                    <option value="광양지점&lt;br/&gt;57752&lt;br/&gt; 전라남도 광양시&lt;br/&gt; 광양읍 희양현로 40">광양지점</option>
                                                                    <option value="광영지점&lt;br/&gt;57717&lt;br/&gt; 전라남도 광양시&lt;br/&gt; 광영로 88(광영동)">광영지점</option>
                                                                    <option value="광주대학교출장소&lt;br/&gt;61743&lt;br/&gt; 광주 남구&lt;br/&gt; 진월동 592-1 ">광주대학교출장소</option>
                                                                    <option value="광주시청지점&lt;br/&gt;61945&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 내방로 111(치평동,광주광역시청)">광주시청지점</option>
                                                                    <option value="광주시청지점OCR센터&lt;br/&gt;61945&lt;br/&gt; 광주 서구&lt;br/&gt; 치평동 1200번지">광주시청지점OCR센터</option>
                                                                    <option value="광주테크노파크출장소&lt;br/&gt;61008&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 대촌동 958-3">광주테크노파크출장소</option>
                                                                    <option value="광천동지점&lt;br/&gt;61914&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 죽봉대로 119번길 16(광천동)">광천동지점</option>
                                                                    <option value="국동지점&lt;br/&gt;59758&lt;br/&gt; 전라남도 여수시&lt;br/&gt; 구봉1길 5-7(국동)">국동지점</option>
                                                                    <option value="금남로지점&lt;br/&gt;61472&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 금남로 201(금남로4가)">금남로지점</option>
                                                                    <option value="금당지점&lt;br/&gt;57968&lt;br/&gt; 전라남도 순천시&lt;br/&gt; 장선배기길 31(조례동)">금당지점</option>
                                                                    <option value="금호동지점&lt;br/&gt;62002&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 운천로 131(쌍촌동,금호베어타운a동 101,102호)">금호동지점</option>
                                                                    <option value="나주지점&lt;br/&gt;58257&lt;br/&gt; 전라남도 나주시&lt;br/&gt; 나주로 133(금성동)">나주지점</option>
                                                                    <option value="남구청출장소&lt;br/&gt;61687&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 봉선로 1(주월동,민원실)">남구청출장소</option>
                                                                    <option value="문화전당지점&lt;br/&gt;61487&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 문화전당로 41(광산동)">문화전당지점</option>
                                                                    <option value="남악지점&lt;br/&gt;58578&lt;br/&gt; 전라남도 무안군&lt;br/&gt; 삼향읍 남악4로 40(남악 펠리시티2차 상가 110호)">남악지점</option>
                                                                    <option value="논현지점&lt;br/&gt;06531&lt;br/&gt; 서울 서초구&lt;br/&gt; 강남대로 559 정인빌딩 3층">논현지점</option>
                                                                    <option value="농성동지점&lt;br/&gt;61927&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 경열로 40(농성동)">농성동지점</option>
                                                                    <option value="담양지점&lt;br/&gt;57344&lt;br/&gt; 전라남도 담양군&lt;br/&gt; 담양읍 중앙로 66">담양지점</option>
                                                                    <option value="대불산단지점&lt;br/&gt;58453&lt;br/&gt; 전라남도 영암군&lt;br/&gt; 삼호읍 자유무역로 205">대불산단지점</option>
                                                                    <option value="대치동지점&lt;br/&gt;06280&lt;br/&gt; 서울특별시 강남구&lt;br/&gt; 남부순환로 2935 대치프라자 2층">대치동지점</option>
                                                                    <option value="도시공사출장소&lt;br/&gt;61964&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 시청로 26(치평동, 13층 빛고을고객센터)">도시공사출장소</option>
                                                                    <option value="동광양금융센터&lt;br/&gt;57785&lt;br/&gt; 전라남도 광양시&lt;br/&gt; 중마중앙로 137(중동)">동광양금융센터</option>
                                                                    <option value="동구청출장소&lt;br/&gt;61466&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 서남로 1(서석동,동구청)">동구청출장소</option>
                                                                    <option value="동림지점&lt;br/&gt;61096&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 북문대로 242번길 3(동림동)">동림지점</option>
                                                                    <option value="동신대학교&lt;br/&gt;58257&lt;br/&gt; 전남 나주시&lt;br/&gt; 금성동 14-2|">동신대학교</option>
                                                                    <option value="동운지점&lt;br/&gt;61118&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 서암대로 39(운암동)">동운지점</option>
                                                                    <option value="두암타운지점&lt;br/&gt;61409&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 갈마로 46(산수동)">두암타운지점</option>
                                                                    <option value="마재지점&lt;br/&gt;62014&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 풍금로177번길 11(금호동,송암빌딩)">마재지점</option>
                                                                    <option value="매곡동지점&lt;br/&gt;61064&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 서하로 104(매곡동)">매곡동지점</option>
                                                                    <option value="매월동지점&lt;br/&gt;62072&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 매월4로 34(매월동)">매월동지점</option>
                                                                    <option value="목포시청출장소&lt;br/&gt;58650&lt;br/&gt; 전남 목포시&lt;br/&gt; 용당동 888">목포시청출장소</option>
                                                                    <option value="목포지점&lt;br/&gt;58728&lt;br/&gt; 전라남도 목포시&lt;br/&gt; 영산로 93(명륜동)">목포지점</option>
                                                                    <option value="무안지점&lt;br/&gt;58524&lt;br/&gt; 전라남도 무안군&lt;br/&gt; 무안읍 무안중앙로 12">무안지점</option>
                                                                    <option value="문화동지점&lt;br/&gt;61199&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 동문대로 116(두암동)">문화동지점</option>
                                                                    <option value="문흥지점&lt;br/&gt;61133&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 서하로 380(문흥동)">문흥지점</option>
                                                                    <option value="방림동지점&lt;br/&gt;61676&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 용대로 136(방림동)">방림동지점</option>
                                                                    <option value="방배지점&lt;br/&gt;06675&lt;br/&gt; 서울특별시 서초구&lt;br/&gt; 동작대로 86 동주빌등 2층">방배지점</option>
                                                                    <option value="백운동지점&lt;br/&gt;61687&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 봉선로 13(주월동)">백운동지점</option>
                                                                    <option value="법원지점&lt;br/&gt;61441&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 준법로 7-12(지산동,광주지방.고등검찰청)">법원지점</option>
                                                                    <option value="보성지점&lt;br/&gt;59457&lt;br/&gt; 전라남도 보성군&lt;br/&gt; 보성읍 동산길 12-2">보성지점</option>
                                                                    <option value="봉선동지점&lt;br/&gt;61694&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 봉선중앙로 81(봉선동)">봉선동지점</option>
                                                                    <option value="봉선이마트지점&lt;br/&gt;61705&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 봉선로 198(봉선동)">봉선이마트지점</option>
                                                                    <option value="부평지점&lt;br/&gt;21359&lt;br/&gt; 인천시 부평구&lt;br/&gt; 부평대로 88 우체국 3층">부평지점</option>
                                                                    <option value="북구차량등록사업소출장소&lt;br/&gt;61187&lt;br/&gt; 광주 북구&lt;br/&gt; 용봉동 239-2">북구차량등록사업소출장소</option>
                                                                    <option value="북구청출장소&lt;br/&gt;61187&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 우치로 77(용봉동)">북구청출장소</option>
                                                                    <option value="북부지점&lt;br/&gt;61247&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 경열로 179(유동)">북부지점</option>
                                                                    <option value="북항지점&lt;br/&gt;58713&lt;br/&gt; 전라남도 목포시&lt;br/&gt; 고하대로 668(산정동)">북항지점</option>
                                                                    <option value="빛가람지점&lt;br/&gt;58217&lt;br/&gt; 전남 나주시&lt;br/&gt; 전력로 2 이화프라자 202호 (빛가람동 189-2)">빛가람지점</option>
                                                                    <option value="빛고을건강타운(출)&lt;br/&gt;61748&lt;br/&gt; 광주시 남구&lt;br/&gt; 노대동 592">빛고을건강타운(출)</option>
                                                                    <option value="빛고을전대병원출장소&lt;br/&gt;61748&lt;br/&gt; 광주 남구&lt;br/&gt; 노대동 빛고을전남대학교병원 지하 1층">빛고을전대병원출장소</option>
                                                                    <option value="산수동지점&lt;br/&gt;61433&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 필문대로 190(산수동)">산수동지점</option>
                                                                    <option value="삼각지점&lt;br/&gt;61052&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 설죽로 342(오치동)">삼각지점</option>
                                                                    <option value="삼성동지점&lt;br/&gt;06159&lt;br/&gt; 서울특별시 강남구&lt;br/&gt; 테헤란로 425 신일빌딩 3층">삼성동지점</option>
                                                                    <option value="상동지점&lt;br/&gt;58656&lt;br/&gt; 전라남도 목포시&lt;br/&gt; 옥암로 182(석현동)">상동지점</option>
                                                                    <option value="상무버들지점&lt;br/&gt;61942&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 상일로 28(쌍촌동)">상무버들지점</option>
                                                                    <option value="상무비즈니스센터출장소&lt;br/&gt;61948&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 치평동 1239">상무비즈니스센터출장소</option>
                                                                    <option value="상무역지점&lt;br/&gt;61949&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 상무중앙로 84(치평동,상무트윈스)">상무역지점</option>
                                                                    <option value="상무지점&lt;br/&gt;61962&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 치평로 20(치평동)">상무지점</option>
                                                                    <option value="서광주지점&lt;br/&gt;61979&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 상무대로 1071(화정동)">서광주지점</option>
                                                                    <option value="서구청출장소&lt;br/&gt;61928&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 경열로 33(농성동,광주광역시서구청)">서구청출장소</option>
                                                                    <option value="서동지점&lt;br/&gt;61637&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 중앙로 87(서동)">서동지점</option>
                                                                    <option value="서울영업부&lt;br/&gt;04522&lt;br/&gt; 서울특별시 중구&lt;br/&gt; 남대문로 109(다동,국제빌딩2층)">서울영업부</option>
                                                                    <option value="소촌동지점&lt;br/&gt;62385&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 소촌로 146(소촌동)">소촌동지점</option>
                                                                    <option value="송정지점&lt;br/&gt;62430&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 광산로 13-1(송정동)">송정지점</option>
                                                                    <option value="수완지점&lt;br/&gt;62225&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 장신로 44(장덕동)">수완지점</option>
                                                                    <option value="순천신대지점&lt;br/&gt;58011&lt;br/&gt; 전라남도 순천시&lt;br/&gt; 해룡면 향매로 109">순천신대지점</option>
                                                                    <option value="순천역지점&lt;br/&gt;57962&lt;br/&gt; 전라남도 순천시&lt;br/&gt; 팔마로 126(조곡동)">순천역지점</option>
                                                                    <option value="순천지점&lt;br/&gt;57956&lt;br/&gt; 전라남도 순천시&lt;br/&gt; 중앙로 72">순천지점</option>
                                                                    <option value="신가동지점&lt;br/&gt;62300&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 수등로258번길 2(신가동)">신가동지점</option>
                                                                    <option value="신세계지점&lt;br/&gt;61937&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 무진대로 904(광천동,광천터미널)">신세계지점</option>
                                                                    <option value="신안군청출장소&lt;br/&gt;58827&lt;br/&gt; 전남 신안군&lt;br/&gt; 압해면 신장리 462-10">신안군청출장소</option>
                                                                    <option value="신안동지점&lt;br/&gt;61220&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 자미로 41(신안동, 상가동 제2호)">신안동지점</option>
                                                                    <option value="신창동지점&lt;br/&gt;62249&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 신창로 127(신창동)">신창동지점</option>
                                                                    <option value="쌍촌동지점&lt;br/&gt;61990&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 상무대로 928(쌍촌동)">쌍촌동지점</option>
                                                                    <option value="양림동지점&lt;br/&gt;61663&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 양림로 54(양림동)">양림동지점</option>
                                                                    <option value="양산동지점&lt;br/&gt;61024&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 양산동 241-1">양산동지점</option>
                                                                    <option value="양재지점&lt;br/&gt;06266&lt;br/&gt; 서울특별시 강남구&lt;br/&gt; 강남대로 254(도곡동)">양재지점</option>
                                                                    <option value="여서동지점&lt;br/&gt;59707&lt;br/&gt; 전라남도 여수시&lt;br/&gt; 여서1로 8(여서동)">여서동지점</option>
                                                                    <option value="여수시청출장소&lt;br/&gt;59675&lt;br/&gt; 전라남도 여수시&lt;br/&gt; 시청로 1(학동,여수시청)">여수시청출장소</option>
                                                                    <option value="여수지점&lt;br/&gt;59734&lt;br/&gt; 전라남도 여수시&lt;br/&gt; 중앙로 28(교동)">여수지점</option>
                                                                    <option value="여의도지점&lt;br/&gt;07327&lt;br/&gt; 서울특별시 영등포구&lt;br/&gt; 국제금융로 2길17(여의도동25) 삼성생명 동여의도빌등 2층">여의도지점</option>
                                                                    <option value="여천금융센터&lt;br/&gt;59676&lt;br/&gt; 전라남도 여수시&lt;br/&gt; 시청로 12(학동)">여천금융센터</option>
                                                                    <option value="역전지점&lt;br/&gt;61252&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 경열로 255(신안동)">역전지점</option>
                                                                    <option value="연동지점&lt;br/&gt;58740&lt;br/&gt; 전라남도 목포시&lt;br/&gt; 산정로 50번길 3(산정동)">연동지점</option>
                                                                    <option value="연향동지점&lt;br/&gt;57967&lt;br/&gt; 전라남도 순천시&lt;br/&gt; 충효로 142(연향동)">연향동지점</option>
                                                                    <option value="염주지점&lt;br/&gt;62026&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 월드컵로4강로 65(화정동)">염주지점</option>
                                                                    <option value="영광지점&lt;br/&gt;57046&lt;br/&gt; 전라남도 영광군&lt;br/&gt; 영광읍 중앙로4길 2">영광지점</option>
                                                                    <option value="영산포지점&lt;br/&gt;58274&lt;br/&gt; 전라남도 나주시&lt;br/&gt; 예향로 3803(이창동, 영산포공용터미널)">영산포지점</option>
                                                                    <option value="영암지점&lt;br/&gt;58417&lt;br/&gt; 전라남도 영암군&lt;br/&gt; 영암읍 남문로 5">영암지점</option>
                                                                    <option value="오치동지점&lt;br/&gt;61120&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 우치로 233-1(오치동)">오치동지점</option>
                                                                    <option value="완도지점&lt;br/&gt;59122&lt;br/&gt; 전라남도 완도군&lt;br/&gt; 완도읍 장보고대로 264">완도지점</option>
                                                                    <option value="용당동지점&lt;br/&gt;58700&lt;br/&gt; 전라남도 목포시&lt;br/&gt; 영산로 302(용당동)">용당동지점</option>
                                                                    <option value="용봉북지점&lt;br/&gt;61110&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 용봉택지로 96(용봉동)">용봉북지점</option>
                                                                    <option value="용봉지점&lt;br/&gt;61190&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 우치로 76(중흥동)">용봉지점</option>
                                                                    <option value="운남동지점&lt;br/&gt;62314&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 하남대로 290(운남동)">운남동지점</option>
                                                                    <option value="운암동지점&lt;br/&gt;61256&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 북문대로 101(운암동)">운암동지점</option>
                                                                    <option value="월곡동지점&lt;br/&gt;62359&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 사암로 211(우산동)">월곡동지점</option>
                                                                    <option value="율촌산단지점&lt;br/&gt;58024&lt;br/&gt;  전라남도 순천시&lt;br/&gt; 해룡면 호두리 율촌 제1지방산업단지 제6블록 벤처동 1층">율촌산단지점</option>
                                                                    <option value="일곡동지점&lt;br/&gt;61041&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 설죽로 504(일곡동)">일곡동지점</option>
                                                                    <option value="임동지점&lt;br/&gt;61242&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 서림로 98(임동)">임동지점</option>
                                                                    <option value="임방울대로지점&lt;br/&gt;62321&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 하남대로 225(신가동)">임방울대로지점</option>
                                                                    <option value="잠실지점&lt;br/&gt;05501&lt;br/&gt; 서울 송파구&lt;br/&gt; 올림픽대로119">잠실지점</option>
                                                                    <option value="장성지점&lt;br/&gt;57219&lt;br/&gt; 전라남도 장성군&lt;br/&gt; 장성읍 영천로 168">장성지점</option>
                                                                    <option value="장흥지점&lt;br/&gt;59327&lt;br/&gt; 전라남도 장흥군&lt;br/&gt; 장흥읍 중앙로 19-1">장흥지점</option>
                                                                    <option value="전남대학교지점&lt;br/&gt;61186&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 용봉로 77(용봉로)">전남대학교지점</option>
                                                                    <option value="전남도청지점&lt;br/&gt;58564&lt;br/&gt; 전라남도 무안군&lt;br/&gt; 삼향읍 오룡길 1(전남도청)">전남도청지점</option>
                                                                    <option value="전남영업부&lt;br/&gt;58566&lt;br/&gt; 전라남도 무안군&lt;br/&gt; 삼향읍 후광대로 242|">전남영업부</option>
                                                                    <option value="전대병원지점&lt;br/&gt;61469&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 제봉로 42(학동,전남대학교병원)">전대병원지점</option>
                                                                    <option value="전주금융센터지점&lt;br/&gt;54969&lt;br/&gt; 전라북도 전주시&lt;br/&gt; 완산구 홍산남로 62(효자동2가, 3층)">전주금융센터지점</option>
                                                                    <option value="조대병원출장소&lt;br/&gt;61453&lt;br/&gt; 광주 동구&lt;br/&gt; 서석동 588  (조대병원)">조대병원출장소</option>
                                                                    <option value="조선대학교지점&lt;br/&gt;61452&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 필문대로 309(서석동,조선대학교본관)">조선대학교지점</option>
                                                                    <option value="주월지점&lt;br/&gt;61615&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 대남대로 289(월산동)">주월지점</option>
                                                                    <option value="중부지점&lt;br/&gt;61480&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 구성로 162(충장로 5가)">중부지점</option>
                                                                    <option value="진월동지점&lt;br/&gt;61725&lt;br/&gt; 광주광역시 남구&lt;br/&gt; 서문대로 735(진월동)">진월동지점</option>
                                                                    <option value="첨단2산단지점&lt;br/&gt;61087&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 첨단연신로 271, 107(신용동)">첨단2산단지점</option>
                                                                    <option value="첨단금융센터&lt;br/&gt;62274&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 첨단중앙로 170(쌍암동)">첨단금융센터</option>
                                                                    <option value="첨단월계지점&lt;br/&gt;62276&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 월계로 175(월계동)">첨단월계지점</option>
                                                                    <option value="청담지점&lt;br/&gt;06069&lt;br/&gt; 서울시 강남구&lt;br/&gt; 선릉로 704(청담동) 청담벤쳐프라자 2층">청담지점</option>
                                                                    <option value="충장로지점&lt;br/&gt;61483&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 중앙로 162-1(황금동)">충장로지점</option>
                                                                    <option value="평동공단금융센터&lt;br/&gt;62417&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 평동로913번길 58(월전동)">평동공단금융센터</option>
                                                                    <option value="풍암동지점&lt;br/&gt;62058&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 풍암중앙로 39(풍암동)">풍암동지점</option>
                                                                    <option value="풍향동지점&lt;br/&gt;61205&lt;br/&gt; 광주광역시 북구&lt;br/&gt; 풍동길 1(풍향동)">풍향동지점</option>
                                                                    <option value="하남공단1금융센터&lt;br/&gt;62231&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 하남산단3번로 133-10(장덕동)">하남공단1금융센터</option>
                                                                    <option value="하남공단2금융센터&lt;br/&gt;62243&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 하남산단8번로 177(도천동)">하남공단2금융센터</option>
                                                                    <option value="하남로지점&lt;br/&gt;61903&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 하남대로 668(동천동)">하남로지점</option>
                                                                    <option value="하남용아로지점&lt;br/&gt;62336&lt;br/&gt; 광주광역시 광산구&lt;br/&gt; 용아로379번길 2(하남동)">하남용아로지점</option>
                                                                    <option value="하당지점&lt;br/&gt;58691&lt;br/&gt; 전라남도 목포시&lt;br/&gt; 신흥로 50(상동)">하당지점</option>
                                                                    <option value="학동지점&lt;br/&gt;61463&lt;br/&gt; 광주광역시 동구&lt;br/&gt; 남문로 698(학동)">학동지점</option>
                                                                    <option value="한국광기술원출장소&lt;br/&gt;61007&lt;br/&gt; 광주 북구&lt;br/&gt; 월출동 971-35">한국광기술원출장소</option>
                                                                    <option value="한전지점&lt;br/&gt;58322&lt;br/&gt; 전남 나주시&lt;br/&gt; 전력로 55(빛가람동) 한국전력공사 2층">한전지점</option>
                                                                    <option value="함평지점&lt;br/&gt;57151&lt;br/&gt; 전라남도 함평군&lt;br/&gt; 함평읍 광남길 75">함평지점</option>
                                                                    <option value="해남지원출장소&lt;br/&gt;59029&lt;br/&gt; 전남 해남군&lt;br/&gt; 해남읍 성내리 33-9">해남지원출장소</option>
                                                                    <option value="해남지점&lt;br/&gt;59029&lt;br/&gt; 전라남도 해남군&lt;br/&gt; 해남읍 군청길 1">해남지점</option>
                                                                    <option value="호남대학교출장소&lt;br/&gt;62399&lt;br/&gt; 광주 광산구&lt;br/&gt; 서봉동 59-1">호남대학교출장소</option>
                                                                    <option value="화순전대병원출장소&lt;br/&gt;58128&lt;br/&gt; 전남 화순군&lt;br/&gt; 화순읍 일심리 160">화순전대병원출장소</option>
                                                                    <option value="화순지점&lt;br/&gt;58118&lt;br/&gt; 전라남도 화순군&lt;br/&gt; 화순읍 자치샘로 48(미래타워)">화순지점</option>
                                                                    <option value="화정지점&lt;br/&gt;62045&lt;br/&gt; 광주광역시 서구&lt;br/&gt; 화정로 261(농성동)">화정지점</option>
                                                                    <option value="효천지점&lt;br/&gt;61765&lt;br/&gt; 광주 남구&lt;br/&gt; 효우2로 30|">효천지점</option>
                                                                </select>
                                                                <input type='text' className='input02' id='op_text' value={spot} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                직급
                                                            </th>
                                                            <td id='td'>
                                                                <input type='text' className='input02' />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                전화번호
                                                            </th>
                                                            <td id='td'>
                                                                <input type='text' className='input02 tell' name='tel1' value="" onKeyDown={numberCheck} /> - <input type='text' className='input02 tell' name='tel2' value={checkNumber} onKeyDown={numberCheck} /> - <input type='text' className='input02 tell' name='tel3' value={checkNumber} onKeyDown={numberCheck} />        
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                팩스
                                                            </th>
                                                            <td id='td'>
                                                                <input type='text' className='input02 tell' name='fax1' value={checkNumber} onKeyDown={numberCheck} /> - <input type='text' className='input02 tell' name='fax2' value={checkNumber} onKeyDown={numberCheck} /> - <input type='text' className='input02 tell' name='fax3' value={checkNumber} onKeyDown={numberCheck} />        
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                핸드폰
                                                            </th>
                                                            <td id='td'>
                                                                <input type='text' className='input02 tell' name='phone1' value={checkNumber} onKeyDown={numberCheck} /> - <input type='text' className='input02 tell' name='phone2' value={checkNumber} onKeyDown={numberCheck} /> - <input type='text' className='input02 tell' name='phone3' value={checkNumber} onKeyDown={numberCheck} />        
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='w_email'>
                                                                이메일
                                                            </th>
                                                            <td id='td'>
                                                                <input type='text' className=' input02' id='email' name='email_f' /> @ <input type='text' className=' input02' id='email' name='email_b' />
                                                                <p className='check_input01'>
                                                                    <input type='radio' value='직접입력' id='check_input02' /> <span id='span_fs'>직접입력</span>&nbsp;&nbsp;&nbsp;
                                                                    <input type='radio' value='kjbank.com' id='check_input02' checked="checked" /> <span id='span_fs'>kjbank.com</span>
                                                                </p>
                                                                <p id='p_blue'>※ 이메일은 아이디만 입력하시면 기본 셋팅된 주소가 입력됩니다.</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className='option'>
                                                                엠불럼 추가
                                                            </th>
                                                            <td id='td'>
                                                                <p className='check_input03'>
                                                                    <input type='radio' id='check_input02' /> <span id='span_fs'>Y&nbsp;&nbsp;&nbsp;</span>
                                                                    <input type='radio' id='check_input02' /> <span id='span_fs'>N</span>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        </div>
                                        </div>
                                    </div>

                                    {/* --------------------round1_1-------------- */}

                                    <div className='round1_2'>
                                        <div className='dv_left02'>
                                            <div className='d_back'>
                                                <div className='sub_back'>
                                                    <p> &lt; 뒷면 &gt; </p>
                                                </div>

                                                <div className='sub03_cont2 back'>
                                                    <table className='tb03'>
                                                        <colgroup>
                                                            <col width='18%' />
                                                            <col width='32%' />
                                                            <col width='50%' />
                                                        </colgroup>

                                                        <tbody>
                                                            <tr>
                                                                <th>
                                                                    주소
                                                                </th>
                                                                <td id='td'>
                                                                    <input type='text'  className='back_input_1' id='back_value0' value={num} />
                                                                    <input type='text'  className='back_input' id='back_value1' value={section} />
                                                                    <p id='p_black'>※ 도, 구까지만 입력하세요.</p>
                                                                    <input type='text'  className='back_input' id='back_value2' value={load} />
                                                                    <p id='p_red'>※ 위 우편번호 및 주소는 2014년 12월 기준 주소이므로 각 지점별최종 확인 바랍니다.</p>
                                                                    <p id='p_red'>※ 시안 교정을 한 발주건에 관해서는 인쇄사고 발생시 당사가책임지지 않음을 말씀드립니다.</p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* -------btn_box2------- */}
                                    <div className='btn_box2'>

                                        <div className='btn_box2_left'>
                                            <p>미리보기를 통해 입력한 내용이 정확한지 꼭 확인해주세요.</p>
                                        </div>

                                        <div className='btn_box2_right'>
                                            <a href=''>
                                                <img src={Pre} alt='' />
                                            </a>
                                            &nbsp;&nbsp;
                                            <span>
                                            <a herf="" onClick={btnHandler}>
                                                <img src={Next} alt='' />
                                            </a>
                                            </span>
                                        </div>

                                    </div>
                                {/* -------btn_box2------- */}
                            </form>
                            
                        </div>                    
                    </div> 
                </div>


                <Routes>
            <Route path="/deliver" element={<Deliver />} />
          </Routes>
                
                                
        </>
    );
};

export default Body;