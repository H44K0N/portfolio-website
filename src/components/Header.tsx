const Header = () => {
    return (
        <header className="w-full py-4 px-8 bg-white shadow-md">
      <nav className="flex justify-center gap-10 text-lg font-semibold">
        <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#education" className="hover:text-blue-500 transition-colors">Education</a>
        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
      </nav>
    </header>
    );
};

export default Header;