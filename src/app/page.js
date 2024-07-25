"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import main_pic_pc from "./../../public/home/main_pic_pc.jpg";
import logo_main from "../../public/home/logo_main.png";
import half_pic_1 from "../../public/home/half_pic_1.jpg";
import half_pic_2 from "../../public/home/half_pic_2.jpg";
import col_pic_1 from "../../public/home/col_pic_1.jpg";
import col_pic_2 from "../../public/home/col_pic_2.jpg";
import col_pic_3 from "../../public/home/col_pic_3.jpg";
import col2_pic_1 from "../../public/home/col2_pic_1.jpg";
import col2_pic_2 from "../../public/home/col2_pic_2.jpg";
import col2_pic_3 from "../../public/home/col2_pic_3.jpg";
import buttom_pic_pc from "../../public/home/buttom_pic_pc.jpg";
import gradient_logo from "../../public/home/gradient_logo.svg";
import Navbar from "./navbar";

const Main_sec = () => {
  const [textIndex, setTextIndex] = useState(0);
  function next() {
    if (textIndex > 8) setTextIndex(1);
    else setTextIndex(textIndex + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      next();
      console.log(textIndex);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <section>
      <div className="relative">
        <div>
          <picture>
            <source
              srcSet="./home/main_pic_mobile.jpg"
              media="(max-width:767.95px)"
            ></source>

            <Image alt="" src={main_pic_pc} width={0} height={0} />
          </picture>
        </div>
        <div className="md:absolute md:bg-transparent xl:pl-24 bg-[#161616] md:top-1/2 md:-translate-y-1/2 md:w-2/5 w-full h-max px-10 py-10 md:p-4">
          <div className="min-h-24 flex items-center ">
            <div
              className={
                textIndex === 1
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              "UFC 5 is a giant leap forward in MMA video games"
            </div>
            <div
              className={
                textIndex === 2
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              Bleacher Report
            </div>
            <div
              className={
                textIndex === 3
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              85/100 - "Frostbite looks fantastic in the ring."
            </div>
            <div
              className={
                textIndex === 4
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              "9/10 - It's the most complex EA Sports game, challenging but
              satisfying"
            </div>
            <div
              className={
                textIndex === 5
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              "UFC 5 is a giant leap forward in MMA video games"
            </div>
            <div
              className={
                textIndex === 6
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              Bleacher Report
            </div>
            <div
              className={
                textIndex === 7
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              "UFC 5 is a giant leap forward in MMA video games"
            </div>
            <div
              className={
                textIndex === 8
                  ? "carousel_text_show sm:text-lg font-druk_text_medium my-2"
                  : "carousel_text_hide"
              }
            >
              Bleacher Report
            </div>
          </div>
          <div className="w-10/12 md:w-full">
            <Image
              alt=""
              src={logo_main}
              width={0}
              height={0}
              className="py-2"
            />
          </div>
          <div className="md:text-2xl text-xl font-druk_text_medium my-2">
            EA SPORTS™ UFC® 5 Ultimate Edition
          </div>
          <div className="md:text-lg font-druk_text_medium my-2">
            Begin your UFC 5 journey with the Ultimate Edition, packed with more
            fighter content than ever, including Hall of Fame Alter Egos, 15
            newly rostered fighters, and more.
          </div>
          <div className="md:flex">
            <button className="bg-[#F04] m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105  rounded-3xl">
              <div>BUY NOW</div>
            </button>
            <button className="bg-transparent border-2 m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105  rounded-3xl">
              <div>BUY NOW</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
const Frostbite_sec = () => {
  return (
    <section>
      <div className="black_bg">
        <div className="h-max relative overflow-hidden">
          <div className=" text-white py-20 text-center md:px-20 px-10">
            <h1>Powered by Frostbite™</h1>
            <p>
              EA SPORTS™ UFC® 5 is the next evolution of the fight game.
              Experience unrivaled graphics upgrades, all-new damage systems,
              and more new features that affect gameplay in truly authentic
              fashion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
const HalfPic_sec = () => {
  return (
    <section>
      <div className="md:flex flex-row-reverse">
        <Image
          alt=""
          src={half_pic_1}
          width={0}
          height={0}
          className="md:w-1/2 h-full"
        />

        <div className="md:w-1/2 md:px-16 w-11/12 mx-auto">
          <h1 className="text-black">UFC 5 NEW ROSTERED FIGHTER RATINGS</h1>
          <p className="text-black">
            Check out EA SPORTS UFC 5's new rostered fighter ratings and prepare
            to dominate inside the Octagon.
          </p>
          <button className="bg-[#F04] m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105  rounded-3xl">
            <div>LEARN MORE</div>
          </button>
        </div>
      </div>
      <div className="md:flex">
        <Image
          alt=""
          src={half_pic_2}
          width={0}
          height={0}
          className="md:w-1/2 h-full"
        />

        <div className="md:w-1/2 md:px-16 w-11/12 mx-auto">
          <h1 className="text-black">Prime: European Elites Alter Egos</h1>
          <p className="text-black">
            Celebrate UFC 304 Fight Week with 4 new Alter Egos from Prime:
            European Elites.
          </p>
          <button className="bg-[#F04] m-2 w-full sm:max-w-44 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105  rounded-3xl">
            <div>SEE THE ALTER EGOS</div>
          </button>
        </div>
      </div>
    </section>
  );
};
const Col1_sec = () => {
  return (
    <section>
      <h1 className="text-black text-center pt-20 pb-8">LATEST NEWS</h1>
      <div className="md:flex md:px-20 xl:px-2 px-7 mx-auto max-w-[1120px]">
        <div className="md:px-3 md:w-1/3">
          <Image alt="" src={col_pic_1} width={0} height={0} className="" />
          <div>
            <h2 className="text-black">
              EA SPORTS UFC 5 Alter Ego Community Vote
            </h2>
            <p1 className="text-black md:text-base font-druk_text_medium my-2">
              Here's everything you need to know about voting for future Alter
              Egos in EA SPORTS UFC 5.
            </p1>
          </div>
        </div>
        <div className="md:px-3 md:w-1/3">
          <Image alt="" src={col_pic_2} width={0} height={0} className="" />
          <div>
            <h2 className="text-black">
              EA SPORTS UFC 5 Alter Ego Community Vote
            </h2>
            <p1 className="text-black md:text-base font-druk_text_medium my-2">
              Here's everything you need to know about voting for future Alter
              Egos in EA SPORTS UFC 5.
            </p1>
          </div>
        </div>
        <div className="md:px-3 md:w-1/3">
          <Image alt="" src={col_pic_3} width={0} height={0} className="" />
          <div>
            <h2 className="text-black">
              EA SPORTS UFC 5 Alter Ego Community Vote
            </h2>
            <p1 className="text-black md:text-base font-druk_text_medium my-2">
              Here's everything you need to know about voting for future Alter
              Egos in EA SPORTS UFC 5.
            </p1>
          </div>
        </div>
      </div>
      <div className="pt-20 mx-auto flex justify-center pb-32">
        <button className="bg-transparent text-black border-black border-2 m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105  rounded-3xl">
          <div>MORE NEWS</div>
        </button>
      </div>
    </section>
  );
};
const Col2_sec = () => {
  return (
    <section>
      <div className="md:flex md:px-20 xl:px-2 mx-auto max-w-[1120px]">
        <div className="md:px-3 md:w-1/3 py-3">
          <Image alt="" src={col2_pic_1} width={0} height={0} className="" />
          <div className="px-5 pb-8">
            <h2 className="text-black">
              EA SPORTS UFC 5 Alter Ego Community Vote
            </h2>
            <p1 className="text-black md:text-base font-druk_text_medium my-2">
              What makes an MMA fight? It's the stakes, technique, drama, and
              pure reality of the moment. UFC 5 captures that in more authentic
              detail than ever before, from next-generation graphics upgrades
              that give gameplay animations new life, damage systems that marry
              the brutality and strategy of the fight game, gameplay updates
              that make the action feel even more fluid and realistic, and much
              more.
            </p1>
          </div>
        </div>
        <div className="md:px-3 md:w-1/3 py-3">
          <Image alt="" src={col2_pic_2} width={0} height={0} className="" />
          <div className="px-5 pb-8">
            <h2 className="text-black">
              EA SPORTS UFC 5 Alter Ego Community Vote
            </h2>
            <p1 className="text-black md:text-base font-druk_text_medium my-2">
              What makes an MMA fight? It's the stakes, technique, drama, and
              pure reality of the moment. UFC 5 captures that in more authentic
              detail than ever before, from next-generation graphics upgrades
              that give gameplay animations new life, damage systems that marry
              the brutality and strategy of the fight game, gameplay updates
              that make the action feel even more fluid and realistic, and much
              more.
            </p1>
          </div>
        </div>
        <div className="md:px-3 md:w-1/3 py-3">
          <Image alt="" src={col2_pic_3} width={0} height={0} className="" />
          <div className="px-5 pb-8">
            <h2 className="text-black">
              EA SPORTS UFC 5 Alter Ego Community Vote
            </h2>
            <p1 className="text-black md:text-base font-druk_text_medium my-2">
              What makes an MMA fight? It's the stakes, technique, drama, and
              pure reality of the moment. UFC 5 captures that in more authentic
              detail than ever before, from next-generation graphics upgrades
              that give gameplay animations new life, damage systems that marry
              the brutality and strategy of the fight game, gameplay updates
              that make the action feel even more fluid and realistic, and much
              more.
            </p1>
          </div>
        </div>
      </div>
      <div className="py-20 mx-auto flex justify-center">
        <button className="bg-transparent text-black border-black border-2 m-2 w-full sm:w-max p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105 rounded-3xl">
          <div>NEW GAMEPLAY FEATURES</div>
        </button>
      </div>
    </section>
  );
};
const Bottum_pic_sec = () => {
  return (
    <section>
      <div className="relative max-h-[30rem] md:max-h-max overflow-hidden ">
        <picture>
          <source
            srcSet="./home/buttom_pic_mobile.jpg"
            media="(max-width:767.95px)"
          ></source>

          <Image alt="" src={buttom_pic_pc} width={0} height={0} className="" />
        </picture>

        <div className="absolute px-10 md:top-1/2 md:-translate-y-1/2 md:bottom-auto md:left-16 bottom-0 md:w-2/5">
          <p className="pb-0 mb-0 text-lg">
            EA SPORTS™ UFC® 5 Ultimate Edition
          </p>
          <p className="pt-0 mt-0">
            Get the Ultimate Edition and get multiple Alter Ego Bundles
            (including from Pride and Prime drops), 3 new Legends fighters, and
            more.
          </p>
          <button className="bg-white text-black border-2 m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105  rounded-3xl">
            <div>BUY NOW</div>
          </button>
        </div>
      </div>
    </section>
  );
};
const Gradient_sec = () => {
  return (
    <section className="pb-10 md:px-5">
      <div className="gradient_bg w-11/12 md:w-full mx-auto rounded-[3rem] mt-4 flex flex-col items-center py-10 px-10 text-center">
        <Image
          alt=""
          src={gradient_logo}
          width={0}
          height={0}
          className="w-10/12 my-2"
        />
        <div className="font-druk_wide_super uppercase lg:text-[27px] my-2">
          Try now for up to 10 hours!**
        </div>
        <button className="bg-[#ff4747] w-full sm:max-w-36 mt-5 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] md:hover:scale-105  rounded-3xl">
          <div>LEARN MORE</div>
        </button>
      </div>
    </section>
  );
};
const SocialMedia_sec = () => {
  return (
    <section>
      <div className="text-center py-10">
        <h1 className="text-black pb-5">FOLLOW US @EASPORTSUFC</h1>
        <div className="flex justify-center pb-5">
          <div className="border-r border-black p-10">
            <a className="text-black ease-in-out transition duration-300 cursor-pointer">
              <svg
                className="w-8 h-8 hover:scale-110 transition-all duration-100"
                fill="currentColor"
                viewBox="0 0 40 40"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3.623 6.972v4.9565H0v6.061h3.623V36h7.442V17.99h4.994s.4678-2.9062.6945-6.0838h-5.6603v-4.144c0-.6194.8114-1.4525 1.6134-1.4525h4.0548V0h-5.513C3.4388-.0004 3.6228 6.0664 3.6228 6.972z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="border-r border-black p-10">
            <a className="text-black ease-in-out transition duration-300 cursor-pointer">
              <svg
                className="w-8 h-8 hover:scale-110 transition-all duration-100"
                fill="currentColor"
                viewBox="0 0 60 62"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M35.7082 25.9642L58.0445 0H52.7515L33.3569 22.5444L17.8664 0H0L23.4246 34.091L0 61.3185H5.2933L25.7746 37.5109L42.1336 61.3185H60L35.7069 25.9642H35.7082ZM28.4582 34.3914L26.0849 30.9967L7.20055 3.98472H15.3307L30.5706 25.7843L32.944 29.1789L52.754 57.515H44.6238L28.4582 34.3927V34.3914Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div className="border-r border-black p-10">
            <a className="text-black ease-in-out transition duration-300 cursor-pointer">
              <svg
                className="w-8 h-8 hover:scale-110 transition-all duration-100"
                fill="currentColor"
                viewBox="0 0 192 192"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M180.32,53.36A22.12,22.12,0,0,0,164.76,37.7C151,34,96,34,96,34s-55,0-68.76,3.7A22.12,22.12,0,0,0,11.68,53.36C8,67.18,8,96,8,96s0,28.82,3.68,42.64A22.12,22.12,0,0,0,27.24,154.3C41,158,96,158,96,158s55,0,68.76-3.7a22.12,22.12,0,0,0,15.56-15.66C184,124.82,184,96,184,96S184,67.18,180.32,53.36Z"
                  clipRule="evenodd"
                ></path>
                <polygon
                  fill="#fff"
                  stroke="none"
                  points="78 122.17 124 96 78 69.83 78 122.17"
                ></polygon>
              </svg>
            </a>
          </div>

          <div className="p-10">
            <a className="text-black ease-in-out transition duration-300 cursor-pointer">
              <svg
                className="w-8 h-8 hover:scale-110 transition-all duration-100"
                fill="currentColor"
                viewBox="0 0 40 40"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 0c-4.8885 0-5.5015.0207-7.4214.1083C8.6626.1957 7.3542.5 6.2093.945c-1.1836.46-2.1875 1.0754-3.1882 2.076C2.0205 4.022 1.405 5.0258.945 6.2094.5 7.3543.1957 8.6627.1083 10.5786.0207 12.4986 0 13.1116 0 18c0 4.8885.0207 5.5015.1083 7.4214.0874 1.916.3917 3.2244.8367 4.3693.46 1.1836 1.0754 2.1875 2.076 3.1882 1.0008 1.0006 2.0047 1.616 3.1883 2.076 1.145.445 2.4534.7493 4.3693.8367 1.92.0876 2.533.1083 7.4214.1083 4.8885 0 5.5015-.0207 7.4214-.1083 1.916-.0874 3.2244-.3917 4.3693-.8366 1.1836-.46 2.1875-1.0754 3.1882-2.076 1.0006-1.0008 1.616-2.0047 2.076-3.1883.445-1.145.7493-2.4534.8367-4.3693.0876-1.92.1083-2.533.1083-7.4214 0-4.8885-.0207-5.5015-.1083-7.4214-.0874-1.916-.3917-3.2244-.8366-4.3693-.46-1.1836-1.0754-2.1875-2.076-3.1882-1.0008-1.0006-2.0047-1.616-3.1883-2.076C28.6457.5 27.3373.1957 25.4214.1083 23.5014.0207 22.8884 0 18 0zm0 3.2432c4.8062 0 5.3755.0184 7.2735.105 1.755.08 2.708.3733 3.3424.6198.84.3265 1.4397.7165 2.0695 1.3465.63.6298 1.02 1.2294 1.3465 2.0696.2465.6344.5398 1.5875.6198 3.3425.0866 1.898.105 2.4673.105 7.2735 0 4.8062-.0184 5.3755-.105 7.2735-.08 1.755-.3733 2.708-.6198 3.3424-.3265.84-.7165 1.4397-1.3465 2.0695-.6298.63-1.2294 1.02-2.0696 1.3465-.6344.2465-1.5875.5398-3.3425.6198-1.8977.0866-2.467.105-7.2735.105-4.8066 0-5.3757-.0184-7.2735-.105-1.755-.08-2.708-.3733-3.3424-.6198-.84-.3265-1.4397-.7165-2.0695-1.3465-.63-.6298-1.02-1.2294-1.3465-2.0696-.2465-.6344-.5398-1.5875-.6198-3.3425-.0866-1.898-.105-2.4673-.105-7.2735 0-4.8062.0184-5.3755.105-7.2735.08-1.755.3733-2.708.6198-3.3424.3265-.84.7165-1.4397 1.3465-2.0695.6298-.63 1.2294-1.02 2.0696-1.3465.6344-.2465 1.5875-.5398 3.3425-.6198 1.898-.0866 2.4673-.105 7.2735-.105zm-.1297 5.4098c-5.0843 0-9.206 4.1216-9.206 9.206 0 5.0843 4.1217 9.206 9.206 9.206s9.206-4.1217 9.206-9.206c0-5.0844-4.1217-9.206-9.206-9.206zm0 15.1817c-3.3003 0-5.9758-2.6754-5.9758-5.9757 0-3.3004 2.6755-5.9758 5.9758-5.9758 3.3003 0 5.9758 2.6754 5.9758 5.9758 0 3.3003-2.6754 5.9757-5.9757 5.9757zM29.7838 8.3823c0-1.1963-.9698-2.166-2.166-2.166-1.1963 0-2.1662.9697-2.1662 2.166s.97 2.166 2.166 2.166c1.1964 0 2.1662-.9697 2.1662-2.166z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <p className="text-black">
          <a href="#" className="text-[#F04]">
            Sign-up for our newsletter{" "}
          </a>
          to be the first to know about new updates.
        </p>
      </div>
    </section>
  );
};
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="fixed_bg">
        <Main_sec />
        <Frostbite_sec />
        <HalfPic_sec />
        <Col1_sec />
        <Col2_sec />
        <Bottum_pic_sec />
        <Gradient_sec />
        <SocialMedia_sec />
      </div>
    </main>
  );
}
