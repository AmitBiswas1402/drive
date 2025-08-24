import GoogleDrive from "./Logo";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-4 flex items-center space-x-3 shadow-md">
      <GoogleDrive className="w-8 h-8" />
      <span className="text-xl font-bold">Drive</span>
    </header>
  );
};

export default Header;
