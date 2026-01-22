import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OnlineOrder = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/menu', { replace: true });
  }, [navigate]);

  return null;
};

export default OnlineOrder;
