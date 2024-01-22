import type { MetaFunction } from "@remix-run/node";
import {useLayoutEffect, useState, useCallback} from 'react'
import logo from '../images/logo.png'
import slider from '../images/right/slider-1.jpeg'
import gallery1 from '../images/right/gallery-1.jpeg'
import gallery2 from '../images/right/gallery-2.jpeg'
import gallery3 from '../images/right/gallery-3.jpeg'
import blink from '../images/blink.gif'
import sideThing from '../images/svgs/sidethings.svg'
import mailBox from '../images/svgs/mailbox.svg'
import rightIcon from '../images/svgs/rightIcon.svg'

import instagram from '../images/svgs/instagram.svg'
import facebook from '../images/svgs/facebook.svg'
import twitter from '../images/svgs/twitter.svg'

export const meta: MetaFunction = () => {
  return [
    { title: "Lorendzo photography" },
    { name: "description", content: "lorendzo photgraphy" },
  ];
};

export default function Index() {

  const [img, setImg] = useState('')

  const getImg = useCallback(() => {
    const coin = Math.floor(Math.random() * (3 - 1)) + 1;

    console.log(coin)
    if(coin === 1){
      setImg(gallery2)
    } else if(coin == 2){
      setImg(gallery3)
    } else {
      setImg(gallery1)
    }
  }, [])

  useLayoutEffect(() => {
    getImg()
  },[getImg, img])

  return (
    <div className="container mx-auto h-screen">
      <div className="flex flex-row justify-center mx-auto">
        <div className="basis-1/3 h-screen flex flex-col justify-between">
          <div className="relative flex flex-col h-5/6 items-center ">
            <div className="absolute top-0 left-0 flex flex-row  p-0">
              <img src={sideThing} alt="" />
              <img src={blink} alt="" className="h-40" />
            </div>
            <section className="p-0">
              {/* logo section */}
              <img src={logo} alt="" className="h-80  align-baseline" />
            </section>
            <section className="py-8">
              <h1 className="text-5xl uppercase font-semibold">Coming soon!</h1>
            </section>
            <section className="w-full flex flex-col items-center  px-14">
              <p className="text-gray-400 py-4">want to be notified when it's live?</p>
              <div className="relative flex h-12 w-full">
                <button
                  className="!absolute font-semibold right-1 top-1 z-10 select-none rounded bg-slate-950 py-2 px-4 text-center align-middle text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Get notified
                </button>
                <input
                  type="email"
                  className="peer h-full min-w-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="Enter your email"
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  {/* Email Address */}
                </label>
              </div>
            </section>

            <div className="pt-8 flex flex-col items-center">
              <p className="text-gray-400">Contact us</p>
              <div className="pt-2 flex justify-center gap-2">
                <img src={instagram} alt="" onClick={() => window.open('https://www.instagram.com/lorendzophotography?igsh=bzJ2OHR4ZzY2OTJx', '_blank', 'noreferrer')} />
                <img src={twitter} alt="" onClick={() => window.open('https://x.com/lorendzo?s=21', '_blank', 'noreferrer')} />
                <img src={facebook} alt="" onClick={() => window.open('https://www.instagram.com/lorendzophotography?igsh=bzJ2OHR4ZzY2OTJx', '_blank', 'noreferrer')} />
              </div>
            </div>
          </div>
          <div className="flex pb-16">
            <img src={mailBox} alt="" className="pr-2" /> booking@lorendzo.africa
          </div>
        </div>
        <div className="basis-2/3 min-h-screen flex items-center">
          <div className="flex flex-row h-5/6 items-center">
            <section className="basis-2/5 h-full">
              <img src={img} alt="welcome to the site" className="w-full h-full object-cover object-center shadow-xl" />
            </section>
            <section className="flex flex-col justify-center p-6 relative">
              <img src={rightIcon} alt="" className="h-8 absolute right-0 top-0" />
              <img src={gallery1} alt="" className="h-56 py-2" />
              <img src={gallery2} alt="" className="h-56 py-2" />
              <img src={gallery1} alt="" className="h-56 py-2" />
            </section>
          </div>
          <img src={sideThing} alt="side thing" className="self-end	py-8 pb-16"/>
        </div>
      </div>
    </div>
  );
}
