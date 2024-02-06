import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="bg-[#FFF]">
      <header className="flex p-[30px_0px] justify-evenly items-center ">
        <div className="flex">
          <img src="src/img/logo.png" alt="" />
        </div>
        <div className="flex items-center gap-[40px]">
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            <Link to="/">About</Link>
          </p>
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            <Link to="/courses">Courses</Link>
          </p>
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            <Link to="/events">Events</Link>
          </p>
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            Blog
          </p>
          <p className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic">
            Contacts
          </p>
        </div>
        <div className="flex items-center gap-[20px]">
          <button
            onClick={() => changeLanguage("en")}
            className="bg-[rgba(255,_63,_58,_1)] p-[0px_40px_0px_40px] rounded-[4px] text-[16px] text-[#FFF] font-[Lato] font-bold "
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("ru")}
            className="text-[#424551] text-[16px] font-bold font-[Lato] not-italic"
          >
            Russin
          </button>
        </div>
      </header>
      <Outlet />
      <div>
        <footer className="flex gap-[80px] p-[100px_80px] bg-[#1E212C]">
          <div className="flex flex-col gap-[20px]">
            <img className="w-[200px]" src="src/img/logo (8)).png" />
            <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]text-[">
              Createx Online School is a leader in online studying.
              <br /> We have lots of courses and programs from the main
              <br /> market experts.
            </p>
          </div>
          <div className="w-[150px] flex flex-col gap-[5px] ">
            <h1 className="text-[16px] text-[#FFF] font-[700] font-[Lato]">
              SITE MAP
            </h1>
            <div className="flex flex-col gap-[5px] ">
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                About Us
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Courses
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Events
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Blog
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Contacts
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] ">
            <h1 className="text-[16px] text-[#FFF] font-[700] font-[Lato]">
              COURSES
            </h1>
            <div className="flex flex-col gap-[5px] ">
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Marketing
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Management
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                HR & Recruting
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Design
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                Development
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] ">
            <h1 className="text-[16px] text-[#FFF] font-[700] font-[Lato]">
              CONTACT US
            </h1>
            <div className="flex flex-col gap-[5px] ">
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                (405) 555-0128
              </p>
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                hello@createx.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[5px] ">
            <h1 className="text-[16px] text-[#FFF] font-[700] font-[Lato]">
              SIGN UP TO OUR NEWSLETTER
            </h1>
            <div className="">
              <input type="text" />
              <p className="text-[#FFFFFF] text-[16px] font-[400] font-[Lato]">
                *Subscribe to our newsletter to receive communications and early
                updates from Createx SEO Agency.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
