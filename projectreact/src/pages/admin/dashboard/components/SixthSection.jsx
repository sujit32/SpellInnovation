const SixthSection = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full !pb-8 !m-4">
      <div className="bg-slate-50 h-[600px] shadow-lg rounded-lg">
        <div className="!p-5">
          <p className=" text-xl w-full font-medium text-zinc-500">
            Website Visits
          </p>
          <p className=" text-sm w-full font-medium text-zinc-400">
            Unique Visiors
          </p>
        </div>
      </div>

      <div className="bg-slate-50 h-[600px] shadow-lg rounded-lg">
        <div className="!p-5">
          <p className=" text-xl w-full font-medium text-zinc-500">
            Conversion Rates
          </p>
          <p className=" text-sm w-full font-medium text-zinc-400">
            Per Session
          </p>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
