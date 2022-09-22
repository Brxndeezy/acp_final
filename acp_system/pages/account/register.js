import Link from "next/link";
import { useState } from "react";

function Register() {
  return (
    <div class="bg-gradient-to-r from-sky-500 to-blue-500">
      <form
        class="flex justify-center items-center max-w-md mx-auto h-screen overflow-hidden md:max-w-2xl"
        action="submit"
        method="POST"
      >
        <div class="rounded-xl shadow-xl border h-14rem w-full p-10 overflow-hidden bg-white sm:px-4">
          <div class="">
            <h1 class="md:text-4xl font-bold text-center pb-10 sm:text-3xl">
              Acute Catering & Projects
            </h1>
          </div>
          <div class="mb-4">
            <label class="block font-bold text-xl mb-2" for="fname">
              First Name
            </label>
            <input
              class="w-full shadow appearance-none border rounded p-2"
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your First Name"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold text-xl mb-2" for="lname">
              Last Name
            </label>
            <input
              class="w-full shadow appearance-none border rounded p-2"
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your Last Name"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold text-xl mb-2" for="email">
              Email
            </label>
            <input
              class="w-full shadow appearance-none border rounded p-2"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
            />
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
          <div class="mb-10">
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
          <div class="">
            <input
              class="bg-blue-600 hover:bg-blue-900 text-white py-2 px-6 font-bold rounded"
              type="button"
              value="Sign Up"
              onClick={clickHandler}
            />
            <div class="float-right mt-2 sm:text-base mr-0 md:text-lg font-bold">
              Already have an account?{" "}
              <Link href="/account/login">
                <span class="underline text-blue-600 hover:text-blue-900 cursor-pointer">
                  Login Here
                </span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

async function clickHandler(enteredData) {const response = await
fetch("/api/form",{
  method: "POST",
  body: JSON.stringify(enteredData),
});

  const data = await response.json();

  console.log(data);
}

export default Register;
