import React, { useState } from 'react';
import "./style.css"
import { useDispatch } from 'react-redux';
import { authUserLogin } from '../../redux/features/auth/thunk';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dataForm, setDataForm] = useState({});

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( dataForm.email && dataForm.password ) {
            dispatch(authUserLogin(dataForm.email, dataForm.password));
        }

        navigate('/auth/login') 
    }

    return (
        <div className="style-1">
            <div className="style-2">
                <div className="style-3">
                    <div className="style-4">
                        <form onSubmit={handleSubmit}>
                            <div className="style-5">
                                <div className="style-6"><span className="style-7">Sign In</span></div>
                                <div className="style-8"><span className="style-9">Sign Up</span></div>
                            </div>
                            <div className="">
                                <div className="style-10">
                                    <div className="style-11">
                                        <input  name="email"
                                                placeholder="Email Address"
                                                type="text"
                                                className="style-12"
                                                onChange={handleChange}
                                        />
                                        <div className="style-13">
                                            <button className="style-14" tabindex="0" type="button" aria-label="toggle password visibility">
                                                <span className="style-15">
                                                    <img alt="Email" src="../assets/icons/icon-email.png" className="img-email"/>
                                                </span>
                                                <span className="style-17"></span>
                                            </button>
                                        </div>
                                        <fieldset aria-hidden="true" className="style-18">
                                            <legend className="style-19"><span className="">​</span></legend>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="style-20">
                                    <div className="style-21">
                                        <input  name="password"
                                                placeholder="Password"
                                                type="password"
                                                className="style-12"
                                                onChange={handleChange}
                                        />
                                        <div className="style-23">
                                            <button className="style-24" tabindex="0" type="button" aria-label="toggle password visibility">
                                                <span className="style-25">
                                                    <img src="../assets/icons/icon-eye.png" className="img-eyes" />
                                                </span>
                                                <span className="style-17"></span>
                                            </button>
                                        </div>
                                        <fieldset aria-hidden="true" className="style-28">
                                            <legend className="style-29"><span className="">​</span></legend>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="style-30">
                                <label className="style-31">
                                    <span className="style-32" aria-disabled="false">
                                        <span className="style-33">
                                            <input className="style-34" name="remember" type="checkbox" data-indeterminate="false"/>
                                            <svg className="style-35" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" className=""></path>
                                            </svg>
                                        </span>
                                        <span className="style-36"></span>
                                    </span><span className="style-37">Remember me</span>
                                </label>
                                <a href="/Forgot-Password" className="style-38">Forgot password ?</a>
                            </div>
                            <div className="style-39">
                                <span className="style-40">or Sign with Email</span>
                            </div>
                            <div className="style-41">
                                <button className="style-42" tabindex="0" type="button">
                                    <span className="style-43">
                                        <img alt="Facebook" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" className="style-44" />
                                        <span className="">Sign in With Facebook</span>
                                    </span>
                                    <span className="style-45"></span>
                                </button>
                            </div>
                            <div className="style-46">
                                <button className="style-47" tabindex="0" type="button">
                                    <span className="style-48">
                                        <img alt="Login" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" className="style-49" />
                                        <span className="">Sign in With Google&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    </span>
                                    <span className="style-50"></span>
                                </button>
                            </div>
                            <div className="style-51">
                                <div className="">
                                    <div className="">
                                        <div className="style-52">
                                            <div className="">
                                                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcvcfchAAAAAEebXfZ-23e8DcoSFj-9YKR5HNCP&amp;co=aHR0cHM6Ly9hcHAueC1zY29wZS5uZXQ6NDQz&amp;hl=en&amp;type=image&amp;v=tNAc29ZZrpcOCErva2nr4BS9&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=j3zszoje1czo" width="304" height="78" role="presentation" name="a-20uailnbygfd" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" className=""></iframe>
                                            </div>
                                            <textarea name="g-recaptcha-response" className="style-53"></textarea>
                                        </div>
                                        <iframe className="style-54"></iframe>
                                    </div>
                                </div>
                            </div>
                            <button className="style-55" tabindex="0" type="submit">
                                <span className="style-56">Sign In</span>
                                <span className="style-57"></span>
                            </button>
                        </form>
                        <div className="style-58">
                            <span className="style-59">Don't have an account?</span>
                            <a href="/Signup" className="style-60">Sign Up Now</a>
                        </div>
                    </div>
                    <div className="style-61"></div>
                </div>
            </div>
            <div className="style-62">Copyright ©️ 2023 www.x-scope.net</div>
        </div>
    );
}

export default Login