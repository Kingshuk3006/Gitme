import { SvgButton } from "../styles/Mui-styles/HoverFillButton";
// import Particles from "react-particles-js";
// import { Particles } from "tsparticles";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home({ data, data2 }) {
  console.log(data2);
  const [userId, setUserId] = useState(false);
  const { data: session, status } = useSession();
  const [uid, setUid] = useState(null);
  const [username, setUsername] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const [repo, setRepo] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  const router = useRouter();

  const addNewUser = async () => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(doc(db, "users", uid), {
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        username: username,
        userID: uid,
        repos: repo,
        followers: followers,
        following: following,
      });
    } else {
      setUserExists(true);
    }
  };

  // const getData = async ()=>{
  //   const res = await fetch(`https://f1p3gk74yh.execute-api.us-west-2.amazonaws.com`)

  //   const data = await res.json()

  //   console.log(data)
  // }

  // getData()

  useEffect(() => {
    if (session && status === "authenticated") {
      const id = session?.user?.image.substring(40, 48);
      let temp = session?.user?.image
        .substring(40, 48)
        .concat(`_${session?.user?.name}`.split(" ").join(""));
      setUid(temp);
      setUserId(id);
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

    setUsername(data?.login);
    setFollowers(data?.followers);
    setFollowing(data?.following);
    setRepo(data?.public_repos);
  };

  if (session && userId && username && uid) {
    addNewUser();
  }

  return (
    <div className="bg-bgHero xl:h-screen h-fit font-syncopate text-white space-y-8 px-4 pb-8">
      <Navbar session={session} status={status} />
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
        <Link href={userExists ? "/repositories" : "/auth/signin"}>
          <button className="btn-5 px-6 py-3 md:text-xl text-base">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://f1p3gk74yh.execute-api.us-west-2.amazonaws.com"
  );

  // console.log(res)

  // // const res2 = res.trim()
  // let data = null
  // if(res){
  //   data = JSON.parse(res.output[0])
  // }

  const data = await res.json();

  return {
    props: {
      data: { hello: "hello" },
      data2: data,
    },
  };
};
