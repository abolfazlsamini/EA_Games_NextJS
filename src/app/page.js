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
            <button className="bg-[#F04] m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] sm:hover:scale-105 rounded-3xl">
              <div>BUY NOW</div>
            </button>
            <button className="bg-transparent border-2 m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] sm:hover:scale-105 rounded-3xl">
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
          <button className="bg-[#F04] m-2 w-full sm:max-w-36 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] sm:hover:scale-105 rounded-3xl">
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
          <button className="bg-[#F04] m-2 w-full sm:max-w-44 p-5 py-3 sm:text-lg font-druk_text_medium hover:scale-[102%] sm:hover:scale-105 rounded-3xl">
            <div>SEE THE ALTER EGOS</div>
          </button>
        </div>
      </div>
    </section>
  );
};
const COl1_sec = () => {
  return (
    <section>
      <h1 className="text-black text-center pt-20">LATEST NEWS</h1>
      <div className="md:flex">
        <div>
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
        <div>
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
        <div>
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
      </div>
    </section>
  );
};
export default function Home() {
  return (
    <main className="">
      <div className="fixed_bg">
        <Main_sec />
        <Frostbite_sec />
        <HalfPic_sec />
        <COl1_sec />
      </div>
    </main>
  );
}
