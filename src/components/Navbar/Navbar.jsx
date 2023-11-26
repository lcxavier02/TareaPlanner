import { React, useEffect, useState } from "react";
import { ImExit } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useAuth } from "../../context/authContext";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebaseConfig";

function Navbar() {
  const { user, logOut } = useAuth();
  const [userData, setUserData] = useState({});

  const handleLogOut = async () => {
    await logOut();
  };

  const fetchUserData = async () => {
    if (user) {
      const userDoc = doc(firestore, "users", user.uid);
      const docSnap = await getDoc(userDoc);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      }
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  return (
    <div className="flex items-center shadow-lg justify-end gap-x-10 h-14 w-full">
      {user && (
        <div className="flex items-center shadow-lg justify-end gap-x-10 h-14 w-full">
          <div className="rounded-full shadow-sm ">
            <IoNotificationsOutline className="text-2xl" />
          </div>
          <div className="mr-8 flex items-center gap-3">
            <h1 className="font-medium">
              {user?.displayName || userData?.name || user?.email}
            </h1>
            <FaUserCircle className="text-2xl" />
          </div>
          <div className="mr-20">
            <button
              className="bg-boardColor hover:bg-boardHover text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-boardHover"
              onClick={handleLogOut}
            >
              <ImExit className="text-lg" />
            </button>
          </div>
        </div>
      )}
      {!user && (
        <Link to={"/login"}>
          <button className="mr-20 bg-boardColor hover:bg-boardHover text-white font-semibold py-2 px-4 rounded-[5px] focus:outline-none focus:shadow-outline w-[82px]">
            Login
          </button>
        </Link>
      )}
    </div>
  );
}

export default Navbar;
