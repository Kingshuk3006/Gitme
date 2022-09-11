import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Sidebar from "../../components/sidebar";
import Repocard from "../../components/Repocard";
import LowerNav from "../../components/LowerNav";
import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

const Profile = () => {
  // const [userId, setUserId] = useState(false);

  const { data: session, status } = useSession();
  const [uid, setUid] = useState(null);
  const [userData, setUserdata] = useState(null);
  const [username, setUsername] = useState(null);
  const [repo, setRepo] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const userId = router.query.uid

  console.log(userId, "profile page")
  const active = router.pathname;

  useEffect(() => {
    if (uid) {
      getUserData();
    }
  }, [router.isReady]);

  useEffect(() => {
    if (session && status === "authenticated") {
      // const id = session?.user?.image.substring(40, 48);
      let temp = session?.user?.image
        .substring(40, 48)
        .concat(`_${session?.user?.name}`.split(" ").join(""));
      setUid(temp);
      if (userId) {
        getUsername();
      }
      // router.push('/repositories')
    }
  }, [session, status]);

  const getUsername = async () => {
    const res = await fetch(`https://api.github.com/user/${userId}`, {
      headers: { Authorization: "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" },
    });

    const data = await res.json();
    setFollowers(data?.followers);
    setFollowing(data?.following);
    setRepo(data?.public_repos);
  };

  const getUserData = async () => {
    setLoading(true);
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    setUserdata(userSnap.data());
    setLoading(false);
  };

  return (
    <div className="bg-bgDashboard min-h-screen font-Ralweay_medium">
      <Navbar session={session} status={status} />
      <div className="xl:mx-24 lg:mx-12 md:mx-16 sm:mx-8 mx-4 grid lg:grid-cols-5 gris-cols-1 justify-between gap-8">
        <div className="hidden lg:block">
          <Sidebar active={active}/>
        </div>

        <div className="px-4 col-span-3 space-y-8">
          <div className="space-y-6">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl ">
              Bookmarked Repositories
            </h1>
            <div>
              <Repocard />
            </div>
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center"> 
          <CircularProgress />
          </div>
        ) : (
          <div className="hidden lg:block space-y-6">
            <div className="flex flex-col justify-center items-center space-y-2">
              <img
                src={userData?.image}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <section className="space-y-1">
                <h1 className="text-white text-xl whitespace-nowrap">
                  {userData?.name}
                </h1>
                <Link href={`github.com/${username}`}>
                  <h1 className="text-grey text-center flex justify-center items-center">
                    <AiOutlineLink className="text-grey mr-2" />{" "}
                    {userData?.username}
                  </h1>
                </Link>
              </section>
            </div>
            {/* <div className="relative">
            <img src="/circle.png" className="min-w-[18rem] mx-auto" />
            <div className="flex flex-col justify-center items-center space-y-2 text-black font-syncopate absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <h1 className="text-xs">Contributions</h1>
              <h1 className="text-2xl">300</h1>
            </div>
          </div> */}
            <div className="flex justify-center space-x-4">
              <section className="flex flex-col justify-center items-center">
                <h1 className="text-center h-12 flex justify-center items-center text-white text-base">
                 
                  Repositories
                </h1>
                <h1 className="text-2xl text-white">{userData?.repos}</h1>
              </section>
              <section className="flex flex-col justify-center items-center">
                <h1 className="text-center h-12 flex justify-center items-center text-white text-base">
                  Followers
                </h1>
                <h1 className="text-2xl text-white">{userData?.followers}</h1>
              </section>
              <section className="flex flex-col justify-center items-center">
                <h1 className="text-center h-12 flex justify-center items-center text-white text-base">
                  Following
                </h1>
                <h1 className="text-2xl text-white">{userData?.following}</h1>
              </section>
            </div>
          </div>
        )}
      </div>
      <div className="lg:hidden">
        <LowerNav active={active} />
      </div>
    </div>
  );
};

export default Profile;
