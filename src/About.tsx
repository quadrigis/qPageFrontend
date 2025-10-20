import "./About.css";

function About() {
  return (
    <div className="container" role="main">
      <header>
        <div className="logo" aria-hidden="true">
            <img src="./logo.png" width={'30px'} alt="logo"/>
          <div>
            <h1>Quadrigis</h1>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="card">
            <p className="slogan">
              Code is our language. Innovation is our passion.
            </p>
            <p className="lead">
              We design and build reliable web and business applications using
              .NET, React, TypeScript, SQL, HTML, CSS &amp;  more. We focus on clean
              architecture, fast delivery and long-term maintainability.
            </p>
            <p className="lead">
              Our biggest advantage is avoiding the high costs of starting a project. 
              We can create an outline in a very short time and then either implement the project or hand it over to someone else.
            </p>

            <div className="contact">
              <p>
                We're open for collaboration — send project details to contact mail.
              </p>
              <p className="muted">Cooperation modes:</p>
              <ul className="cooperation-list">
                <li>Time-based (hourly / monthly)</li>
                <li>
                  Fixed-price (per deliverable), including partial / phased
                  deliveries
                </li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="stack card">
          <h3>Our tech stack</h3>
          <div className="techs">
            <span className="tech">.NET</span>
            <span className="tech">React</span>
            <span className="tech">Angular</span>
            <span className="tech">TypeScript</span>
            <span className="tech">C#</span>
            <span className="tech">SQL</span>
            <span className="tech">JacaScript</span>
            <span className="tech">HTML</span>
            <span className="tech">CSS</span>
          </div>

          <div className="marginTopPlus">
            We adapt to your process — Agile, Scrum or custom workflows.
          </div>
        </aside>
      </main>

      <footer>
        <div>
          © {new Date().getFullYear()} Quadrigis
        </div>
        <div>
          Contact: <a href="michael.jedruch@gmail.com">michael.jedruch@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default About;
