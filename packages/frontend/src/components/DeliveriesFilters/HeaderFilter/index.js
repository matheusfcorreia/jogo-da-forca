import React, { useRef, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@softcenter/react-basic-components';

import { Filter, Reload, Search } from '../../../assets/icons'; 
import { 
  StyledHeaderFilter,
  ShowFilters,
  ReloadDiv,
  ReloadBar,
} from './style';

import { Creators as deliveriesActions } from '../../../store/ducks/socket';

import debounce from '../../../util/debounce';

const HeaderFilter = ({ setShow }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const timeout = useRef();
  
  const inputValue = useSelector(s => s.deliveries.filters.general);

  const onChange = (e) => {
    debounce(timeout, () => {
      dispatch(deliveriesActions.setFilters('general', inputRef.current.value));
    });
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = inputValue;
  }, [inputValue])

  return (
    <StyledHeaderFilter>
      <ShowFilters onClick={() => setShow(value => !value)} >
        <Filter />
        <p>Mostrar Filtros</p>
      </ShowFilters>
      <Input ref={inputRef} placeholder="Pesquisar" icon={<Search/>} onChange={onChange} />
      <ReloadDiv>
        <ReloadBar />
        <Reload onClick={() => dispatch(deliveriesActions.getDeliveries())} />
      </ReloadDiv>
    </StyledHeaderFilter>
  );
};

export default HeaderFilter;
