import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="form-page">
        <div className="form-card">
          <h2>Welcome Back</h2>
          <p>Login to continue tracking your baggage.</p>

          <form>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;