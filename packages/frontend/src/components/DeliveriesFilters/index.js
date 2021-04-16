import React, { useState } from 'react'; 

import HeaderFilter from './HeaderFilter';
import Filters from './Filters';
import { Container } from './style';

const DeliveriesFilters = () => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <HeaderFilter setShow={setShow} />
      {show && <Filters />}
    </Container>
  );
};

export default DeliveriesFilters;