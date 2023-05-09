import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Routes, Route, Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import Logo from '../assets/imgs/로그인_img/main_bank_logo.png';
import Select from '../assets/imgs/로그인_img/select.png';
import Pass from '../assets/imgs/로그인_img/pass.png';

const Login = () => {
const navigate = useNavigate();

	function clickAdd(){
		alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.")
	}

	// JWT
	const [userId, setUserId] = useState('');
	const [passWord, setPassWord] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
	

		try{
			const response = await axios.post('', {
				userId,
				passWord,
			});

			const token = response.data.token;
			// JWT 토큰을 쿠키에 저장
			document.cookie = `token=${token}`;

			navigate('/body');
		} catch (error){
			console.log(error);
		}
	}


	// JWT

	

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
								
								<select name="key" id="userid" value={userId} onChange={(e) => setUserId(e.target.value)} className={styles.inp}>
									<option value="user1">광주은행</option>
									<option value="user2">광주은행관리자</option>
								</select>
							</div>

							<div className={styles.blockinput}>      
								<img src={Pass} alt='' id='img03' />
								<input className={styles.login_input} name="value" value={passWord} id="password" type="password" placeholder="비밀번호" onChange={(e) => setPassWord(e.target.value)}  />
							</div>
						</div>
							
						
						{/* <div onClick={handleSubmit}> */}
						<Link to='/body'>
							<button id={styles.btnLogin}>Login</button>
						</Link>

					</form>

					<p className={styles.add} onClick={clickAdd} ><a href=''>즐겨찾기 추가하기</a></p>

					<div className={styles.logo}><p>Copyright © SungMoonDang. All Rights Reserved.</p></div>
				</div>
			</div>
        </>
    );
};

export default Login;