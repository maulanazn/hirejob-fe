import { useState } from 'react';
import './assets/login.css';
import bg from './assets/true-agency-o4UhdLv5jbQ-unsplash 1.png';
import logo from './assets/Group 978.svg';
import txt from './assets/Temukan developer berbakat & terbaik di berbagai bidang keahlian.svg';
import { loginAction } from '../../../redux/actions/authActionCandidate';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../../component/alert';
import { BounceLoader } from 'react-spinners';

export default function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let { errorMessage, isError, isLoading } = useSelector(state => state.login_candidate);
    const [dataLogin, handleDataLogin] = useState({
        email: '',
        password: ''
    });

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
        return regex.test(password);
    }

    const loginUser = (e) => {
        e.preventDefault();
        if (!isValidPassword(dataLogin.password) && isError) {
            errorMessage += "Password harus memiliki huruf kapital dan karakter unik";
        }
        dispatch(loginAction(dataLogin, navigate));
    }

    const onLogin = (e) => {
        handleDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "password") errorMessage += "";  // reset passwordError jika user mengetik di input password
    }

    return (
        <>
            {isLoading && <BounceLoader color='#000000' cssOverride={{ marginLeft: '50vw' }} />}
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
                                {isError && <span className="error">{errorMessage}</span>}
                            </div>
                            <p className="forgot" >Lupa kata sandi?</p>
                            <button type="submit" className="tolog" onClick={loginUser}>Masuk</button>
                            <p className="account">Anda belum punya akun? <Link to={'/register/candidate'} className="href">Daftar disini</Link></p>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}
