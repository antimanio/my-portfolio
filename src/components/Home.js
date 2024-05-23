
import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Cut hair ? ',
                    icon: 'pi pi-bolt',
                    command: () => { navigate('/login') }
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    return (
        <div className="card">
            <Menubar model={items}/>
        </div>
    )
}
export default Navbar