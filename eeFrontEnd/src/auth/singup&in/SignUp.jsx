import { Link } from "react-router";
import { useUser } from "../AuthContext";
import { updateProfile } from "firebase/auth";

function SignUp() {
  const { singUpwithEmailandPass } = useUser();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const pass = form.password.value;

    singUpwithEmailandPass(email, pass)
      .then((userCredential) => {
        console.log(userCredential);
        return updateProfile(userCredential.user, { displayName });
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight ">
            Create A New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSignUp} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium ">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-black/10 px-3 py-1.5 text-base  outline outline-gray-600 outline-1 -outline-offset-1   focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-black/10 px-3 py-1.5 text-base  outline outline-gray-600 outline-1 -outline-offset-1   focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium "
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="password"
                  className="block w-full rounded-md bg-black/10 px-3 py-1.5 text-base  outline outline-gray-600 outline-1 -outline-offset-1   focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 ">
            Not a member?{" "}
            <Link to={"/authleyout/signin"}>
              {" "}
              <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                Already Have an account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
