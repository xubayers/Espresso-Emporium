import { Link } from "react-router";

function Nav() {
  return (
    <>
      <header className="">
        <nav className="mx-auto justify-center flex max-w-7xl items-center  p-6 lg:px-8">
          <ul className="flex gap-8 text-xl  cursor-pointer">
            <Link to={"/"}>
              <li className="hover:text-gray-400">Home</li>
            </Link>
            <Link to={"/authleyout/signin"}>
              <li className="hover:text-gray-400">Sign In</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
