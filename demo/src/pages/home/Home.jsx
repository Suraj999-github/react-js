import { TabView, TabPanel } from 'primereact/tabview';
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Import chart.js
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Home = () => {
  // Chart data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#42A5F5',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // Tabs content
  const tab1Content = (
    <div>
      <h3>Welcome to Our Website!</h3>
      <p>
        Explore the latest news, trends, and insights. Stay updated with our
        curated content and make the most of your time here.
      </p>
      <Button label="Learn More" icon="pi pi-arrow-right" className="p-button-rounded" />
    </div>
  );

  const tab2Content = (
    <div>
      <h3>Latest Headlines</h3>
      <ul>
        <li>New AI Technology Revolutionizes Healthcare</li>
        <li>Global Markets Reach New Highs</li>
        <li>Climate Change Summit: Key Takeaways</li>
      </ul>
    </div>
  );

  const tab3Content = (
    <div>
      <h3>Featured Content</h3>
      <Image
        src="https://via.placeholder.com/600x300"
        alt="Featured Image"
        width="100%"
        preview
      />
      <p>
        Discover our featured articles and stories. Dive into the world of
        innovation and creativity.
      </p>
    </div>
  );

  return (
    <div className="p-4">
      {/* Hero Section */}
      <Card className="mb-4">
        <div className="flex align-items-center justify-content-between">
          <div>
            <h1>Welcome to Our Platform</h1>
            <p>Your gateway to the latest news, trends, and insights.</p>
          </div>
          <Image
            src="https://via.placeholder.com/150"
            alt="Hero Image"
            width="150"
          />
        </div>
      </Card>

      {/* Tabs Section */}
      <Card className="mb-4">
        <TabView>
          <TabPanel header="Overview" leftIcon="pi pi-home">
            {tab1Content}
          </TabPanel>
          <TabPanel header="Headlines" leftIcon="pi pi-globe">
            {tab2Content}
          </TabPanel>
          <TabPanel header="Featured" leftIcon="pi pi-star">
            {tab3Content}
          </TabPanel>
        </TabView>
      </Card>

      {/* Charts Section */}
      <Card className="mb-4">
        <h2>Sales Overview</h2>
        <div style={{ height: '300px' }}>
          <Chart type="line" data={chartData} options={chartOptions} />
        </div>
      </Card>

      {/* Progress Section */}
      <Card className="mb-4">
        <h2>Progress Tracker</h2>
        <div className="mb-4">
          <h4>Project Completion</h4>
          <ProgressBar value={75} />
        </div>
        <div>
          <h4>Task Progress</h4>
          <ProgressBar value={50} />
        </div>
      </Card>

      {/* Call to Action Section */}
      <Card className="mb-4">
        <div className="flex align-items-center justify-content-between">
          <div>
            <h2>Join Us Today!</h2>
            <p>Become a part of our community and stay ahead of the curve.</p>
          </div>
          <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success" />
        </div>
      </Card>
    </div>
  );
};

export default Home;