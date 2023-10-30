import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-52 bg-red pt-1">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Bijun Zhao
          </p>
          <p className="font-playfair text-md text-white">
            ©2023 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
