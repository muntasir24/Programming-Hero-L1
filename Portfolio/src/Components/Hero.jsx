import { motion } from "framer-motion";
 import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
 import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
          Aziz Muntasir
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp} >
            {" "}
            AI Engineer & Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I’m an aspiring AI Engineer & Full-Stack Developer passionate about building intelligent, data-driven, and scalable software solutions. My journey bridges the world of AI and RAG with modern web technologies to create impactful real-world applications.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"> </i>
            </motion.a>
          </motion.div>
        </motion.div>
<motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="javascript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                fontSize:"1.2rem",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 1)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "AzizMuntasir",

  role: "AI Engineer & Full-Stack Developer",
  stack: {
    languages:  ["JavaScript", "C++", "Python", "SQL"],
    frameworks: ["React", "Next.js","Node.js","Express","TailwindCSS" ],
    ai_tools:   ["LLMs","RAG Pipelines","LangChain","Vector Databases","OpenAI API" ],
    devops:     ["Docker","AWS","Nginx","CI/CD","Linux"],
  },
  missionStatement:
    "Merging LLM intelligence with full-stack engineering to build smart, scalable systems.",
  availability: "Open for collaborations & new challenges ",
};
`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content ">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};