import { stats } from "@/data/stats";

const Stats: React.FC = () => {
  return (
    <section
      id="stats"
      className="py-16 bg-gradient-to-r from-[#f0e0d8] via-[#D6D0C5] to-[#f0e0d8]"
    >
      <div className="grid sm:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="text-center sm:text-left max-w-md sm:max-w-full mx-auto"
          >
            <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start text-back">
              {stat.icon}
              {stat.title}
            </h3>
            <p className="text-gray-800">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
