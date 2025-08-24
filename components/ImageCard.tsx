const ImageCard = () => {
  return (
    <article className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 space-y-6">
      {/* Top bar */}
      <div className="flex justify-between items-center">
        <h4 className="text-2xl">
          <span className="emoji">ᝰ</span>
        </h4>
        <h4 className="text-gray-400 text-xl cursor-pointer hover:text-white">⫶</h4>
      </div>

      {/* Controls */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="background"
            name="background"
            className="w-4 h-4 accent-cyan-500"
          />
          <label htmlFor="background" className="text-gray-300">No background</label>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="grayscale"
            name="grayscale"
            className="w-4 h-4 accent-cyan-500"
          />
          <label htmlFor="grayscale" className="text-gray-300">Grayscale</label>
        </div>

        <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 rounded-xl transition">
          ↓ Download
        </button>
      </div>

      {/* Background input */}
      <input
        type="text"
        placeholder="Start typing to change background"
        className="w-full px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </article>
  );
};

export default ImageCard;
