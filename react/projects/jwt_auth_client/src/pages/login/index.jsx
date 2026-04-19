import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { login, resetState } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
    return () => {
      dispatch(resetState());
    };
  }, [isSuccess, navigate, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={isLoading}>
          Login
        </button>
        {isError && <p className={styles.message}>{message}</p>}
        {isSuccess && <p className={styles.message}>Login successful</p>}
      </form>
    </div>
  );
}

export default Login;
