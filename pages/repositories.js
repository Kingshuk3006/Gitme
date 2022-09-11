import React, { useState } from "react";

import Repocard from "../components/Repocard";
import Sidebar from "../components/sidebar";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";
import { language } from "../languages";
import { GoSearch } from "react-icons/go";
import LowerNav from "../components/LowerNav";
import axios from "axios";
const Dashboard = () => {
  const { data: session, status } = useSession();
  const [languageinput, setLanguageinput] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [allData, setAllData] = useState(null);

  console.log(languageinput, sortBy);
  const router = useRouter();
  const active = router.pathname;
  // console.log(session)

  const handleSearch = async () => {
    console.log(languageinput, sortBy);
    const url = `https://f1p3gk74yh.execute-api.us-west-2.amazonaws.com/recommend?language=${languageinput}&sortby=${sortBy}`;
    console.log(url);
    try {
      const response = await fetch(url);
      console.log(response);

      const data = await response.json();

      setAllData(data);
    } catch (e) {
      console.log(e);
    }

    // console.log(response);

    // const data = await response.json()

    // setAllData(data);
  };

  console.log(allData);

  const handleValidateSearch = () => {
    if (languageinput && sortBy) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="bg-bgDashboard bg-no-repeat bg-cover min-h-screen font-Ralweay_medium">
      <Navbar session={session} status={status} />
      <div className="xl:mx-24 lg:mx-12 md:mx-16 sm:mx-8 mx-4 grid lg:grid-cols-5 justify-between gap-8 pb-20">
        <div className="lg:block hidden">
          <Sidebar active={active} />
        </div>
        <div className="w-full pt-4 space-y-8 col-span-4">
          <section className="grid lg:grid-cols-2 grid-cols-1 child:w-full gap-4">
            <section>
              <h1 className="font-Ralweay_bold text-white text-4xl">
                Repositories
              </h1>
              <h1 className="font-Ralweay_thin font-thin text-grey text-xl">
                See your suitable Repositories Here
              </h1>
            </section>
            <section className="flex flex-col md:flex-row justify-between lg:space-x-2 space-y-2 lg:space-y-0 items-center child:h-fit">
              <select
                className="bg-inputBG px-6 py-4 rounded-md child:text-white  focus:outline-none lg:w-1/2 text-white w-full"
                onChange={(e) => setLanguageinput(e.target.value)}
              >
                <option>Select Language</option>
                {language.map((data) => {
                  return (
                    <option key={data.key} value={data.name}>
                      {data.name}
                    </option>
                  );
                })}
              </select>
              <select
                className="bg-inputBG px-6 py-4 rounded-md child:text-white  focus:outline-none lg:w-1/2 text-white w-full"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option>Sort By</option>
                <option value="stars_count">Stars Count</option>
                <option value="forks_count">Forks Count</option>
                <option value="issues_count">Issue Count</option>
                <option value="'contributors">Contributors</option>
              </select>
              {handleValidateSearch() ? (
                <GoSearch
                  className="text-3xl text-grey cursor-pointer"
                  onClick={handleSearch}
                />
              ) : (
                <div className="">
                  <GoSearch className="text-3xl text-grey cursor-not-allowed" />
                </div>
              )}
            </section>
          </section>
          {languageinput && sortBy ? (
            <div className="space-y-4">
              {allData?.map((data, i) => {
                return (
                  <Repocard
                  key={i}
                    contributors={data.contributors}
                    forkCount={data.forks_count}
                    issueCount={data.issues_count}
                    pullRequest={data.pull_requests}
                    repositories={data.repositories}
                    starCount={data.stars_count}
                  />
                );
              })}
            </div>
          ) : (
            <div className="text-2xl text-white flex justify-center items-center h-[50vh]">
              *Enter Language and Sort
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden">
        <LowerNav active={active} />
      </div>
    </div>
  );
};

export default Dashboard;
