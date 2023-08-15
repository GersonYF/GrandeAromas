// src/components/TrelloBoard.js

import React, {useEffect, useState} from 'react';
import Loading from '../components/Loading';
import ModalSke from '../components/ModalSke';
import DashboardBody from '../components/DashboardBody';
import { useUserContext } from '../UserContext';

const Dashboard = () => {
  const { user, showModal, setShowModal } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);
  const onHide = () => setShowModal(false);
  const onSubmit = async (task) => {}

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(user.token);
        const stats = []
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DashboardBody />
      <ModalSke show={showModal} onHide={onHide} />
    </>
  )
};

export default Dashboard;