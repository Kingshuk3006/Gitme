import React from "react";
import { BsGithub } from "react-icons/bs";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";


const login = ({ providers }) => {
    // console.log(providers)
  return (
    <div className="min-h-screen bg-bgDashboard relative">
      <div className="max-w-[1280px] xl:mx-auto lg:mx-16 md:mx-8 mx-8 py-8">
        <div className="md:grid-cols-2 grid grid-cols-1 justify-items-center place-items-center my-8 gap-8">
          <div>
            <button
              className="bg-transparent border border-green rounded-full flex md:space-x-8 space-x-4 text-lg  text-white px-4 py-3 md:text-2xl items-center hover:bg-[#00000057] duration-150"
              onClick={() =>
                signIntoProvider(providers.github.id, { callbackUrl: "/" })
              }
            >
              <BsGithub className="text-green text-3xl" />
              <span>Login with</span>
              <span className="text-green">Github</span>
            </button>
          </div>
          <div className="">{/* <img src="/images/artist.png" /> */}</div>
        </div>
      </div>
      {/* <img src="/images/effect.png" className='absolute top-0 right-0 -z-30'/> */}
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers: providers,
    },
  };
}

export default login;
