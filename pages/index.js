import { useRef } from "react";
import Header from "../components/Header";
import Socials from "../components/Socials";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <div className="tablet:ml-12 laptop:ml-12 laptopl:ml-12">
          <Header
            handleWorkScroll={handleWorkScroll}
            handleAboutScroll={handleAboutScroll}
          />
        </div>

        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5 tablet:ml-10 laptop:ml-10 laptopl:ml-10  mobs:ml-4"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 tablet:ml-10 laptop:ml-10 laptopl:ml-10 mobs:ml-4"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 tablet:ml-10 laptop:ml-10 laptopl:ml-10 mobs:ml-4"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5 tablet:ml-10 laptop:ml-10 laptopl:ml-10 mobs:ml-4"
            >
              {data.headerTaglineFour}
            </h1>
          </div>
        </div>

        <div
          className="mt-5 laptop:mt-10 p-2 laptop:p-0 tablet:ml-10 laptop:ml-10 laptopl:ml-10  mobs:ml-4"
          ref={aboutRef}
        >
          <h1 className="tablet:m-1 text-2xl font-bold">About</h1>
          <p className="tablet:m-1 mt-2 text-xl laptop:text-1xl w-full laptop:w-5/5">
            {data.aboutpara}
          </p>
        </div>

        <div className="mt-10 tablet:ml-12 laptop:ml-11 laptopl:ml-11 mobs:ml-4">
          <h1 className="text-2xl font-bold">Education</h1>
          <div className="mt-2">
            {data.schools.map((school, index) => (
              <div key={index}>
                <h2 className="text-lg font-bold">{school.course}</h2>
                <h2 className="text-lg">{school.universityName}</h2>
                <h3 className="text-1xl opacity-75">{school.universityDate}</h3>
                <p className="text-1xl mt-2 mb-5 opacity-50">
                  {school.universityPara}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 tablet:ml-12 laptop:ml-11 laptopl:ml-11 mobs:ml-4">
          <h1 className="text-2xl font-bold">Experience</h1>
          <div className="mt-1">
            <div className="w-full flex space-x-3 p-10 snap-x snap-mandatory mt-1 md:mt-28 scrollbar-thin overflow-y-hidden overflow-x-scroll scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
              <article className="flex flex-col rounded-lg items-center space-y-12 md:space-y-7 flex-shrink-0 w-1/2 snap-start bg-[#292929] p-4 md:p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 tablet:w-2/4 mob:w-full mobs:w-full">
                <div className="px-2 md:px-10">
                  <h4 className="text-lg md:text-2xl lg:text-4xl font-light">
                    Principal I.C.T. Officer - (Software & Applications
                    Engineer)
                  </h4>
                  <p className="font-bold text-lg md:text-2xl md:mt-1">
                    Lake Basin Development Authority
                  </p>
                  <p className="uppercase py-3 md:py-5 text-gray-300">
                    August 2021 - Present{" "}
                  </p>
                  <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
                    <li>
                      Digitized manual processes by implementing a process
                      management schedule systems
                    </li>
                    <li>
                      Deployed a custom case management system and an automated
                      backup management system
                    </li>
                    <li>
                      Created a digitized record collection and reporting
                      implementation that replaced a previously fully manual
                      system of data collection
                    </li>
                    <li>
                      Achieved the creation of a development workflow from
                      design, implementation and testing of new internal
                      products
                    </li>
                  </ul>
                </div>
              </article>
              <article className="flex flex-col rounded-lg items-center space-y-12 md:space-y-7 flex-shrink-0 w-1/2 snap-start bg-[#292929] p-4 md:p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 tablet:w-2/4 mob:w-full mobs:w-full">
                <div className="px-2 md:px-10">
                  <h4 className="text-lg md:text-2xl lg:text-4xl font-light">
                    Full Stack Engineer (Consulting)
                  </h4>
                  <p className="font-bold text-lg md:text-2xl md:mt-1">
                    iSOFT Systems
                  </p>
                  <p className="uppercase py-3 md:py-5 text-gray-300">
                    August 2021 - Present
                  </p>
                  <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
                    <li>
                      Successfully developed, tested, and implemented a web
                      based learning information management system
                    </li>
                    <li>
                      Achieved integration with vendor solutions, enabling the
                      processing of mobile, electronic fund transfers, ensuring
                      100% move to paperless payment processing
                    </li>
                    <li>Building a document and report generating system</li>
                    <li>
                      Implementation and testing within budget and time
                      constraints by collaborating with the development team to
                      ensure efficient implementation
                    </li>
                  </ul>
                </div>
              </article>
              <article className="flex flex-col rounded-lg items-center space-y-12 md:space-y-7 flex-shrink-0 w-1/2 snap-start bg-[#292929] p-4 md:p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 tablet:w-2/4 mob:w-full mobs:w-full">
                <div className="px-2 md:px-10">
                  <h4 className="text-lg md:text-2xl lg:text-4xl font-light">
                    Backend Software Engineer
                  </h4>
                  <p className="font-bold text-lg md:text-2xl md:mt-1">
                    Businesscom Consulting Services
                  </p>
                  <p className="uppercase py-3 md:py-5 text-gray-300">
                    June 2021 - Sep 2021
                  </p>
                  <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
                    <li>
                      Developed a demand generation application, increasing
                      client acquisition.
                    </li>
                    <li>
                      Wrote over 20 scripts using playwright to scrap content
                      from different online website sources.
                    </li>
                    <li>
                      Enhanced search parameters, improving the accuracy of
                      in-house products.
                    </li>
                    <li>
                      Improve in-house products through research and
                      optimization efforts.
                    </li>
                    <li>
                      Troubleshoot and optimize automation, reliability, and
                      monitoring.
                    </li>
                  </ul>
                </div>
              </article>
              <article className="flex flex-col rounded-lg items-center space-y-12 md:space-y-7 flex-shrink-0 w-1/2 snap-start bg-[#292929] p-4 md:p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 tablet:w-2/4 mob:w-full mobs:w-full">
                <div className="px-2 md:px-10">
                  <h4 className="text-lg md:text-2xl lg:text-4xl font-light">
                    Software Development Engineer in Test (Intern)
                  </h4>
                  <p className="font-bold text-lg md:text-2xl md:mt-1">
                    Safaricom PLC
                  </p>
                  <p className="uppercase py-3 md:py-5 text-gray-300">
                    Feb 2022-Apr 2022
                  </p>
                  <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
                    <li>
                      Performed integration, unit, and functional testing,
                      ensuring the launch of a service management system with
                      high-quality standards
                    </li>
                    <li>
                      Reported on software and UI/UX testing results,
                      identifying and resolving critical issues while
                      collaborating with the development team, resulting in a
                      20% improvement in overall application stability.
                    </li>
                    <li>
                      Conduct manual and automated testing of web and mobile
                      applications
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div className="mt-10 tablet:ml-12 laptop:ml-11 laptopl:ml-11 mobs:ml-4">
          <h1 className="text-2xl font-bold">Skills</h1>
          <div className="mt-1">
            <div className="flex flex-col space-y-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 tablet:grid-cols-4">
                <div>
                  <p className="text-gray-300 font-bold">Programming Languages:</p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Dart (familiar)</li>
                  </ul>

                  <p className="text-gray-300 font-bold mt-4 ">Databases:</p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>SQL, Postgres</li>
                    <li>SQLite</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-300 font-bold">
                    Frameworks and technologies:
                  </p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>Django, FastAPI</li>
                    <li>Vue.js, React</li>
                    <li>Strapi, wordpress, Wagtail</li>
                    <li>Selenium, Scrapy</li>
                    <li>Docker, Kubernetes</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-300 font-bold">Cloud:</p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>Google Cloud Platform (GCP), Azure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 tablet:ml-12 laptop:ml-11 laptopl:ml-11 mobs:ml-4">
          <h1 className="text-2xl font-bold">Projects</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-8 max-w-12xl mx-auto lg:gap-x-20 mt-3">
              <div className="github-repo">
                <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  iSOFT Learning information Management System
                </h1>
                <p className="text-base font-normal my-4 text-gray-500">
                  A fullstack learning information management system built on django.
                </p>
                <a
                  href="https://isoft.azurewebsites.net/"
                  className="font-semibold group flex flex-row space-x-2 w-full items-center"
                >
                  <p>View App </p>
                  <div className="transform group-hover:translate-x-2 transition duration-300">
                    →
                  </div>
                </a>
              </div>
              <div className="github-repo">
                <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  whip-backend
                </h1>
                <p className="text-base font-normal my-4 text-gray-500">
                  A fastapi backend service that manages a land access management crud functionality
                </p>
                <a
                  href="https://github.com/agarjoshua/whip-backend"
                  className="font-semibold group flex flex-row space-x-2 w-full items-center"
                >
                  <p>View Repository </p>
                  <div className="transform group-hover:translate-x-2 transition duration-300">
                    →
                  </div>
                </a>
              </div>
              <div className="github-repo">
                <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  Provasi
                </h1>
                <p className="text-base font-normal my-4 text-gray-500">
                      A frontend realtor service built on vue.js that uses google maps to help map location of properties
                </p>
                <a
                  href="https://github.com/agarjoshua/provasi/"
                  className="font-semibold group flex flex-row space-x-2 w-full items-center"
                >
                  <p>View Repository </p>
                  <div className="transform group-hover:translate-x-2 transition duration-300">
                    →
                  </div>
                </a>
              </div>
              <div className="github-repo">
                <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
                  Porfolio Website
                </h1>
                <p className="text-base font-normal my-4 text-gray-500">
                      A fun project I'm currently working on to present a friends portfolio
                </p>
                <a
                  href="https://portfolio-ashen-five-61.vercel.app/"
                  className="font-semibold group flex flex-row space-x-2 w-full items-center"
                >
                  <p>View Repository </p>
                  <div className="transform group-hover:translate-x-2 transition duration-300">
                    →
                  </div>
                </a>
              </div>
            </div>
        </div>

        <div className="laptop:mt-3 p-2 laptop:p-0 tablet:ml-8 laptop:ml-10 laptopl:ml-10">
          <Footer />
        </div>
        <div className="laptop:mt-30 p-2 laptop:p-0 tablet:ml-8 laptop:ml-8 laptopl:ml-8">
          <Socials/>
        </div>
        
      </div>
    </div>
  );
}
