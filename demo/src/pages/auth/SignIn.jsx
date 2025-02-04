import { useState} from "react";
import {Navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import "primereact/resources/themes/saga-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import { Password } from "primereact/password";
import useToaster from "../../hooks/useToaster.js";
import {useAuth} from "../../hooks/useAuth.jsx";
import {Toast} from "primereact/toast";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const {isAuthenticated,login} = useAuth()
  const { showWarn, showSuccess, toast} = useToaster()
  const [loading, setLoading] = useState(false)

  const handleSubmit =  async (e) => {
    e.preventDefault();
    setLoading(true)
    if (credentials.email === "admin" && credentials.password === "admin") {
        showSuccess('Logged in successfully')
        setTimeout(()=>{
            login("fakeToken123");
        },1000)
    } else {
      showWarn("Invalid credentials!");
    }
  };


  const handleSignUp =  () => {
     navigate("/signup");
  };


    if (isAuthenticated()) {
      // use location hook
        return <Navigate to="/" replace state={{message: 'Logged in Successfully'}} />;
    }

  return (
    <div className=" col-12">
        <Toast ref={toast} />
        <Card className="p-5 shadow-lg rounded bg-white m-auto" style={{ width: "400px" }}>
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} action={'/'}>
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
          label={loading ? 'Loading' : "Sign In"}
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
