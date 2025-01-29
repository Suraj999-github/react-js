import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
    <div className="py-4 px-2 lg:mx-4 xl:mx-12 ">
    <nav className="bg-blue-600 p-4 shadow-md fixed w-full z-10 top-0 left-0">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-white text-lg font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:underline">Home</Link>
        <Link to="/about" className="text-white hover:underline">About Us</Link>
        <Link to="/contact" className="text-white hover:underline">Contact</Link>
        <Link to="/todos" className="text-white hover:underline">Todos</Link>
      </div>
    </div>
  </nav>
  </div>
  </header>
  );
};
export default Navbar;
