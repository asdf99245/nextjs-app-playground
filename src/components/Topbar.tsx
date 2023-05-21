function Topbar() {
  return (
    <header className="flex flex-row justify-center items-center w-full h-20 shadow-md">
      <nav className="max-w-screen-lg w-full flex flex-row justify-between items-center">
        <h1 className="font-black text-lg">LOGO</h1>
        <button className="px-4 py-2 text-white text-sm bg-blue-500 rounded">
          LOGIN
        </button>
      </nav>
    </header>
  );
}

export default Topbar;
