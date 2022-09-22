import useRouter from "next/router";
import Link from "next/link";
import { providers, getSession } from "next-auth/react";

function Login({ providers, session }) {
  return (
    <div class="bg-gradient-to-r from-sky-500 to-blue-500">
      <form
        class="flex justify-center items-center max-w-md mx-auto h-screen overflow-hidden md:max-w-2xl"
        action="submit"
        method="GET"
      >
        <div class="rounded-xl shadow-xl border h-14rem w-full p-10 overflow-hidden bg-white sm:px-8">
          <div class="">
            <h1 class="md:text-4xl font-bold text-center mb-20 sm:text-3xl">
              Acute Catering & Projects
            </h1>
          </div>
          <div class="mb-4">
            <label class="block font-bold text-xl mb-2" for="uname">
              Username
            </label>
            <input
              class="w-full shadow appearance-none border rounded p-2"
              type="text"
              id="uname"
              name="uname"
              placeholder="Enter your Username"
            />
          </div>
          <div class="mb-20">
            <label class="block font-bold text-xl mb-2" for="pwd">
              Password
            </label>
            <input
              class="w-full shadow appearance-none border rounded p-2"
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Enter your Password"
            />
          </div>
          <div class="float-left">
            <button
              class="bg-blue-600 hover:bg-blue-900 text-white py-2 px-6 font-bold rounded-xl"
              type="submit"
              value="Login"
            >
              <Link href="/">Login</Link>
            </button>
          </div>
          <div class="float-right mt-2 sm:text-base mr-0 md:text-lg font-bold mb-8">
            Don't have an account?&nbsp;{" "}
            <Link href="/register">
              <span class="underline text-blue-600 hover:text-blue-900 cursor-pointer">
                Sign up here
              </span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
