import { SvgButton } from "../styles/Mui-styles/HoverFillButton";

export default function Home() {
  return (
    <div className="bg-bgHero xl:h-screen h-fit font-syncopate text-white space-y-8 px-4 pb-8">
      <nav className="flex justify-between px-8 py-8 ">
        <img src="/logo.svg" className="w-28" />
        <div className="text-center">
        <button className="btn-5 px-4 py-2 md:text-xl text-sm">sign in</button>
      </div>
      </nav>
      <div className="">
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-center">
          Looking for repo to contribute?
        </h1>
        <h1 className="font-cascade bg-clip-text md:text-4xl my-8 bg-gradient-to-b from-[#FFFFFF] to-[#00FFF0] text-transparent text-lg text-center">
          Try our recommmendation System
        </h1>
      </div>
      <div className="">
        <img src="/heroimage.png" className="mx-auto w-[30rem]" />
      </div>
      <div className="text-center">
        <button className="btn-5 px-6 py-3 md:text-xl text-base">Get Started</button>
      </div>
    </div>
  );
}
