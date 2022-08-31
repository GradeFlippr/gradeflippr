import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AppBar } from './AppBar';

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  console.log(`CURR USER: ${user}`);

  if (user === null) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <AppBar
        pages={
          [
            // { label: 'Home', path: '/' },
          ]
        }
      />
      {outlet}
    </div>
  );
};
