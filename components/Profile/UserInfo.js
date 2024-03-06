import React, { useEffect, useState } from 'react';
import{useAuth} from "../../firebase"


function UserInfo() {
  const [user, setUser] = useState(null);
  const currentUser=useAuth();//current user is returned to useAuth state using custom hook

//   useEffect(() => {
//     setUser(auth.currentUser);
//   }, []);

  // Conditionally render user information if a user is signed in
  if (currentUser) {
    return (
      <div>
        User: {currentUser.email}
        <div>
        {currentUser.uid}
     </div>
       
    
      </div> 
    );
        }
   else {
    // Optionally return null or some placeholder if no user is signed in
    return <div>No user info available.</div>;
  }
}

export default UserInfo;
