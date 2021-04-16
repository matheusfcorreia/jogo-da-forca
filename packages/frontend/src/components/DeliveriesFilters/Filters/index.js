import React, { useRef, useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button, StatefulSearchList } from '@softcenter/react-basic-components';
import Inputmask from 'inputmask';

import { Search, Close } from '../../../assets/icons'; 
import { 
  StyledFilters,
  StyledDefaultFilter,
  StyledBubbleList,
  StyledBubble,
  StyledSearchDiv,
  Separator,
} from './style';

import { Creators as deliveriesActions } from '../../../store/ducks/deliveries';

import debounce from '../../../util/debounce';

const Filters = () => {
  const dispatch = useDispatch();

  const getDeliveries = () => {
    dispatch(deliveriesActions.getDeliveries());
  };

  return (
    <StyledFilters>
      <DefaultFilter />
      <Separator />
      <DateFilter />
      <Button onClick={getDeliveries} children="Aplicar filtros" />
    </StyledFilters>
  );
};

const DefaultFilter = () => {
  const dispatch = useDispatch();
  
  const inputRef = useRef();
  const timeout = useRef();
 
  const filterValues = useSelector(s => s.deliveries.filters.selectedCarriers); 
  const carriers = useSelector(s => s.deliveries.carriers); 

  const [firstTimeRender, setFirstTimeRender] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const onSelectItem = transporter => {
    setTimeout(() => {
      inputRef.current.blur();
    })
    dispatch(deliveriesActions.setFilters('selectedCarriers', transporter));
  };

  const onFocus = () => {
    if (!firstTimeRender) return;
    dispatch(deliveriesActions.getCarriers(inputValue, 10));
    setFirstTimeRender(false);
  };

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const onThresholdReached = (threshold) => {
    dispatch(deliveriesActions.getCarriers(inputValue, threshold * 10));
  };

  useEffect(() => {
    debounce(timeout, () => {
      if (inputValue) dispatch(deliveriesActions.getCarriers(inputValue, 10));
    })
  }, [dispatch, inputValue]);

  return (
    <StyledDefaultFilter>
      <p>Filtrar por: <span>Transportadora</span></p>
      <StatefulSearchList
        onFocus={onFocus}
        Component={Input} 
        ref={inputRef}
        autoFilter={false}
        data={carriers.map(e => ({ data: e, value: e.name }))}
        onSelectItem={onSelectItem}
        icon={<Search />}
        placeholder="digite por nome ou CNPJ" 
        onChange={onChangeInput}
        onThresholdReached={onThresholdReached}
      />
      <BubbleList channel="selectedCarriers" filterValues={filterValues} />
    </StyledDefaultFilter>
  );
};

const DateFilter = () => {
  const dispatch = useDispatch();

  const startDate = useRef();
  const endDate = useRef();

  const filterValues = useSelector(s => s.deliveries.filters.dates); 
  const status = useSelector(s => s.deliveries.status); 

  const verifyValidDate = date => {
    const splitedDate = date.split('/');
    const newPatternDate = splitedDate[2] + '-' + splitedDate[1] + '-' + splitedDate[0];
    const createdDate = new Date(newPatternDate);

    console.log(createdDate.toString() === 'Invalid Date');
    if (createdDate.toString() === 'Invalid Date') return false;
    return true;
  };

  const handleAddDate = () => {
    const startDateValue = startDate.current.value;
    const endDateValue = endDate.current.value;

    if (!startDateValue || !endDateValue) return;

    if (!verifyValidDate(startDateValue) || !verifyValidDate(endDateValue)) return;

    const dateValue = `${startDateValue} a ${endDateValue}`;
    dispatch(deliveriesActions.setFilters('dates', dateValue));
  };

  useEffect(() => {
    const mask = { mask: '99/99/9999', placeholder: '__/__/___' };
    Inputmask(mask).mask(startDate.current);
    Inputmask(mask).mask(endDate.current);
  }, []);

  return (
    <StyledDefaultFilter>
      <p>Filtrar por: <span>Data de {status === 'shipped' ? 'Registro' : 'Finalização'}</span></p>
      <StyledSearchDiv>
        <p>Período de:</p>
        <Input ref={startDate} placeholder="digitar data" />
        <p>a</p>
        <Input ref={endDate} placeholder="digitar data" />
        <Search onClick={handleAddDate} />
      </StyledSearchDiv>
      <BubbleList channel="dates" filterValues={filterValues} />
    </StyledDefaultFilter>
  );
};

const BubbleList = ({ filterValues, channel }) => {
  return (
    <StyledBubbleList>
      {filterValues.map((value, key) => <Bubble { ... { channel, value, key }} />)}
    </StyledBubbleList>
  );
};

const Bubble = ({ value, channel }) => {
  const dispatch = useDispatch();

  const removeBubble = () => {
    dispatch(deliveriesActions.removeFilterBubble(channel, value));
  };

  return(
    <StyledBubble>
      <p>{channel === 'selectedCarriers' ? value.name : value}</p>
      <Close onClick={removeBubble} />
    </StyledBubble>
  );
};

export default Filters;