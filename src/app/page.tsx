import { redirect } from 'next/navigation';

const HomePage: React.FC = () => {
  redirect('/dashboard');
  return null;
};

export default HomePage;
