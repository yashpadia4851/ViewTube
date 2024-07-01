const Footer = () => {
    return (
      <div className="footer flex items-center flex-col bg-[#0F0F0F] dark:text-white pt-8 md:pt-8 pb-6 md:pb-8 text-center mt-16">
        <h1 className="text-base md:text-l px-4 md:px-0">
          Made with ❤️ by&nbsp;
          <a
            href="https://www.linkedin.com/in/yash-padia-frontend-developer/"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 underline"
          >
            Yash Padia.
          </a>
          &nbsp;to showcase his skills on React, Redux, JS & Web
          Developement in Genral!
        </h1>
      </div>    
    );
  };
  export default Footer;