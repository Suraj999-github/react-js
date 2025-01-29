import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 fixed top-0 left-0 h-full">
      <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
      <ul>
        <li><Link to="/" className="block py-2 px-4 hover:bg-blue-600 rounded">Home</Link></li>
        <li><Link to="/about" className="block py-2 px-4 hover:bg-blue-600 rounded">About Us</Link></li>
        <li><Link to="/contact" className="block py-2 px-4 hover:bg-blue-600 rounded">Contact</Link></li>
        <li><Link to="/todos" className="block py-2 px-4 hover:bg-blue-600 rounded">Todos</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
