import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
        Welcome to Drive AI
      </h2>

      {/* Search bar */}
      <div className="mb-8  flex items-center justify-center">
        <input
          type="text"
          placeholder="Search in Drive..."
          className="w-full md:w-1/2 px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-cyan-500 focus:outline-none text-white placeholder-gray-400 shadow-sm"
        />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6 items-center justify-center">
        <ImageCard />
        <VideoCard />
      </div>
    </main>
  );
};

export default Dashboard;
