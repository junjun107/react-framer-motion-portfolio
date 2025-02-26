import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

// const projectTitle = title.split(" ").join("-").toLowerCase();

const Project = ({ title, description, link, imageSrc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
        {link && (
          <div className="inline-flex pt-2">
            <a
              href={link}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            >
              Live Demo
            </a>
          </div>
        )}
      </div>
      <img
        src={imageSrc || `../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Some projects are freelance, some are from work, and a few are for
          hobby.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          {/* project 1 */}
          <Project
            title="Food Oasis"
            description="A web application that provides information about
                food pantries and meal programs to food seekers in Los Angeles
                County"
            link="https://foodoasis.la/"
            imageSrc="https://res.cloudinary.com/dhhiphscp/image/upload/t_fola 400x400/v1706560821/portfolio/fola-profolio_fznjfp.png"
          />
          {/* project 2 */}
          <Project
            title="Shuna's Succulent House"
            description="A static webpage featuring smooth animations, developed with HTML, CSS, and JavaScript for local plant nursery."
            link="https://shuna-succulenthouse.com/"
            imageSrc="https://res.cloudinary.com/dhhiphscp/image/upload/t_fola 400x400/v1740520056/project-2_ei4rjr.jpg"
          />

          {/* ROW 2 */}
          {/* project 3 */}
          <Project
            title="MapMyWay"
            description="Full stack web application to track your travels built with
                Node, Express, MongoDB, React, MUI, FramerMotion and Mapbox"
            link="https://beige-gazelle-gear.cyclic.app/"
            imageSrc="https://res.cloudinary.com/dhhiphscp/image/upload/t_fola 400x400/v1707329983/portfolio/Screenshot_2024-02-07_at_10.19.33_AM_u5fjun.png"
          />
          {/* project 4 */}
          <Project
            title="SY America"
            description="E-commerce Shopify store for local hardware company"
            link="https://www.syamericacasterwheels.com/"
            imageSrc="https://res.cloudinary.com/dhhiphscp/image/upload/t_fola 400x400/v1740524580/portfolio/Screenshot_2025-02-25_at_3.02.52_PM_kpnnsx.png"
          />
          {/* project 5 */}
          <Project
            title="LongRun4U Caster Wheels"
            description="E-commerce Shopify store for local caster wheels company. Build
                with Shopify liquid."
            link="https://longrun4u.com/"
            imageSrc="https://res.cloudinary.com/dhhiphscp/image/upload/t_fola 400x400/v1740524865/portfolio/Screenshot_2025-02-25_at_3.07.17_PM_upnp52.png"
          />
          {/* ROW 3 */}
          {/* project 6 */}
          <Project
            title="CineSearcher"
            description="            JavaScript-based movie search site using Node.js, Express,
                React, SCSS, integrated with TMDB API, styled with Bootstrap"
            link="https://relaxed-jackson-4661d8.netlify.app/"
            imageSrc="https://res.cloudinary.com/dhhiphscp/image/upload/t_fola 400x400/v1670700132/portfolio/MovieApp_xvv46t.png"
          />
          {/* project 7 */}
          <Project
            title="Han's Personal Guided Travel"
            description="Local LA travel agency. Build with React, styled with Bootstrap
"
            link=""
            imageSrc="https://res.cloudinary.com/dhhiphscp/image/upload/t_fola 400x400/v1735719513/Screenshot_2025-01-01_at_00-17-44_%E6%82%A6%E6%AD%A5%E6%97%85%E8%A1%8C-%E4%B8%93%E4%B8%9A%E6%8F%90%E4%BE%9B%E6%B4%9B%E6%9D%89%E7%9F%B6%E6%97%85%E6%B8%B8_%E7%BE%8E%E8%A5%BF%E6%97%85%E6%B8%B8_%E6%B4%9B%E6%9D%89%E7%9F%B6%E7%A7%81%E4%BA%BA%E5%AE%9A%E5%88%B6%E6%97%85%E6%B8%B8_%E6%B4%9B%E6%9D%89%E7%9F%B6%E5%8C%85%E8%BD%A6%E8%87%AA%E7%94%B1%E8%A1%8C_%E6%B4%9B%E6%9D%89%E7%9F%B6%E6%97%85%E6%B8%B8%E5%8C%85%E8%BD%A6%E7%AD%89%E6%9C%8D%E5%8A%A1_igvckt.png"
          />
          {/* project 8 */}

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
