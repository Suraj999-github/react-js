import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {useLocation, useNavigate} from "react-router-dom";
import { isAuthenticated } from "../../utils/authHelpers";
// Import chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import {Toast} from "primereact/toast";
import useToaster from "../../hooks/useToaster.js";
import {useEffect} from "react";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  const navigate = useNavigate();
  const {toast} = useToaster()


  if (!isAuthenticated()) {
    navigate("/signin");
    return null;
  }


  return (
    <div className="repo-card">
      {/* Hero Section */}
      <Card>
          <Toast ref={toast} />
          <div>
            <h1>Welcome to Our Platform</h1>
            <p>Your gateway to the latest news, trends, and insights.</p>
          </div>
          <Image
            src="https://imgs.search.brave.com/P7GOMtvETCVGEptng1aLpsJYG8UYTQXS7qEQ8LCLuys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2UxZi9hbGVy/dC10YWJieS1jYXQt/cG9ydHJhaXQtMDQx/MC01Njk5OTE2Lmpw/Zz9mbXQ"
            alt="Hero Image"
            width="150"
          />
       
      </Card>

      {/* Call to Action Section */}
      <Card className="mb-4">
        <div className="flex align-items-center justify-content-between">
          <div>
            <h2>Join Us Today!</h2>
            <p>Become a part of our community and stay ahead of the curve.</p>
          </div>       
        </div>
      </Card>
    </div>
  );
};

export default Home;