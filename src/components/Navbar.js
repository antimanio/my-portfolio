
import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function BasicDemo() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Login',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Student Register',
                    icon: 'pi pi-server'
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
            <Menubar model={items} />
        </div>
    )
}
        