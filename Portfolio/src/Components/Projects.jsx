import { motion } from "framer-motion";

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

 const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
        onClick={()=> window.open("https://aziz-muntasir-appstore.netlify.app/", "_blank")}
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/app.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> App store</h3>
          <p>
            My Hero App ,Build for make life Easy
          </p>
          <div className="project-tech">
            <span>React Router</span>
            <span>DaisyUI</span>
            <span>TailwindCSS</span>
          </div>
          <motion.div className="flex  justify-center border "  style={{padding:"7px",
            borderRadius:"50px",
            margin:"7px 6px",
            cursor:"pointer"
            
         }
         }> <motion.a href="https://aziz-muntasir-appstore.netlify.app/"  >
            Click Anywhere to See
          </motion.a></motion.div>
        </motion.div>

        <motion.div

        onClick={()=> window.open("https://customer-support-a07-moon.netlify.app//", "_blank")}
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/customer-support.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Customer Support</h3>
          <p>
           An AI-driven customer support ticketing designed to automate problem resolving.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>LLM</span>
            <span>VectorDB</span>
          </div>
          <motion.div className="flex  justify-center border "  style={{padding:"7px",
            borderRadius:"50px",
            margin:"7px 6px",
            cursor:"pointer"

            
         }
         }> <motion.a href="https://venerable-chebakia-2d29f1.netlify.app/"  >
            Click Anywhere to See
          </motion.a></motion.div>
        </motion.div>

        <motion.div onClick={()=> window.open("https://venerable-chebakia-2d29f1.netlify.app/", "_blank")}
          className="project-card  "
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/greenEarth.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Green Earth</h3>
          <p>
           A tree-purchasing and plantation platform that lets users contribute to environmental restoration by buying trees online.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>MongoDB</span>
            <span>TailwindCSS</span>
         
          
          </div>
         <motion.div className="flex  justify-center border "  style={{padding:"7px",
            borderRadius:"50px",
            margin:"7px 6px",
            cursor:"pointer"
            
         }
         }> <motion.a href="https://venerable-chebakia-2d29f1.netlify.app/"  >
            Click Anywhere to See
          </motion.a></motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;