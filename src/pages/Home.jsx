import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Track Every Bag. Travel With Confidence.</h1>

        <p>
          Monitor your baggage journey from check-in to carousel delivery with
          real-time updates and a simple tracking experience.
        </p>

        <button>Start Tracking</button>
      </section>

      <section className="timeline">
        <h2>Baggage Journey</h2>

        <div className="steps">
          <div>✓ Check-In</div>
          <div>✓ Loaded</div>
          <div>✓ In Transit</div>
          <div>✓ Arrived</div>
          <div>✓ Collected</div>
        </div>
      </section>

      <section className="features">
        <div className="card">
          <h3>Real-Time Tracking</h3>
          <p>Know where your baggage is at every stage.</p>
        </div>

        <div className="card">
          <h3>Smart Notifications</h3>
          <p>Receive instant baggage status updates.</p>
        </div>

        <div className="card">
          <h3>Lost Baggage Support</h3>
          <p>Report missing baggage quickly and easily.</p>
        </div>
      </section>
    </>
  );
}

export default Home;