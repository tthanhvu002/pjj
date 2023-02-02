import "./Login.scss";
function Login() {
  return (
    <div className="login">
      <div className="logo">
        logo
      </div>
      <img src="" alt="img" className="img" />
      <div className="input">
        <div className="input-wrap">
          <span>ID</span>
          <input type="text" id="id" />
        </div>
        <div className="input-wrap">
          <span>PASS</span>
          <input type="password" id="pass" />
        </div>
        <div className="forget">Forget password?</div>
        <div className="login-btn">
            Login
        </div>

      </div>
        <a href="#">Lorem ipsum dolor sit amet.</a>
    </div>
  );
}

export default Login;
