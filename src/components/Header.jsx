const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md text-white p-4">
      <div className="mx-auto max-w-4xl px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Task App</h1>
        <button className="bg-blue-500 hover:bg-blue-600
         text-white py-2 px-4 rounded">Login</button>
      </div>
    </header>
  );
};

export default Header;