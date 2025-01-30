import { useQuery } from '@tanstack/react-query';
import {fetchTodosData} from '../../apis/TodosApi';
import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { Tag } from "primereact/tag";
import { Divider } from "primereact/divider";
const Todos = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: fetchTodosData,
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    // <div>
    //   <h1>{data.full_name}</h1>
    //   <p>{data.description}</p><br/>
    //   <strong>👀 {data.subscribers_count}</strong>{' '}<br/>
    //   <strong>✨ {data.stargazers_count}</strong>{' '}<br/>
    //   <strong>🍴 {data.forks_count}</strong><br/>
    //   <div>{isFetching ? 'Updating...' : ''}</div>
    // </div>
    <div className="repo-card">
    <Card title={data.full_name}>
      <p>{data.description}</p>
      
      <Divider />

      <div className="stats">
        <Tag icon="pi pi-eye" value={data.subscribers_count} severity="info" />
        <Tag icon="pi pi-star" value={data.stargazers_count} severity="warning" />
        <Tag icon="pi pi-share-alt" value={data.forks_count} severity="success" />
      </div>

      {isFetching && (
        <div className="loading">
          <ProgressSpinner style={{ width: "30px", height: "30px" }} />
          <span>Updating...</span>
        </div>
      )}
    </Card>
  </div>
  );
};

export default Todos;
