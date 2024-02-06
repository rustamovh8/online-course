import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="bg-[#FFF]">
      <section className="w-[90%] mt-[50px] m-auto">
        <div className="flex justify-center gap-[50px]">
          <div className="flex flex-col gap-[20px]">
            <h4 className="text-[14px] text-[#1E212C] font-[Lato] font-bold not-italic">
              {t("section1.h1")}
            </h4>
            <h1 className="text-[64px] w-[600px] text-[#1E212C] font-[Lato] not-italic font-">
              {t("section1.h2")}
            </h1>
            <div className="flex gap-[20px] items-center">
              <button className="border-[1px] border-solid p-[10px_40px_10px_40px] rounded-[4px] border-[#FF3F3A] text-[#FF3F3A] text-[16px] font-[Lato] not-italic font-bold">
                {t("header1.h1")}
              </button>
              <button className="bg-[#FF3F3A] p-[10px_40px_10px_40px] rounded-[4px] text-[#FFF] text-[16px] font-[Lato] not-italic font-bold">
                {t("section1.h3")}
              </button>
            </div>
          </div>
          <img src="src/img/illustration (1).png" alt="" />
        </div>
        <div className="flex p-[40px_0px] items-center justify-center gap-[30px]">
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[46px] text-[#1E212C] font-black font-[Lato] not-italic">
              1200
            </h1>
            <h3 className="text-[16px] text-[#1E212C] font-black font-[Lato] not-italic">
              {t("section1.h4")}
            </h3>
          </div>
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[46px] text-[#1E212C] font-black font-[Lato] not-italic">
              84
            </h1>
            <h3 className="text-[16px] text-[#1E212C] font-black font-[Lato] not-italic">
              {t("section1.h5")}
            </h3>
          </div>
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[46px] text-[#1E212C] font-black font-[Lato] not-italic">
              16
            </h1>
            <h3 className="text-[16px] text-[#1E212C] font-black font-[Lato] not-italic">
              {t("section1.h6")}
            </h3>
          </div>
          <div className="flex items-center gap-[10px]">
            <h1 className="text-[46px] text-[#1E212C] font-black font-[Lato] not-italic">
              5
            </h1>
            <h3 className="text-[16px] text-[#1E212C] font-black font-[Lato] not-italic">
              {t("section1.h7")}
            </h3>
          </div>
        </div>
      </section>
      <section className="flex items-center gap-[30px] w-[90%] m-auto">
        <img src="src/img/image (3).png" alt="" />
        <div className="flex flex-col gap-[20px] items-start ">
          <h1>{t("sec2.h1")}</h1>
          <h1>{t("sec2.h2")}</h1>
          <p>{t("sec2.h3")}</p>
          <p>{t("sec2.h4")}</p>
          <p>{t("sec2.h5")}</p>
          <p>{t("sec2.h6")}</p>
          <p>{t("sec2.h7")}</p>
          <p>{t("sec2.h8")}</p>
          <button>{t("sec2.h9")}</button>
        </div>
      </section>

      <div className="px-[10%] py-[40px] flex justify-between items-end">
        <div>
          <h1>{t("sec3.h1")}</h1>
          <h1 className="text-[40px] font-[600]">{t("sec3.h2")}</h1>
        </div>
        <Button color="warning" variant="outlined">
          {t("sec3.h3")}
        </Button>
      </div>
      <div className="px-[10%] py-[40px] flex justify-between items-center flex-wrap">
        <div
          className="w-[48%] shadow-2xl rounded-[5px] flex mb-[4%]"
          data-aos="fade-right"
        >
          <img className="w-[150px]" src="src/img/image1.png" alt="" />
          <div className="ml-[5%] mt-[5%]">
            <h5 className="text-[white] bg-[#03CEA4] w-[40%] text-center  rounded-[5px] text-[12px] ">
              {t("sec3.h4")}
            </h5>
            <h1 className="text-[#1E212C] my-[3%] text-[16px] font-[800]">
              {t("sec3.h5")}
            </h1>
            <p className="text-[#FF4242] font-[800]">
              $100{" "}
              <span className="text-[#787A80] text-[12px] font-[400]">
                {t("sec3.h6")}
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[48%] shadow-2xl rounded-[5px] flex mb-[4%]"
          data-aos="fade-right"
        >
          <img className="w-[150px]" src="src/img/image1.png" alt="" />
          <div className="ml-[5%] mt-[5%]">
            <h5 className="text-[white] bg-[#03CEA4] w-[40%] text-center  rounded-[5px] text-[12px] ">
              {t("sec3.h4")}
            </h5>
            <h1 className="text-[#1E212C] my-[3%] text-[16px] font-[800]">
              {t("sec3.h5")}
            </h1>
            <p className="text-[#FF4242] font-[800]">
              $100{" "}
              <span className="text-[#787A80] text-[12px] font-[400]">
                {t("sec3.h6")}
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[48%] shadow-2xl rounded-[5px] flex mb-[4%]"
          data-aos="fade-right"
        >
          <img className="w-[150px]" src="src/img/image1.png" alt="" />
          <div className="ml-[5%] mt-[5%]">
            <h5 className="text-[white] bg-[#03CEA4] w-[40%] text-center  rounded-[5px] text-[12px] ">
              {t("sec3.h4")}
            </h5>
            <h1 className="text-[#1E212C] my-[3%] text-[16px] font-[800]">
              {t("sec3.h5")}
            </h1>
            <p className="text-[#FF4242] font-[800]">
              $100{" "}
              <span className="text-[#787A80] text-[12px] font-[400]">
                {t("sec3.h6")}
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[48%] shadow-2xl rounded-[5px] flex mb-[4%]"
          data-aos="fade-right"
        >
          <img className="w-[150px]" src="src/img/image1.png" alt="" />
          <div className="ml-[5%] mt-[5%]">
            <h5 className="text-[white] bg-[#03CEA4] w-[40%] text-center  rounded-[5px] text-[12px] ">
              {t("sec3.h4")}
            </h5>
            <h1 className="text-[#1E212C] my-[3%] text-[16px] font-[800]">
              {t("sec3.h5")}
            </h1>
            <p className="text-[#FF4242] font-[800]">
              $100{" "}
              <span className="text-[#787A80] text-[12px] font-[400]">
                {t("sec3.h6")}
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[48%] shadow-2xl rounded-[5px] flex mb-[4%]"
          data-aos="fade-right"
        >
          <img className="w-[150px]" src="src/img/image1.png" alt="" />
          <div className="ml-[5%] mt-[5%]">
            <h5 className="text-[white] bg-[#03CEA4] w-[40%] text-center  rounded-[5px] text-[12px] ">
              {t("sec3.h4")}
            </h5>
            <h1 className="text-[#1E212C] my-[3%] text-[16px] font-[800]">
              {t("sec3.h5")}
            </h1>
            <p className="text-[#FF4242] font-[800]">
              $100{" "}
              <span className="text-[#787A80] text-[12px] font-[400]">
                {t("sec3.h6")}
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-[48%] shadow-2xl rounded-[5px] flex mb-[4%]"
          data-aos="fade-right"
        >
          <img className="w-[150px]" src="src/img/image1.png" alt="" />
          <div className="ml-[5%] mt-[5%]">
            <h5 className="text-[white] bg-[#03CEA4] w-[40%] text-center  rounded-[5px] text-[12px] ">
              {t("sec3.h4")}
            </h5>
            <h1 className="text-[#1E212C] my-[3%] text-[16px] font-[800]">
              {t("sec3.h5")}
            </h1>
            <p className="text-[#FF4242] font-[800]">
              $100{" "}
              <span className="text-[#787A80] text-[12px] font-[400]">
                {t("sec3.h6")}
              </span>
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col gap-[20px] w-[90%] m-auto">
        <h3 className="text-center">{t("sec4.h1")}</h3>
        <h1 className="text-center">{t("sec4.h2")}</h1>
        <div className="flex justify-center gap-[10px]">
          <h1 className="p-[10px_20px] hover:border-[#FF3F3A] border border-solid text-[16px] font-[Lato] hover:text-[#FF3F3A] text-[#9A9CA5]">
            {t("sec4.h3")}
          </h1>
          <h1 className="p-[10px_20px] hover:border-[#FF3F3A] border border-solid hover:text-[#FF3F3A] text-[16px] font-[Lato] text-[#9A9CA5]">
            {t("sec4.h4")}
          </h1>
          <h1 className="p-[10px_20px] hover:border-[#FF3F3A] border border-solid hover:text-[#FF3F3A] text-[16px] font-[Lato] text-[#9A9CA5]">
            {t("sec4.h5")}
          </h1>
          <h1 className="p-[10px_20px] hover:border-[#FF3F3A] border border-solid hover:text-[#FF3F3A] text-[16px] font-[Lato] text-[#9A9CA5]">
            {t("sec4.h6")}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-[30px]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="font-[Lato] text-[32px] text-[#1E212C] font-black">
              {t("sec4.h7")}
            </h1>
            <p className="font-[Lato] text-[16px] text-[#1E212C] font-normal">
              {t("sec4.h8")}
            </p>
          </div>
          <img src="src/img/illustration (2).png" alt="" />
        </div>
      </section>

      <section className="w-[90%] flex flex-col gap-[20px] m-auto mt-[100px] ">
        <h1 className="text-center">{t("sec5.h1")}</h1>
        <h1 className="text-center">{t("sec5.h2")}</h1>
        <div>
          <div className="flex items-center gap-[50px] p-[20px_0px] justify-center bg-[#FFFFFF] mt-[30px]">
            <div className="flex items-center gap-[10px] ">
              <h1 className="text-[48px] text-[#FF3F3A] font-[Lato] font-">
                05
              </h1>
              <div>
                <h1 className="text-[20px] font-[Lato] text-[#1E212C] not-italic font-bold">
                  {t("sec5.h3")}
                </h1>
                <h2 className="text-[#787A80] text-[16px] font-[Lato] font-normal not-italic">
                  11:00 – 14:00
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[20px] font-[Lato] text-[#1E212C] not-italic font-bold">
                {t("sec5.h4")}
              </h1>
              <h2 className="text-[#787A80] text-[16px] font-[Lato] font-normal not-italic">
                {t("sec5.h6")}
              </h2>
            </div>
            <button className="p-[10px_32px_10px_32px] border border-solid border-[#FF3F3A] text-[#FF3F3A] text-[14px] font-bold not-italic font-[Lato] hover:bg-[#FF3F3A] hover:text-[#FFF]">
              {t("sec5.h5")}
            </button>
          </div>
          <div className="flex items-center gap-[50px] p-[20px_0px] justify-center bg-[#FFFFFF] mt-[30px]">
            <div className="flex items-center gap-[10px] ">
              <h1 className="text-[48px] text-[#FF3F3A] font-[Lato] font-">
                24
              </h1>
              <div>
                <h1 className="text-[20px] font-[Lato] text-[#1E212C] not-italic font-bold">
                  {t("sec5.h7")}
                </h1>
                <h2 className="text-[#787A80] text-[16px] font-[Lato] font-normal not-italic">
                  11:00 – 14:00
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[20px] font-[Lato] text-[#1E212C] not-italic font-bold">
                {t("sec5.h8")}
              </h1>
              <h2 className="text-[#787A80] text-[16px] font-[Lato] font-normal not-italic">
                {t("sec5.h13")}
              </h2>
            </div>
            <button className="p-[10px_32px_10px_32px] border border-solid border-[#FF3F3A] text-[#FF3F3A] text-[14px] font-bold not-italic font-[Lato] hover:bg-[#FF3F3A] hover:text-[#FFF]">
              {t("sec5.h5")}
            </button>
          </div>
          <div className="flex items-center gap-[50px] p-[20px_0px] justify-center bg-[#FFFFFF] mt-[30px]">
            <div className="flex items-center gap-[10px] ">
              <h1 className="text-[48px] text-[#FF3F3A] font-[Lato] font-">
                16
              </h1>
              <div>
                <h1 className="text-[20px] font-[Lato] text-[#1E212C] not-italic font-bold">
                  {t("sec5.h7")}
                </h1>
                <h2 className="text-[#787A80] text-[16px] font-[Lato] font-normal not-italic">
                  11:00 – 14:00
                </h2>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h1 className="text-[20px] font-[Lato] w-[700px] text-[#1E212C] not-italic font-bold">
                {t("sec5.h11")}
              </h1>
              <h2 className="text-[#787A80] text-[16px] font-[Lato] font-normal not-italic">
                {t("sec5.h13")}
              </h2>
            </div>
            <button className="p-[10px_32px_10px_32px] border border-solid border-[#FF3F3A] text-[#FF3F3A] text-[14px] font-bold not-italic font-[Lato] hover:bg-[#FF3F3A] hover:text-[#FFF]">
              {t("sec5.h5")}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[20px]">
          <h1>{t("sec5.h14")}</h1>
          <button>{t("sec5.h15")}</button>
        </div>
      </section>

      <section className="flex w-[90%] m-auto mt-[100px] ">
        <div>
          <h1 className="text-[16px] text-[#1E212C] font-[700] font-[Lato]">
            Createx Certificate
          </h1>
          <h1 className="text-[46px] text-[#1E212C] font-[900] font-[Lato]">
            Your expertise will be confirmed
          </h1>
          <p className="text-[16px] text-[#424551] font-[400] font-[Lato]">
            We are accredited by international professional organizations and
            institutes:
          </p>
          <div className="flex gap-[20px]">
            <img src="src/img/logo (8).png" alt="" />
            <img src="src/img/logo (9).png" alt="" />
            <img src="src/img/logo (10).png" alt="" />
          </div>
        </div>
        <img src="src/img/image (9).png" alt="" />
      </section>

      <section className="p-[50px_80px] flex flex-col bg-[#F4F5F6] gap-[20px]">
        <h4 className="text-[#1E212C] text-[16px] font-[700] font-[Lato] ">
          Best tutors are all here
        </h4>
        <h1 className="text-[#1E212C] text-[46px] font-[900] font-[Lato]">
          Meet our team
        </h1>
        <div className="flex items-center gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <img src="src/img/image1.png" alt="" />
            <div className="flex flex-col gap-[5px] items-cetner justify-center">
              <h1>Dianne Russell</h1>
              <h2>Founder and CEO</h2>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src="src/img/image1.png" alt="" />
            <div className="flex flex-col gap-[5px] items-cetner justify-center">
              <h1>Dianne Russell</h1>
              <h2>Founder and CEO</h2>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src="src/img/image1.png" alt="" />
            <div className="flex flex-col gap-[5px] items-cetner justify-center">
              <h1>Dianne Russell</h1>
              <h2>Founder and CEO</h2>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src="src/img/image1.png" alt="" />
            <div className="flex flex-col gap-[5px] items-cetner justify-center">
              <h1>Dianne Russell</h1>
              <h2>Founder and CEO</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[15px]  mt-[100px] items-center">
          <h1 className="text-center text-[#1E212C] font-[Lato] font-[700] text-[16px] ">
            TESTIMONIALS
          </h1>
          <h1 className="text-center text-[#1E212C] font-[Lato] font-[900] text-[46px] ">
            What our students say
          </h1>
          <div className="flex flex-col w-[780px] p-[20px_40px] gap-[20px] itmes-center rounded-[4px] bg-[#FFF]">
            <p className="text-[20px] font-[400] font-[Lato] text-[#424551]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar
              eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis
              non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque
              pharetra arcu diam maecenas diam integer in.
            </p>
            <div className="flex items-center gap-[20px]">
              <img src="src/img/image (22).png" alt="" />
              <div className="flex flex-col gap-[5px] ">
                <h1 className="text-[#1E212C] text-[16px] font-[700] font-[Lato] ">
                  Eleanor Pena
                </h1>
                <h2 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  Position, Course
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] m-auto mt-[50px] flex flex-col gap-[20px] ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[#1E212C] font-[Lato] font-[700] text-[16px]">
              Our blog
            </h1>
            <h1 className="text-[#1E212C] font-[Lato] font-[900] text-[46px]">
              Latest posts
            </h1>
          </div>
          <button className="bg-[#FF3F3A] p-[10px_40px] text-[#FFF]  rounded-[5px] ">
            Go to blog
          </button>
        </div>
        <div className="flex items-center gap-[50px]">
          <div className="w-[400px] p-[10px] flex flex-col gap-[10px] ">
            <img src="src/img/image.png" alt="" />
            <div className="flex flex-col gap-[10px] items-start">
              <div className="flex gap-[10px]">
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  Marketing |
                </h6>
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  September 4, 2020 |
                </h6>
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  36 min
                </h6>
              </div>
              <h1 className="text-[#1E212C] text-[20px] font-[700] font-[Lato]">
                What is traffic arbitrage and does it really make money?
              </h1>
              <p className="text-[#424551] text-[16px] font-[400] font-[Lato]">
                Pharetra, ullamcorper iaculis viverra parturient sed id sed.
                Convallis proin dignissim lacus, purus gravida...
              </p>
              <h3 className="text-[#1E212C] text-[16px] font-[700] font-[Lato]">
                Listen
              </h3>
            </div>
          </div>

          <div className="w-[400px] p-[10px] flex flex-col gap-[10px] ">
            <img src="src/img/image.png" alt="" />
            <div className="flex flex-col gap-[10px] items-start">
              <div className="flex gap-[10px]">
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  Marketing |
                </h6>
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  September 4, 2020 |
                </h6>
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  36 min
                </h6>
              </div>
              <h1 className="text-[#1E212C] text-[20px] font-[700] font-[Lato]">
                What is traffic arbitrage and does it really make money?
              </h1>
              <p className="text-[#424551] text-[16px] font-[400] font-[Lato]">
                Pharetra, ullamcorper iaculis viverra parturient sed id sed.
                Convallis proin dignissim lacus, purus gravida...
              </p>
              <h3 className="text-[#1E212C] text-[16px] font-[700] font-[Lato]">
                Listen
              </h3>
            </div>
          </div>

          <div className="w-[400px] p-[10px] flex flex-col gap-[10px] ">
            <img src="src/img/image.png" alt="" />
            <div className="flex flex-col gap-[10px] items-start">
              <div className="flex gap-[10px]">
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  Marketing |
                </h6>
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  September 4, 2020 |
                </h6>
                <h6 className="text-[#787A80] text-[14px] font-[400] font-[Lato]">
                  36 min
                </h6>
              </div>
              <h1 className="text-[#1E212C] text-[20px] font-[700] font-[Lato]">
                What is traffic arbitrage and does it really make money?
              </h1>
              <p className="text-[#424551] text-[16px] font-[400] font-[Lato]">
                Pharetra, ullamcorper iaculis viverra parturient sed id sed.
                Convallis proin dignissim lacus, purus gravida...
              </p>
              <h3 className="text-[#1E212C] text-[16px] font-[700] font-[Lato]">
                Listen
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[20px] bg-[#ffa19e] p-[50px_80px]">
        <h1 className="text-center text-[#1E212C] font-[Lato] font-[700] text-[16px]">
          Don’t miss anything
        </h1>
        <h1 className="text-center text-[#1E212C] font-[Lato] font-[900] text-[46px]">
          Subscribe to the Createx School <br /> announcements
        </h1>
        <div className="text-center flex gap-[20px] justify-center">
          <input className="p-[10px] rounded-[5px]" type="text" />
          <button className="bg-[#FF3F3A] p-[10px_40px] text-[#FFF]  rounded-[5px]">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
