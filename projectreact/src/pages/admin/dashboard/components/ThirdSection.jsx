const ThirdSection = () => {
  const productsData = [
    { name: "Marble Cake", sales: 1647, stock: 62 },
    { name: "Fat Rascal", sales: 1240, stock: 48 },
    { name: "Chocolate Cake", sales: 1080, stock: 57 },
    { name: "Goose Breast", sales: 1014, stock: 41 },
    { name: "Petit Gâteau", sales: 985, stock: 23 },
    { name: "Salzburger Nockerl", sales: 962, stock: 34 },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 w-full !pb-8 !m-4">
      <div className="bg-slate-50 h-[600px] shadow-lg rounded-lg">
        <p className="flex justify-center text-zinc-500">Calender</p>
      </div>

      <div className="bg-slate-50 h-[600px] shadow-lg rounded-lg">
        <h2 className="flex text-lg font-semibold text-zinc-500 w-full !px-8">
          Best Sellers
        </h2>
        <div className="overflow-x-auto !p-8">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-amber-200 border-slate-200">
                <th className="text-left !p-3 text-sm font-semibold text-gray-500">
                  Name
                </th>
                <th className="text-left !p-3 text-sm font-semibold text-gray-500">
                  Sales
                </th>
                <th className="text-left !p-3 text-sm font-semibold text-gray-500">
                  Stock
                </th>
              </tr>
            </thead>
            <tbody>
              {productsData.map((product, index) => (
                <tr key={index} className="border-b border-slate-200">
                  <td className="!p-3 text-sm text-gray-500">{product.name}</td>
                  <td className="!p-3 text-sm text-gray-500">
                    {product.sales}
                  </td>
                  <td className="!p-3 text-sm text-gray-500">
                    {product.stock}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
