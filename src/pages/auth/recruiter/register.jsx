import { useState } from 'react';
import './assets/register.css';
import bg from './assets/true-agency-o4UhdLv5jbQ-unsplash 1.png';
import logo from './assets/Group 978.svg';
import txt from './assets/Temukan developer berbakat & terbaik di berbagai bidang keahlian.svg';
import { registerAction } from '../../../redux/action/authActionRecruiter';
import { Link } from 'react-router-dom';
import Alert from '../../component/alert';
import { BounceLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {

    const dispatch = useDispatch();
    const { isError, errorMessage, isLoading } = useSelector(state => state.register_recruiter);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        number: '',
        password: '',
        confirm: '',
    });
    
    const allFieldsFilled = () => {
        return Object.values(userData).every(field => field !== "");
    }
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
        return regex.test(password);
    }

    const registerUser = (e) => {
        e.preventDefault();
        if (!isValidPassword(userData.password)) {
            setPasswordError("Password harus memiliki huruf kapital dan karakter unik");
            return;
        }
        if (userData.password !== userData.confirm) { // 2. Periksa kesesuaian password dan confirm
            setConfirmError("Kata Sandi tidak cocok"); // 3. Menampilkan pesan error
            return;
        }
        dispatch(registerAction(userData))
    }

    const afterRegister = () => toast("Verifikasi Email Anda!")

    const onUserChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
        if (e.target.name === "password") setPasswordError("");
        if (e.target.name === "confirm") setConfirmError("")
    }


    return (
        <>
            <ToastContainer autoClose={200} />
            {isError && errorMessage && <Alert alerttype='danger' message={errorMessage} />}
            {isLoading && <BounceLoader color='#000000' cssOverride={{ marginLeft: '50vw' }} />}
            {!isLoading && <BounceLoader color='#000000' cssOverride={{ marginLeft: '50vw' }} loading={false} />}
            <div className="page">
                <section id="box">
                    <nav className="flow">
                        <div className="background">
                            <div className="container">
                                <img src={txt} className="find" />
                                <img src={logo} alt="logo" className="logo" />
                                <img src={bg} alt="background image" className="bgimg" />
                                <div className="color"></div>
                            </div>
                        </div>
                    </nav>
                </section>
                <section id="grid">
                    <div className="authorization">
                        <form className="authlog" onSubmit={registerUser}>
                            <h2>Halo, Pewpeople</h2>
                            <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                            <div className="name">
                                <p>Nama</p>
                                <input
                                    type="text"
                                    placeholder="Masukan nama panjang"
                                    name='name'
                                    value={userData.name}
                                    onChange={onUserChange}
                                />
                            </div>
                            <div className="email">
                                <p>Email</p>
                                <input
                                    type="text"
                                    placeholder="Masukan alamat Email"
                                    name='email'
                                    value={userData.email}
                                    onChange={onUserChange}
                                />
                            </div>
                            <div className="company">
                                <p>Perusahaan</p>
                                <input
                                    type="text"
                                    placeholder="Masukan nama perusahaan"
                                    name='company'
                                    value={userData.company}
                                    onChange={onUserChange}
                                />
                            </div>
                            <div className="lead">
                                <p>Jabatan</p>
                                <input
                                    type="text"
                                    placeholder="Posisi anda di perusahaan"
                                    name='role'
                                    value={userData.role}
                                    onChange={onUserChange}
                                />
                            </div>
                            <div className="number">
                                <p>No. Handphone</p>
                                <input
                                    type="text"
                                    placeholder="Masukan no. handphone"
                                    name='number'
                                    value={userData.number}
                                    onChange={onUserChange}
                                />
                            </div>
                            <div className="password">
                                <p>Kata Sandi</p>
                                <input
                                    type="password"
                                    placeholder="Masukan kata sandi"
                                    name='password'
                                    value={userData.password}
                                    onChange={onUserChange}
                                />
                                {passwordError && <span className="error">{passwordError}</span>}
                            </div>
                            <div className="confirm">
                                <p>Konfirmasi kata sandi</p>
                                <input
                                    type="password"
                                    placeholder="Masukan kembali kata sandi"
                                    name='confirm'
                                    value={userData.confirm}
                                    onChange={onUserChange}
                                />
                                {confirmError && <span className="error1">{confirmError}</span>}
                            </div>
                            <button type="submit" className="tolog" onClick={afterRegister} disabled={!allFieldsFilled() || !isValidPassword(userData.password) || userData.password !== userData.confirm}>Daftar</button>
                            <p className="account">Anda sudah punya akun? <Link to={'/login/recruiter'} className="href">Masuk disini</Link></p>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}