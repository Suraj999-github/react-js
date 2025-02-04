import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Password } from "primereact/password";
//import { FloatLabel } from "primereact/floatlabel";

const SignUp = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signin"); // Navigate to /signup when the Sign Up button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful! Please sign in.");
    navigate("/signin");
  };

  return (
    <div className="col-12">
     <Card className="p-5 shadow-lg rounded bg-white m-auto" style={{ width: "400px" }}>
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Field with Floating Label */}
        <div className="p-field mb-3">
        <label htmlFor="email" className="flex block text-sm font-medium mb-2">    Email   </label>
            <InputText
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full"
               placeholder="Enter your email"
            />           
         
        </div>

        {/* Password Field with Visibility Toggle */}
        <div className="p-field mb-3">
        <label htmlFor="password" className="flex block text-sm font-medium mb-2">   Password  </label>
            <Password
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full"
              style={{ width: 'inherit' }}
              feedback={false}
              toggleMask
               placeholder="Enter your password"
            />          
         
        </div>

        {/* Sign Up Button */}
        <Button label="Sign Up" className="p-button-success w-full" type="submit" />
      </form>
       {/* Sign In button */}
       <div className="mt-4 text-center">
          <Button
            label="Sign In"
            className="p-button-primary w-full"
            onClick={handleSignIn}
          />
        </div>
    </Card>
  </div>
  );
};

export default SignUp;
