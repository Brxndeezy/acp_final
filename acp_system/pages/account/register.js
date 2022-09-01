function Register() {
  return (
    <form
      class="flex justify-center items-center max-w-md mx-auto h-screen overflow-hidden md:max-w-2xl"
      action=""
      method="post"
    >
      
      <div class="rounded-xl shadow-md border h-auto w-full p-10 overflow-hidden">
      <div class="">
        <h1 class="text-4xl text-center pb-10">Acute Catering & Projects Login</h1>
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
        <div class="mb-6">
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
            class="bg-blue-600 hover:bg-blue-900 text-white p-2"
            type="button"
            value="Sign Up"
          />
        </div>
      </div>
    </form>
  );
}

function signUp() {}

export default Register;
