import React, { useEffect, useState } from 'react';
import HomeView from './home.view';
import IHome from './home.props';

const Home: React.FC<IHome> = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUserName = localStorage.getItem('rememberedName') || '';
    const cookieUserName = document.cookie.split('; ').find(row => row.startsWith('rememberedName='));
    const userNameFromCookie = cookieUserName ? cookieUserName.split('=')[1] : '';

    if (userNameFromCookie) {
      setUserName(userNameFromCookie);
    } else {
      setUserName(storedUserName);
    }
  }, []);

  return <HomeView userName={userName} />;
};

export default Home;
