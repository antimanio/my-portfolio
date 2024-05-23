import React, { useState } from "react";
import { Button } from 'primereact/button';
import { getUserOnly, getUserAdminAndUser  } from '../api/Test'

export default function LoadingDemo() {

    const adminanduser = async () => {
        try {
            const response = await getUserAdminAndUser();
            console.log(response)
            if (response.status === 200) {
                alert("ADMIN AND USER ACCESS ONLY")
            }
        } catch (error) {
            alert('An error occurred during login. Please try again.');
        }
    };


    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="AdminAndUser" icon="pi pi-check"onClick={adminanduser} />
        </div>
        
    )
}