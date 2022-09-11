import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { VscIssues } from "react-icons/vsc";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiGitPullRequest, BiGitRepoForked } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";

const Repocard = ({
  contributors,
  forkCount,
  issueCount,
  pullRequest,
  repositories,
  starCount,
}) => {

  
  return (
    <div className="bg-inputBG md:p-8 p-4 text-white rounded-xl relative">
      <div className="space-y-6 pb-14 lg:pb-0">
        <section className="flex justify-start items-center space-x-6 text-white">
          <h1 className="font-Ralweay_bold text-white xl:text-3xl lg:text-2xl text-2xl">
            {repositories}
          </h1>
          <section className="flex justify-start space-x-2 text-grey">
            <AiOutlineStar className="text-2xl" />
            {starCount}
          </section>
        </section>
        <section className="text-grey flex lg:flex-col  items-end lg:space-y-2 space-x-2 lg:space-x-0 absolute lg:top-0 lg:right-8 bottom-4 left-4">
          {/* <h1 className="font-Ralweay_thin">13th Aug 2022</h1> */}
          <BsBookmark className="font-Ralweay_bold hover:text-white text-2xl" onClick={handleBookmark}/>
        </section>
        <button className="bg-green px-4 py-2 rounded-xl text-white absolute bottom-8  md:right-8 right-4 ">
          See info
        </button>

        <div className="flex flex-wrap justify-start gap-6 w-[70%]">
          <section className="flex justify-start space-x-2 items-center relative pt-6 pr-6 w-fit">
            <VscIssues className="text-2xl" />
            <h1 className="text-xl font-Ralweay_thin">Issues</h1>
            <span className="bg-[#b23610d7] rounded-full w-8 h-8 flex justify-center items-center font-Ralweay_bold absolute top-1 right-0 animate-pulse">
              {issueCount}
            </span>
          </section>
          <section className="flex justify-start space-x-2 items-center relative pt-6 pr-6 w-fit">
            <BiGitPullRequest className="text-2xl" />
            <h1 className="text-xl font-Ralweay_thin">Pull Requests</h1>
            <span className="bg-green rounded-full w-8 h-8 flex justify-center items-center font-Ralweay_bold absolute top-1 right-0 animate-pulse">
              {pullRequest}
            </span>
          </section>
          <section className="flex justify-start space-x-2 items-center relative pt-6 pr-6 w-fit">
            <BiGitRepoForked className="text-2xl" />
            <h1 className="text-xl font-Ralweay_thin">Forks</h1>
            <span className="bg-[#dcdf0688] rounded-full w-8 h-8 flex justify-center items-center font-Ralweay_bold absolute top-1 right-0 animate-pulse">
             {forkCount}
            </span>
          </section>
          <section className="flex justify-start space-x-2 items-center relative pt-6 pr-6 w-fit">
            <HiOutlineUserGroup className="text-2xl" />
            <h1 className="text-xl font-Ralweay_thin">Contributors</h1>
            <span className="bg-[#238401] rounded-full w-8 h-8 flex justify-center items-center font-Ralweay_bold absolute top-1 right-0 animate-pulse">
              {contributors}
            </span>
          </section>
        </div>
        {/* <div>
          <section className="flex justify-start space-x-2 text-xl mb-2">
            <img src="/search.svg" />
            <h1>Languages</h1>
          </section>
          <section className="flex justify-start space-x-4 items-center relative w-fit pb-4">
            <h1>python</h1>
            <div className="relative">
              <div className="w-[15rem] h-fit p-0.5 bg-white rounded-full "></div>
              <div className=" p-0.5 bg-red-500 w-32 top-0 left-0 z-50 absolute rounded-full"></div>
            </div>
            <h1 className="absolute text-grey right-0 bottom-0 text-sm">65%</h1>
          </section>
        </div> */}
      </div>
    </div>
  );
};

export default Repocard;
