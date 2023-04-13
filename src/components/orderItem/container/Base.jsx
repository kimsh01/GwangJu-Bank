import React from 'react';
import styles from './Base.module.css';
import Bank from '../img02/main_bank_logo.png';
import Check from '../img02/check.png';
import Bank_01 from '../img02/bank_01.jpg'
import Bank_02 from '../img02/bank_02.jpg'
import Back_btn from '../img02/requestbtn.png';
import Pop03 from '../img02/pop_03.jpg';
import Pop05 from '../img02/pop_05.jpg';

const Container = () => {
    return (
        <>
            <div className={styles.base}>
                <div className={styles.top_logo}>
                        <img src={Bank} alt='' />
                    </div>
                <div className={styles.top_left}>
                    <dl>
                        <dd>
                            <p><b>광주은행</b> 로그인 하였습니다.</p>
                        </dd>
                        <p className={styles.s_p}>|</p>
                        <dd>
                            <a href='http://kjbank.qpop.deals/02_order/order03.php'><p>주문리스트</p></a>
                        </dd>
                        <p className={styles.s_p}>|</p>
                        <dd>
                            <a href='http://kjbank.qpop.deals/01_main/logout.php'><p>로그아웃</p></a>
                        </dd>
                    </dl>
                    <b className={styles.b_pr}>명함관련 문의사항 062-239-6752~3</b>
                </div>

                <div className={styles.front}>
                    <div className={styles.front_01}>
                        <div className={styles.title}>
                            <div className={styles.title_img}><img src={Check} alt='' /></div>
                            <div className={styles.title_p}><p>신규명함신청</p></div>
                        </div>
                        <div className={styles.title_p2}>
                            <p>- 사용하실 명함의 예시를 체크하신 후 다음단계를 클릭해주세요.</p>
                        </div>
                    </div>

                    <div classNAme={styles.front_02}>
                        <div className={styles.title_1}>
                            <div className={styles.title_img}><img src={Check} alt='' /></div>
                            <div className={styles.title_p}><p>템플릿 선택</p></div>
                        </div>
                        <div className={styles.title_radio}>
                            <input type='radio' id={styles.radio} checked /><span className={styles.radio_p}>사원 일반국문</span>
                            <input type='radio' id={styles.radio} /><span className={styles.radio_p}>사원 국영문 혼용</span>
                            <input type='radio' id={styles.radio} /><span className={styles.radio_p}>임원 일반국문</span>
                            <input type='radio' id={styles.radio} /><span className={styles.radio_p}>임원 국영문 혼용</span>
                        </div>
                    </div>

                    <div className={styles.f_b}>
                        <table className={styles.f_b_table}>
                            <tbody>
                                <tr>
                                    <td><p className={styles.front_f_p}> &lt; 앞면 &gt; </p></td>
                                    <td><p className={styles.front_b_p}> &lt; 뒷면 &gt; </p></td>
                                </tr>

                                <tr>
                                    <td>
                                        <img src={Bank_01} alt='' />
                                    </td>

                                    <td>
                                        <img src={Bank_02} alt='' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.back}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className={styles.back01}>
                                            <div className={styles.back_text}>
                                            
                                                개별신청을 클릭하시면 개인별로
                                                <br />명함자동주문을 합니다.
                                            
                                            </div>
                                            <span className={styles.back_btn}>
                                                <img src={Back_btn} alt='' />
                                            </span>
                                        </div>
                                    </td>
                                    <td>&nbsp;</td>
                                    
                                </tr>
                                <tr>
                                    <td colSpan={2} className={styles.back_img01}>
                                        <img src={Pop03} alt='' />
                                    </td>
                                    <td colSpan={2} className={styles.back_img02}>
                                        <img src={Pop05} alt='' />
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    
                </div>
            </div>
        
        </>
    );
};

export default Container;