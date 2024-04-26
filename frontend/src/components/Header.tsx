import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="flex text-3xl text-white font-bold tracking-tight gap-2">
          <img src="/img/logo2.png" alt="" style={{ height: "40px" }} />
          <Link to="/">SABA'A HOTEL</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center rounded text-white px-3 font-bold hover:bg-blue-500"
                to="/my-bookings"
              >
                My Booking
              </Link>
              <Link
                className="flex items-center rounded text-white px-3 font-bold hover:bg-blue-500"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              className="flex items-center rounded border text-blue-500 px-3 font-bold bg-white"
              to="/sign-in"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
