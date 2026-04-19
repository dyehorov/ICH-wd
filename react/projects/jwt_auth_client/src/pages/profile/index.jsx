import styles from "./styles.module.css";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../redux/slices/authSlice";

function Profile() {
  const distach = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    distach(logout());
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h1>
        {tokenData ? (
          <span>
            {tokenData.user.id} {tokenData.user.email}
          </span>
        ) : (
          "Login into account"
        )}
      </h1>
      <button onClick={handleLogout}>{tokenData ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Profile;
