import { useState } from 'react';
import './assets/login.css';
import bg from './assets/true-agency-o4UhdLv5jbQ-unsplash 1.png';
import logo from './assets/Group 978.svg';
import txt from './assets/Temukan developer berbakat & terbaik di berbagai bidang keahlian.svg';
import { loginAction } from '../../../redux/actions/authActionRecruiter';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../component/alert';
import { BounceLoader } from 'react-spinners';

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errorMessage, isError, isLoading } = useSelector(state => state.login_recruiter);
    const [dataLogin, handleDataLogin] = useState({
        email: '',
        password: ''
    });
    const [passwordError, setPasswordError] = useState("");

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
        return regex.test(password);
    }

    const loginUser = (e) => {
        e.preventDefault();
        // if (!isValidPassword(dataLogin.password)) {
        //     setPasswordError("Password harus memiliki huruf kapital dan karakter unik");
        //     return;
        // }
        dispatch(loginAction(dataLogin, navigate))
    }

    const onLogin = (e) => {
        handleDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "password") setPasswordError(""); 
    }

    return (
        <>
            {isLoading && <BounceLoader color='#000000' size={50} cssOverride={{ position:'fixed',top:'0',zIndex:'999',marginLeft: '50vw',marginTop:'30px'}} />}
            {isError && errorMessage && <Alert alerttype='danger' message={errorMessage} />}
            <div className="page">
                <section id="box">
                    <nav className="flow">
                        <div className="background">
                            <div className="containerss">
                                <img src={txt} alt="Find" className="find" />
                                <img src={logo} alt="logo" className="logos" />
                                <img src={bg} alt="background image" className="bgimg" />
                                <div className="color"></div>
                            </div>
                        </div>
                    </nav>
                </section>
                <section id="grid">
                    <div className="authorization">
                        <form className="authlog" onSubmit={loginUser}>
                            <h2>Halo, Pewpeople</h2>
                            <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                            <div className="email">
                                <p>Email</p>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Masukan alamat Email"
                                    required
                                    value={dataLogin.email}
                                    onChange={onLogin}
                                />
                            </div>
                            <div className="password">
                                <p>Kata Sandi</p>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Masukan kata sandi"
                                    required
                                    value={dataLogin.password}
                                    onChange={onLogin}
                                />
                                {passwordError && <span className="error">{passwordError}</span>}
                            </div>
                            <p className="forgot" >Lupa kata sandi?</p>
                            <button type="submit" className="tolog" onClick={loginUser}>Masuk</button>
                            <p className="account">Anda belum punya akun? <Link to={'/register/recruiter'} className="href">Daftar disini</Link></p>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}
