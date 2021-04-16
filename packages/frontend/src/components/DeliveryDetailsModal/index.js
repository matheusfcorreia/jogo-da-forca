import React from 'react';

import { BlurBackground, Modal } from './style';

import Header from './Header';
import Content from './Content';

const DeliveryDetailsModal = () => {
  return (
    <BlurBackground>
      <Modal>
        <Header />
        <Content />
      </Modal>
    </BlurBackground>
  );
};

export default DeliveryDetailsModal;