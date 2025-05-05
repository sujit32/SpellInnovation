import { GiClockwork } from "react-icons/gi";
import { IoPersonSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { useState } from "react";

const SeventhSection = () => {
  const [keyword, setKeyword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="grid grid-cols-3 !m-4 !pb-8 gap-10">
      {/* Progress Bar */}
      <div>
        <div className="bg-indigo-950 w-full h-48 shadow-lg rounded-lg !mb-4">
          <div className="flex justify-between !p-6">
            <div>
              <div className="!mb-4">
                <GiClockwork className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-2xl text-white font-semibold">5 Files</h2>
              <p className="text-sm opacity-90 text-white">Pending for print</p>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="58"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="6"
                  fontWeight="bold"
                >
                  5/12
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950 w-full h-44 shadow-lg rounded-lg !mb-4">
          <div className="flex justify-between !p-6">
            <div>
              <div className="!mb-4">
                <IoPersonSharp className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-2xl text-white font-semibold">5 Files</h2>
              <p className="text-sm opacity-90 text-white">
                On approval process
              </p>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="58"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="6"
                  fontWeight="bold"
                >
                  4/6
                </text>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 w-full h-44 shadow-lg rounded-lg !mb-4">
          <div className="flex justify-between !p-6">
            <div>
              <div className="!mb-4">
                <FaBell className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-2xl text-white font-semibold">5 Files</h2>
              <p className="text-sm opacity-90 text-white">
                Waiting for notice
              </p>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="58"
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="6"
                  fontWeight="bold"
                >
                  8/12
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Form Advance Search */}
      <div className="w-full bg-white rounded-lg overflow-hidden shadow">
        <div className="relative h-52 bg-gradient-to-r from-blue-900 to-purple-900">
          <img
            src="src/assets/logo.jpg"
            alt=""
            className="w-full h-full object-cover mix-blend-overlay opacity-80"
          />
          <div className="absolute top-15 left-20 text-white text-xl font-semibold">
            Advanced Search
          </div>
        </div>

        <div className="!p-6">
          <div className="!mb-4">
            <label className="block text-gray-700 !mb-2">Toppings</label>
            <div className="relative">
              <select className="w-full !p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option>Select...</option>
                <option>Chocolate</option>
                <option>Vanila</option>
                <option>Strawberry</option>
                <option>Caramel</option>
                <option>Peppermint</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center !px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="!mb-4">
            <label className="block text-gray-700 !mb-2">Type</label>
            <div className="relative">
              <select className="w-full !p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600">
                <option>Select</option>
                <option>Cake</option>
                <option>Cup Cake</option>
                <option>Dessert</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center !px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="!mb-4">
            <label className="block text-gray-700 !mb-2">Keyword</label>
            <input
              type="text"
              className="w-full !p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>

          <div className="!mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="!ml-2 text-gray-700">
                Check this custom checkbox
              </span>
            </label>
          </div>

          <div className="flex justify-center">
            <button className="bg-purple-600 rounded-full hover:bg-purple-700 text-white font-medium !py-2 !px-8 transition duration-200 cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 h-32 w-[250px] shadow-lg rounded-lg"></div>
    </div>
  );
};

export default SeventhSection;
