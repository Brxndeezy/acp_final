import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function postData() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    uname: "",
    password: "",
  });
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (Object.keys(formData).length == 0) {
    return window.alert("Don't have any Form Data");
  }
};

/* const postData = async () => {
   The POST method adds a new entry in the mongodb database. 
  try {
    const res = await fetch("/api/addUser", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(),
    }); 

    // Throw error with status code if fetch api failed
    if (!res.ok) {
      throw new Error(res.status);
    }

    router.push("/");
  } catch (error) {
    setMessage("Failed to add User");
  }
};
*/

const RegisterForm = () => {
  return (
    <div class="bg-gradient-to-r from-sky-500 to-blue-500">
      <form
        class="flex justify-center items-center max-w-md mx-auto h-screen overflow-hidden md:max-w-2xl"
        action="submit"
        method="POST"
        onSubmit={postData}
      >
        <div class="rounded-xl shadow-xl border h-14rem w-full p-10 overflow-hidden bg-white sm:px-12">
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
              onChange={setData}
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
              onChange={setData}
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
              onChange={setData}
              class="w-full shadow appearance-none border rounded p-2"
              type="email"
              name="email"
              placeholder="Enter your Email"
            />
          </div>
          <div class="mb-4">
            <label class="block font-bold text-xl mb-2" for="uname">
              Username
            </label>
            <input
              onChange={setData}
              class="w-full shadow appearance-none border rounded p-2"
              type="text"
              id="uname"
              name="uname"
              placeholder="Enter your Username"
            />
          </div>
          <div class="mb-8">
            <label class="block font-bold text-xl mb-2" for="pwd">
              Password
            </label>
            <input
              onChange={setData}
              class="w-full shadow appearance-none border rounded p-2"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
            />
          </div>
          <div class="">
            <div class="flex justify-center mt-2 sm:text-base mr-0 md:text-lg font-bold pb-8">
              Already have an account? &nbsp;
              <Link href="/login">
                <span class="underline text-blue-600 hover:text-blue-900 cursor-pointer">
                  Login Here
                </span>
              </Link>
            </div>
            <div class="flex justify-center">
              <button
                onClick={handleSubmit}
                class="bg-blue-600 hover:bg-blue-900 text-white py-2 px-6 font-bold rounded-xl"
                type="submit"
                value="Sign Up"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
