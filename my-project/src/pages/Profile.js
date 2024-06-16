import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../api/apiConfig';
import { useAuth } from '../components/AuthProvider';

const Profile = () => {
    const { setAuth, setUid, uid } = useAuth();
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        console.log("Getting profile")
        api.get(`/account/profile`)
        .then((res) => {
            console.log(res.data);
            setProfile(res.data);
        })
        .catch((error) => {
            console.error(error.response.data);
        });
    }, []);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        setAuth(false);
        setUid('');
        sessionStorage.clear();
        console.log("Signed out")
        api.post("/account/signout")
        .then(() => {
            
            return <Navigate to="/signin" />;
        });
    };

    return (
        <div>
        <div className="flex flex-col h-screen justify-center items-center bg-blue-200">
          <div className="flex flex-col justify-center items-center w-1/2 h-1/2 bg-blue-100 gap-10 ">
            <h1 className="text-3xl justify-center py-5">Profile</h1>
            <div>{profile.name}</div>
            <div>{profile.email}</div>
            <form onSubmit={handleSubmit}>
                <button
                type="submit"
                className="bg-red-400 hover:bg-red-500 rounded-full w-[200px] h-[50px]"
                >
                Sign out
                </button>
            </form>
            
            
          </div>
          
        </div>
      </div>
    );
}

export default Profile;