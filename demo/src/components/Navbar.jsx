//import React from "react";
import { useState} from 'react';
import { Menubar } from "primereact/menubar";
import { useNavigate} from "react-router-dom";
import {  isAuthenticated } from "../utils/authHelpers";
//import {  isAuthenticated } from "../utils/authHelpers";
import { Button } from "primereact/button";
import { Badge } from 'primereact/badge';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
//import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import {useAuth} from "../hooks/useAuth.jsx";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const {logout} = useAuth();

  const handleLogout = () => {
      logout();
      navigate('/')
  };


  const profileItems = [
      { label: 'Profile', icon: 'pi pi-user' ,command: () => navigate("/profile")  },
      { label: 'Settings', icon: 'pi pi-cog',command: () => navigate("/setting")  },
      { label: 'Logout', icon: 'pi pi-sign-out' ,command: ()=>handleLogout()  },
  ];

//   // Custom item template for rendering each dropdown item
//   const customItemTemplate = (item) => {
//     return (
//         <div className="flex align-items-center">
//             {/* Avatar with the image */}
//             <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" size="small" className="mr-2" />
//             <span>{item.label}</span>
//         </div>
//     );
// };


  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
        {item.badge && <Badge className="ml-auto" value={item.badge} />}
        {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
    </a>
);

  const items = [
 //   { label: "Home", icon: "pi pi-home", command: () => navigate("/home") },
    { label: "Home", icon: "pi pi-home", command: () => navigate("/") },
    { label: "About Us", icon: "pi pi-info-circle", command: () => navigate("/about") },
    { label: "Contact Us", icon: "pi pi-envelope", command: () => navigate("/contact") },
    { label: "To Dos", icon: "pi pi-list", command: () => navigate("/todos") },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
          {
              label: 'Core',
              icon: 'pi pi-bolt',
              shortcut: '⌘+S',
              template: itemRenderer
          },
          {
              label: 'Blocks',
              icon: 'pi pi-server',
              shortcut: '⌘+B',
              template: itemRenderer
          },
          {
              label: 'UI Kit',
              icon: 'pi pi-pencil',
              shortcut: '⌘+U',
              template: itemRenderer
          },
          {
              separator: true
          },
          {
              label: 'Templates',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Use-State Eg',
                      icon: 'pi pi-palette',
                    //  badge: 2,
                      template: itemRenderer,
                      command: () => navigate("/usestateeg") 
                  },
                  {
                      label: 'Ultima',
                      icon: 'pi pi-palette',
                      badge: 3,
                      template: itemRenderer
                  }
              ]
          }
      ]
  },
  ];



  const end = isAuthenticated() ? (
    <div className="flex align-items-center gap-2">
    {/* <Button label="Logout" icon="pi pi-sign-out" className="p-button-danger p-button-sm" onClick={handleLogout} /> */}
    <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
    <div className="relative">
        <Dropdown
            value={selectedItem}
            options={profileItems}
            onChange={(e) => {
                setSelectedItem(e.value);
                if (e.value?.command) {
                    e.value.command();
                }
            }}
            placeholder={
                <div className="flex align-items-center">
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" size="small" className="mr-2" />
                </div>
            }
            className="w-8rem sm:w-auto"
            itemTemplate={(option) => (
                <div>
                    <i className={option.icon}></i> {option.label}
                </div>
            )}
        />
      </div>
</div>

  ) : (
    <>
      <Button label="Sign In" icon="pi pi-sign-in" className="p-button-text p-button-sm mr-2" onClick={() => navigate("/signin")} />
      <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-text p-button-sm" onClick={() => navigate("/signup")} />
    </>
  );

  return <Menubar model={items} end={end} />;
};

export default Navbar;
