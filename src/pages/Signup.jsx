import Navbar from "../components/Navbar";

function Signup() {
  return (
    <>
      <Navbar />

      <div className="form-page">
        <div className="form-card">
          <h2>Create Account</h2>
          <p>Register to access baggage tracking services.</p>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="password" placeholder="Password" required />

            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;