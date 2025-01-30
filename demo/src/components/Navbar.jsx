//import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";

function Navbar() {
  const items = [
    { label: "Home", icon: "pi pi-home", command: () => (window.location.href = "/") },
    { label: "About Us", icon: "pi pi-info-circle", command: () => (window.location.href = "/about") },
    { label: "Contact Us", icon: "pi pi-envelope", command: () => (window.location.href = "/contact") },
    { label: "To Dos", icon: "pi pi-envelope", command: () => (window.location.href = "/todos") },
  ];

  return <Menubar model={items} />;
}

export default Navbar;
