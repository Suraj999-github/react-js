import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate(); // React Router navigation without reload

  const items = [
    { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
    { label: "About Us", icon: "pi pi-info-circle", command: () => navigate("/about") },
    { label: "Contact Us", icon: "pi pi-envelope", command: () => navigate("/contact") },
    { label: "To Dos", icon: "pi pi-list", command: () => navigate("/todos") },
  ];

  return <Menubar model={items} />;
}

export default Navbar;
