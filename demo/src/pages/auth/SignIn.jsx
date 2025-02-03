import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../utils/authHelpers";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import { Password } from "primereact/password";
const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email === "admin" && credentials.password === "admin") {
      alert("Logged in successfully!");
      setAuthToken("fakeToken123");
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };
  const handleSignUp = () => {
    navigate("/signup"); // Navigate to /signup when the Sign Up button is clicked
  };

  return (
    <div className=" col-12">        
    <Card className="p-5 shadow-lg rounded bg-white m-auto" style={{ width: "400px" }}>
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-field mb-3">
          <label htmlFor="email" className="flex block text-sm font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            className="w-full"
            placeholder="Enter your email"
          />
        </div>
        <div className="p-field mb-3">
  <label htmlFor="password" className="flex block text-sm font-medium mb-2">
    Password
  </label>
  <Password
    id="password"
    value={credentials.password}
    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
    className="w-full"
    style={{ width: 'inherit' }}
    placeholder="Enter your password"
    toggleMask
  />
</div>
        <Button
          label="Sign In"
          className="p-button-primary w-full"
          type="submit"
        />
      </form>
      <div className="mt-4 text-center">
          <Button
            label="Sign Up"
            className="p-button-success w-full"
            onClick={handleSignUp}
          />
        </div>
    </Card>  
  </div>
  );
};

export default SignIn;
