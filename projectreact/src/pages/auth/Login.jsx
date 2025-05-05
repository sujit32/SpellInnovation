import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const registerPage = () => {
    navigate("/register");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ email: "sujit@gmail.com", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      navigate("/");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg grid grid-cols-7 h-[450px] w-[1000px]">
        <div className="h-full col-span-3 rounded-l-lg bg-[url(/src/assets/logo.jpg)]">
          <p className="text-4xl text-white !pt-20 !pl-20">
            MAGIC IN THE DETAILS
          </p>

          <p className="text-sm text-white !pl-20 !pt-4">
            Please use your credentials to login. <br />
            If you are not a member please register.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col col-span-4 h-full items-center p-10"
        >
          <div className="flex flex-col col-span-4 w-full items-center !p-10">
            <div className="flex w-full">
              <img
                src="/src/assets/logo.png"
                alt="Profile"
                className="h-16 w-48"
              />
            </div>

            <p className="text-xl font-semibold text-gray-700 !mt-15 w-full !mb-8">
              Login
            </p>
            <div className="relative w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" border w-full border-gray-300 rounded-md !px-4 !py-2 focus:outline-none !mb-4"
              />
              <span className="text-xs bg-white -top-2 left-3 absolute">
                E-mail
              </span>
            </div>

            <div className="relative w-full">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" border w-full border-gray-300 rounded-md !px-4 !py-2 focus:outline-none !mb-4"
              />
              <span className="text-xs bg-white -top-2 left-3 absolute">
                Password
              </span>
            </div>

            <div className="flex justify-end w-full">
              <div className="!pt-2 w-full text-blue-700">
                <Link to="/forgetpassword">Forget Password?</Link>
              </div>
              <button
                type="submit"
                className="border border-purple-500 bg-gray-600 text-white rounded-full cursor-pointer !px-10 !py-2 text-sm font-medium hover:bg-purple-500 hover:text-white transition duration-300 ease-in-out"
              >
                Login
              </button>
              <button
                onClick={registerPage}
                type="button"
                className="border border-purple-500 bg-gray-600 text-white rounded-full cursor-pointer !px-8 !ml-2 !py-2 text-sm font-medium hover:bg-purple-400 hover:text-white transition duration-300 ease-in-out"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
