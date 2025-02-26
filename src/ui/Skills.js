import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* skill left */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span>SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        

          <p className="mt-10 mb-7">
            Results-driven Software Engineer with expertise in{" "}
            <span className="bg-gradient-to-r from-blue to-red bg-clip-text text-transparent">
              JavaScript, React, Node.js, Express, and MongoDB
            </span>
            , specializing in full-stack web development. Experienced in
            delivering scalable applications and contributing to open-source
            projects. Proficient in{" "}
            <span className="bg-gradient-to-r from-green-500 to-teal-700 bg-clip-text text-transparent">
              HTML, CSS, TypeScript, and GraphQL
            </span>
            , with a keen eye for{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
              UI/UX design and web accessibility
            </span>
            . Skilled in{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-600 bg-clip-text text-transparent">
              AWS cloud services
            </span>
            , holding an AWS Certified Cloud Practitioner certification. Strong
            foundation in{" "}
            <span className="bg-gradient-to-r from-blue to-red bg-clip-text text-transparent">
              Agile methodologies, collaborative development, and continuous
              learning
            </span>{" "}
            to drive innovative solutions.
          </p>
        </motion.div>
        {/* skill right */}
        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 "
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10"
              src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
