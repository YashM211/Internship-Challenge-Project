import { assets } from "../assets/assets";
import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);
  const container6 = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.from(".hero-contaienr .left", {
  //       y: 390,
  //       duration: 1.4,
  //       opacity: 0,
  //     });
  //     gsap.from(".hero-contaienr .right", {
  //       y: 390,
  //       duration: 1.4,
  //       opacity: 0,
  //     });
  //   },
  //   { scope: container1 }
  // );

  // useGSAP(
  //   () => {
  //     gsap.from(container2.current, {
  //       y: 200,
  //       duration: 1.4,
  //       stagger: 0.3,
  //       delay: 0.5,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: "body",
  //         start: "22% 93%",
  //         end: "30% 90%",
  //         scrub: true,
  //         yoyo: true,
  //       },
  //     });
  //   },
  //   { scope: container2 }
  // );
  // useGSAP(
  //   () => {
  //     gsap.from(".left", {
  //       x: -200,
  //       duration: 1.4,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: "body",
  //         start: "28% 93%",
  //         end: "38% 90%",
  //         scrub: true,
  //         yoyo: true,
  //       },
  //     });
  //     gsap.from(".right", {
  //       x: 200,
  //       duration: 1.4,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: "body",
  //         start: "30% 93%",
  //         end: "35% 90%",
  //         scrub: true,
  //         yoyo: true,
  //       },
  //     });
  //   },
  //   { scope: container3 }
  // );

  // useGSAP(
  //   () => {
  //     gsap.from(container4.current, {
  //       x: -200,
  //       duration: 1.4,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: "body",
  //         start: "86% 93%",
  //         end: "98% 90%",
  //         scrub: true,
  //         yoyo: true,
  //       },
  //     });
  //   },
  //   { scope: container4 }
  // );
  // useGSAP(
  //   () => {
  //     gsap.from(container5.current, {
  //       x: 200,
  //       duration: 1.4,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: "body",
  //         start: "65% 93%",
  //         end: "75% 90%",
  //         scrub: true,
  //         yoyo: true,
  //       },
  //     });
  //   },
  //   { scope: container5 }
  // );
  // useGSAP(
  //   () => {
  //     gsap.from(container6.current, {
  //       x: -400,
  //       duration: 1.4,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: "body",
  //         start: "40% 93%",
  //         end: "60% 90%",
  //         scrub: true,
  //         yoyo: true,
  //       },
  //     });
  //   },
  //   { scope: container6 }
  // );

  const features = [
    {
      imgSrc: assets.img9,
      title: "Light Weight",
      description: "Motion Art for Elementor is designed to be lightweight.",
    },
    {
      imgSrc: assets.img6,
      title: "100% Responsive",
      description: "Create a consistent visual experience across all devices.",
    },
    {
      imgSrc: assets.img7,
      title: "User Friendly Interface",
      description:
        "Ensure a smooth experience for both applicants and administrators.",
    },
  ];

  return (
    <div className="   max-w-screen-xl mx-auto px-3 overflow-hidden pt-12">
      <div className=" header flex justify-between pt-9 items-center">
        <a href="">
          <img
            className=" sm:w-full w-10/12"
            loading="lazy"
            src={assets.logo}
            alt="motion art logo"
          />
        </a>
        <div className="bg-white text-black px-8 py-3 font-outfit rounded-lg h-fit border-2 z-10 border-white hover:text-white hover:bg-transparent text-[18px] cursor-pointer">
          <a
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            target="_blank"
          >
            Purchase Now
          </a>
        </div>
      </div>

      <div
        ref={container1}
        className="  hero-contaienr overflow-hidden grid grid-cols-1 md:grid-cols-12 max-w-7xl  py-20 px-3 mt-4 gap-4 justify-items-center sm:justify-items-start sm:text-start text-center"
      >
        <div className=" left md:col-span-3 items-start">
          <p className=" bg-clip-text text-transparent font-outfit bg-gradient1 text-xl font-medium mb-3">
            Transform <br />
            <span className=" bg-clip-text text-transparent font-outfit bg-gradient1 text-xl font-medium">
              Your Website
            </span>
          </p>
          <span className=" font-sora  sm:max-w-36 block">
            With Motion Art Effect
          </span>
        </div>
        <div className="flex flex-col wrap justify-center h-[451px] w-[675.45px]  wrap font-outfit text-xl right md:col-span-6">
          <span className=" flex justify-around mr-[5px]   text-[65px] leading-[85px] font-medium text-[#EEE5FF]  font-sora    ">
            Attract Your Visitors Attention With Colorful
          </span>
          {/* <br /> */}
          <span className="text-[65px] leading-[85px] bg-clip-text text-transparent bg-gradient1 font-sora font-medium">
            Motion Art Effect
          </span>
          <br />
          <p className="wrap text-[18px] leading-[1.6em] inline- h-[86.4px] w-[575.84px] text-zinc-400">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </p>
        </div>
        <div className=" md:col-span-2"></div>
      </div>

      <div className=" rating">
        <h3 className=" text-zinc-300 text-xl text-center">
          Trusted by thousands of users around the world
        </h3>
        <div
          ref={container2}
          className=" overflow-hidden flex lg:gap-24 gap-10 pt-12 flex-wrap lg:justify-between justify-center"
        >
          {[
            { img: assets.img2, score: "4.5 Score, 9 Reviews" },
            { img: assets.img1, score: "4.5 Score, 9 Reviews" },
            { img: assets.img3, score: "4.5 Score, 9 Reviews" },
          ].map((item, index) => (
            <div key={index} className=" flex items-center gap-3">
              <img loading="lazy" src={item.img} alt="" />
              <div>
                <img loading="lazy" src={assets.img4} alt="" />
                <p className=" mt-4 text-zinc-400">{item.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={container3}
        className=" cursor-magic grid grid-cols-1 md:grid-cols-5 gap-10 pt-28 justify-items-center md:justify-items-end sm:text-start text-center"
      >
        <div className=" md:col-span-3">
          <div className=" left">
            <h2>
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className=" text-zinc-400 my-5">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse your website with visually stunning
              motion art elements.
            </p>
            <a
              className=" px-6 py-4 rounded-2xl bg-gradient-to-r text-xl inline-block "
              href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
              target="_blank"
            >
              Purchase From Envato{" "}
              <span className=" inline-block ml-3">&rarr;</span>
            </a>
          </div>
        </div>
        <div className=" md:col-span-2 right">
          <img loading="lazy" src={assets.img5} alt="" />
        </div>
      </div>

      <div ref={container6} className=" apply pt-28">
        <h2 className=" text-center max-w-2xl mx-auto">
          Apply On Any Section Or Enable For Whole Page
        </h2>
        <div className=" flex gap-4 flex-wrap sm:flex-nowrap mt-14">
          {[
            {
              title: "Apply On Section",
              description:
                "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.",
              imgSrc: assets.img11,
              extraClass: "",
            },
            {
              title: "Apply On Page",
              description:
                "Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.",
              imgSrc: assets.img10,
              extraClass: "sm:mt-20",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-gradient3 border-2 border-[#251E35] rounded-3xl p-8 max-w-[610px] h-fit ${item.extraClass}`}
            >
              <h2 className=" text-2xl">{item.title}</h2>
              <p className=" text-zinc-400 my-5 leading-[30px]">
                {item.description}
              </p>
              <img
                loading="lazy"
                className=" max-w-full h-auto"
                src={item.imgSrc}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={container5}
        className=" browser bg-gradient3 border-2 border-[#251E35] rounded-3xl sm:mt-32 mt-6 px-10 py-12"
      >
        <div className=" max-w-[460px] mx-auto text-center">
          <h2>Supported by All Popular Browsers</h2>
          <p className=" my-6 text-zinc-400">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
          <img loading="lazy" src={assets.img8} alt="" />
        </div>
      </div>

      <div ref={container4} className=" apply my-28">
        <div className=" text-center max-w-2xl mx-auto">
          <h2>An All-Round Plugin With Powerful Features</h2>
          <p className=" text-zinc-400 mt-3">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className=" flex justify-center gap-8 mt-14 flex-wrap sm:flex-nowrap">
          {features.map((item, index) => (
            <div
              key={index}
              className=" feature bg-gradient3 border-2 border-[#251E35] rounded-3xl sm:max-w-[400px] w-full"
            >
              <img loading="lazy" src={item.imgSrc} alt={item.title} />
              <h2 className=" px-9 pt-6 mb-3">{item.title}</h2>
              <p className=" px-9 pb-10 text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
