import {useState} from "react";
import axios from "axios";

const AuthPage = (props) => {
    const [username, setUsername] = useState();
    const [secret, setSecret] = useState();
    const [email, setEmail] = useState();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();

    const onLogin = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/users/login", {username, secret})
            .then((r) => props.onAuth({...r.data, secret})) // NOTE: over-ride secret
            .catch((e) => console.log(JSON.stringify(e.response.data)));
    };

    const onSignup = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/users/register", {
                username,
                secret,
                email,
                first_name,
                last_name,
            })
            .then((r) => props.onAuth({...r.data, secret})) // NOTE: over-ride secret
            .catch((e) => console.log(JSON.stringify(e.response.data)));
    };

    return (
        <div className="login-page">
            <div className="log">
                {/* Login Form */}
                <form onSubmit={onLogin}>
                    <div className="title">Login</div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="secret"
                        placeholder="Password"
                        onChange={(e) => setSecret(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark">LOG IN</button>
                </form>

                {/* Sign Up Form */}
                <form onSubmit={onSignup}>
                    <div className="title">or Sign Up</div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="secret"
                        placeholder="Password"
                        onChange={(e) => setSecret(e.target.value)}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last name"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark">REGISTER</button>
                </form>
            </div>
            <style>{`
      .login-page { width: 100vw; height: 100vh; padding-top: 6vw; background: linear-gradient(to bottom, #2F3E83, #535666); }
      .log { width: 200px; position: relative; left: calc(50vw - 100px); text-align: center; }
      .title { padding-top: 32px; font-size: 22px; color: white; font-weight: 700; }
      input { width: calc(100% - 16px); margin-top: 12px; padding: 8px; background-color: #e6f7ff; outline: none; border: 1px solid #e6f7ff; }
      button { margin-top: 12px; width: 100%; padding: 8px; }
      `}</style>
        </div>
    );
};

export default AuthPage;