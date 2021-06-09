import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SecondaryButton } from '@softcenter/react-basic-components';

import { Plus } from '../../assets/icons';
import { Container, SelectDiv, Select } from './style';

import { Creators as deliveriesActions } from '../../store/ducks/socket';

const Pagination = ({ paginationValue }) => {
  const dispatch = useDispatch();

  

  const limit = useSelector(s => s.deliveries.limit);
  const totalDocs = useSelector(s => s.deliveries.totalDocs);
  const hasNextPage = useSelector(s => s.deliveries.hasNextPage);
  const loadMoreClicks = useSelector(s => s.deliveries.loadMoreClicks);

  const setLimit = e => {
    dispatch(deliveriesActions.setLimit(e.currentTarget.value));

    if (e.currentTarget.value <= totalDocs || hasNextPage) 
      dispatch(deliveriesActions.getDeliveries());
  };

  const loadMore = () => {
    dispatch(deliveriesActions.setLoadMoreClicks(loadMoreClicks + 1));
    dispatch(deliveriesActions.setLimit(limit * (loadMoreClicks + 1)));
    dispatch(deliveriesActions.getDeliveries());
  };

  return (
    <Container>
      <SelectDiv>
        ver 
        <Select ref={paginationValue} onChange={setLimit} >
          <option>08</option>
          <option>24</option>
          <option>60</option>
          <option>120</option>
        </Select>
        entregas de um total de {totalDocs}.
      </SelectDiv>
      <SecondaryButton disabled={!hasNextPage} onClick={loadMore} >
        Carregar <Plus />
      </SecondaryButton>
    </Container>
  );
};

export default Pagination;