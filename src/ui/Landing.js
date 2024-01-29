import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-5 md:h-full py-10 my-8"
    >
      {/* LEFT MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Bijun {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Zhao
            </span>
          </p>

          <p className="mt-10 mb-7 text-md text-center md:text-start">
            I have experience designing and developing web applications using
            various technologies, from the fundamental trio of{" "}
            <span className="text-blue">HTML, CSS, and JavaScript</span> to more
            robust frameworks and platforms like{" "}
            <span className="text-blue"> React, and NextJS</span>. My passion
            extends beyond just aesthetics and I love seeking new and improved
            methods to write efficient and scalable code with the goal of
            creating seamless user experiences.
          </p>
          <p className="mt-10 mb-7 text-md text-center md:text-start">
            When I’m not at my computer, you can find me at the caring for my
            plants in my garden, or baking a bunch of sweets in the kitchen!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          {/* the other contact me button */}
          {/* <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink> */}
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:rounded-[40px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-yellow before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter rounded-[40px] hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvYWNoaW5nfGVufDB8fDB8fHww"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?auto=format&fit=crop&q=80&w=1980&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        )}
      </div>
    </section>
  );
};

export default Landing;
