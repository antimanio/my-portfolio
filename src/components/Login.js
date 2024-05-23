import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { login } from '../api/AuthApi';
import { useAuth } from '../utils/AuthContext';

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login: setAuthToken } = useAuth();


    const handleLogin = async () => {
        try {
            const response = await login(email, password);
            if (response.status === 200) {
                const { data: { accessToken, users: { role } } } = response;
                setAuthToken(accessToken)
                role === "USER" ? navigate('/user/queue') : navigate('/admin/queue')
            }
        } catch (error) {
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <Card title="You need an account to see the queue for cutting hair">
            <label className="w-6rem">Email</label>
                <InputText 
                    id="username" 
                    type="text" 
                    className="w-12rem"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
            <label className="w-6rem">Password</label>
                <InputText 
                    id="password" 
                    type="password" 
                    className="w-12rem"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                    label="Login" 
                    icon="pi pi-user" 
                    className="w-10rem mx-auto"
                    onClick={handleLogin}
                />
                <div className="w-full md:w-2">
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                    <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button 
                    label="Sign Up" 
                    icon="pi pi-user-plus" 
                    severity="success" 
                    className="w-10rem" 
                    onClick={() => navigate('/register')} />
                    </div>
                    <Divider layout="horizontal" className="flex md:hidden" align="center">
                        <b>OR</b>
                    </Divider>
                </div>
                <div className="w-full md:w-5 flex align-items-center justify-content-center py-5">
                    <Button 
                    label="Go back to Home" 
                    icon="pi pi-home" 
                    className="w-10rem mx-auto" 
                    onClick={() => navigate('/')} />
                </div>
        </Card>
    )
}

export default Login;
        