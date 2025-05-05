const ProgressCard = ({ title, percentage, color = "#9c27b0" }) => {
  const radius = 35;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="rounded-lg shadow-md !p-6 flex items-center justify-between w-96 h-24">
      <div className="text-gray-700 font-medium text-xl">{title}</div>
      <div className="relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          <circle
            stroke="#e6e6e6"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

const FifthSection = () => {
  const progressData = [
    { title: "Payment Status", percentage: 64, color: "#9c27b0" },
    { title: "Work Progress", percentage: 75, color: "#9c27b0" },
    { title: "Tasks Completed", percentage: 32, color: "#9c27b0" },
    { title: "Payments Done", percentage: 45, color: "#9c27b0" },
  ];
  return (
    <div className="grid grid-cols-4 gap-8 w-full !pb-8 !m-4">
      {progressData.map((item, index) => (
        <ProgressCard
          key={index}
          title={item.title}
          percentage={item.percentage}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default FifthSection;
