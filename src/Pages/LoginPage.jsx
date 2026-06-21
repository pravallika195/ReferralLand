import { useState } from "react";
import {useNavigate, Navigate} from "react-router-dom";
import Cookies from "js-cookie";
import {LoginUser} from "../services/api";

function LoginPage() {
    const navigate=useNavigate();
    const [form,setForm] = useState({
        email:"",
        password:""
    });
    //const navigate=useNavigate();
    const [error,setError]=useState("");
    const token = Cookies.get("token");
    if(token){
        return <Navigate to="/" replace/>;
    }
    const handleChange=(e)=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response =await LoginUser(form);
            const token =response.data.token;
            Cookies.set("token",token);
            navigate("/");
            console.log("Login successful, token:", token);
            console.log("Full response:", response);
            console.log(Cookies.get("token"));
        }
        catch(err){
            setError(err.response?.data?.message || "Login failed. Please check your credentials and try again.");
        }
    }
    return (
  <div className="login-container">
    <div className="login-card">
      <h1 className="login-title">
        Go Business
      </h1>

      <p className="login-subtitle">
        Sign in to open your referral
        dashboard.
      </p>

      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <input
          className="form-input"
          type="email"
          placeholder="your@example.com"
          value={form.email}
          onChange={handleChange}
          name="email"
        />

        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          name="password"
        />

        <button
          className="primary-btn login-btn"
          type="submit"
        >
          Sign In
        </button>
      </form>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
    </div>
  </div>
);
}
export default LoginPage;