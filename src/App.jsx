import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2>Chethana</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Chethana Thakkalapati</h1>

          <h2>Computer Science Engineering Student|Programmer</h2>

          <p>
            I am a passionate student interested in programming,
            web development, technology and building useful projects.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Projects
            </a>

            <a href="#contact" className="button secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
  I am a Computer Science Engineering student at REVA University, interested in
  programming, problem-solving and learning new technologies.
  I enjoy building practical projects and improving my technical
  skills through hands-on experience.
</p>

<p>
  I am currently developing my skills in C, Java and Python,
  while continuing to explore web development and AI/ML.
</p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-container">
  <div className="skill-card">C Programming</div>
  <div className="skill-card">Java</div>
  <div className="skill-card">Python</div>
  <div className="skill-card">Git & GitHub</div>
</div>
      </section>

      {/* Projects */}
<section id="projects" className="section">
  <h2>Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>Line Editor in C</h3>

      <p>
        A command-line text editor developed in C that allows users
        to create, edit, search, save and load text documents line by line.
      </p>

      <span>C • File Handling • Modular Programming</span>

      <br /><br />

      <a
        href="https://github.com/ChethanaThakkalapati/line-editor"
        target="_blank"
        rel="noopener noreferrer"
        className="button secondary"
      >
        View on GitHub
      </a>
    </div>

    <div className="project-card">
      <h3>2D Graphics Editor in C</h3>

      <p>
        A character-based 2D graphics editor developed in C.
        It allows users to draw, add, delete and modify shapes
        such as lines, rectangles, circles and triangles.
      </p>

      <span>C • 2D Graphics • Data Structures</span>

      <br /><br />

      <a
        href="https://github.com/ChethanaThakkalapati/Acp_miniproject_2d-graphics"
        target="_blank"
        rel="noopener noreferrer"
        className="button secondary"
      >
        View on GitHub
      </a>
    </div>

    <div className="project-card">
      <h3>Python Mini Project</h3>

      <p>
        A Python-based mini project developed to demonstrate
        programming concepts, problem-solving and practical
        application of Python.
      </p>

      <span>Python • Programming • Problem Solving</span>

      <br /><br />

      <a
        href="https://github.com/ChethanaThakkalapati/MINI-PROJECT---CHETHANA-THAKKALAPATI"
        target="_blank"
        rel="noopener noreferrer"
        className="button secondary"
      >
        View on GitHub
      </a>
    </div>

  </div>
</section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2>Contact Me</h2>

        <p>I'd love to connect and learn together.</p>

        <a
          href="mailto:chethanathakkelapati@gmail.com"
          className="button primary"
        >
          Email Me
        </a>
        <a
  href="https://github.com/ChethanaThakkalapati"
  target="_blank"
  rel="noopener noreferrer"
  className="button secondary"
>
  GitHub Profile
</a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Chethana Thakkalapati. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;