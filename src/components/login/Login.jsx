import React from 'react';
import styles from './Login.module.css';
import Logo from '../assets/imgs/로그인_img/main_bank_logo.png';
import Select from '../assets/imgs/로그인_img/select.png';
import Pass from '../assets/imgs/로그인_img/pass.png';

const Login = () => {
	function clickAdd(){
		alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.")
	}

	

    return (
        <>
            <div id={styles.wrap}>
				<div className={styles.login}>  
					<div className={styles.login_logo}>
						<h1>
							<img src={Logo} alt='' />
							<br />명함주문시스템
						</h1>
					</div>

					<form name="loginForm" id="loginForm" action="http://kjbank.qpop.deals/01_main/login_ok.php" method="post">
						<div className="input">
							
							<div className={styles.blockinput}>
								<img src={Select} alt='' id='img02' />
								
								<select name="key" id="userid" className={styles.inp}>
									<option value="kjbuser">광주은행</option>
									<option value="kjbadmin">광주은행관리자</option>
								</select>
							</div>

							<div className={styles.blockinput}>      
								<img src={Pass} alt='' id='img03' />
								<input className={styles.login_input} name="value" id="password" type="password" placeholder="비밀번호" value="" />
							</div>
						</div>
							
						

						<button id={styles.btnLogin}>Login</button>

					</form>

					<p className={styles.add} onClick={clickAdd} ><a href=''>즐겨찾기 추가하기</a></p>

					<div className={styles.logo}><p>Copyright © SungMoonDang. All Rights Reserved.</p></div>
				</div>
			</div>
        </>
    );
};

export default Login;