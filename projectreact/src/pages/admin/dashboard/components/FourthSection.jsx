import { useState } from "react";
import { Link } from "react-router";

const FourthSection = () => {
  const cakeData = [
    { id: 1, name: "Marble Cake" },
    { id: 2, name: "Fruitcake" },
    { id: 3, name: "Chocolate Cake" },
    { id: 4, name: "Fat Rascal" },
    { id: 5, name: "Financier" },
    { id: 6, name: "Genoise" },
    { id: 7, name: "Gingerbread" },
    { id: 8, name: "Goose Breast" },
    { id: 9, name: "Parkin" },
    { id: 10, name: "Salzburger Nockerl" },
    { id: 11, name: "Soufflé" },
    { id: 12, name: "Merveilleux" },
    { id: 13, name: "Streuselkuchen" },
    { id: 14, name: "Tea Loaf" },
    { id: 15, name: "Napoleonshat" },
    { id: 16, name: "Merveilleux" },
    { id: 17, name: "Magdalena" },
    { id: 18, name: "Cremeschnitte" },
    { id: 19, name: "Cheesecake" },
    { id: 20, name: "Bebinca" },
    { id: 21, name: "Salzburger Nockerl" },
    { id: 22, name: "Soufflé" },
    { id: 23, name: "Merveilleux" },
    { id: 24, name: "Streuselkuchen" },
  ];

  const halfwayIndex = Math.ceil(cakeData.length / 2);
  const leftColumnCakes = cakeData.slice(0, halfwayIndex);
  const rightColumnCakes = cakeData.slice(halfwayIndex);

  const [sections] = useState([
    { name: "Basic Information", completed: 12, total: 18 },
    { name: "Portfolio", completed: 1, total: 8 },
    { name: "Billing Details", completed: 2, total: 6 },
    { name: "Interests", completed: 0, total: 10 },
    { name: "Legal Documents", completed: 1, total: 2 },
  ]);

  return (
    <div className="grid grid-cols-3 gap-8 w-full !pb-8 !m-4">
      <div className="bg-slate-50 w-full h-[500px] shadow-lg rounded-lg">
        <p className="flex text-lg !p-4 w-full font-semibold text-zinc-500">
          Profile Status
        </p>
        <div className="space-y-5">
          {sections.map((section) => (
            <div key={section.name} className="space-y-2 !p-2 !m-2">
              <div className="flex justify-between text-sm text-gray-600 !pb-2">
                <span>{section.name}</span>
                <span>
                  {section.completed}/{section.total}
                </span>
              </div>

              <div className="h-1 bg-gray-100 rounded-full overflow-hidden !mb-2">
                <div
                  className="h-full bg-purple-600 rounded-full"
                  style={{
                    width: `${(section.completed / section.total) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-900 w-full h-[500px] shadow-lg rounded-lg cursor-pointer">
        <div className="!pt-60 !m-6">
          <button className="border bg-gray-500 text-white w-[90px] rounded-full cursor-pointer">
            Spell
          </button>
          <p className="text-4xl text-white !pt-6">
            MAGIC IS <br /> IN THE DETAILS
          </p>
          <p className="text-sm text-white !pt-6">Yes, it is indeed!</p>
        </div>
      </div>

      <div className="bg-slate-50 w-full h-[500px] shadow-lg rounded-lg">
        <p className="flex text-lg !px-8 !py-4 w-full font-semibold text-zinc-500">
          Cakes
        </p>
        <div className="flex flex-row !px-8">
          {/* Left Column */}
          <div className="w-1/2">
            <ul className=" flex flex-col">
              {leftColumnCakes.map((cake) => (
                <Link to="">
                  <li
                    key={cake.id}
                    className=" inline text-zinc-500 !m-1 hover:text-blue-600"
                  >
                    {cake.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="w-1/2">
            <ul className=" flex flex-col">
              {rightColumnCakes.map((cake) => (
                <Link to="">
                  <li
                    key={cake.id}
                    className=" inline text-zinc-500 !m-1 hover:text-blue-600"
                  >
                    {cake.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
