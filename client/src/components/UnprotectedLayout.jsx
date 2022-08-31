import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AppBar } from './AppBar';

export const UnprotectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  console.log(`CURR USER: ${user}`);

  if (!user === null) {
    return <Navigate to="/dashboard/student" replace />;
  }
  return (
    <div>
      <AppBar
        pages={[
        ]}
      />
      {outlet}
    </div>
  );
};
