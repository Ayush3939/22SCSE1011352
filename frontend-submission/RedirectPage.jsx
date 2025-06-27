import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { log } from '../components/Logging';

export default function RedirectPage() {
  const { shortCode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    log('REDIRECT', `Tried to access code: ${shortCode}`);
    alert(`This would redirect to the original URL for ${shortCode}.`);
    navigate('/'); 
  }, []);

  return <div>Redirecting...</div>;
}
