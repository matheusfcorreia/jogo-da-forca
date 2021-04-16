import produce from 'immer';
import { createActions, createReducer } from 'reduxsauce'; 

const STATE = {
  deliveries: [],
  limit: 8,
  totalDocs: 0,
  loadMoreClicks: 1,
  hasNextPage: false,
  selectedDelivery: null,
  status: '',
  carriers: [],
  filters: {
    general: '',
    selectedCarriers: [],
    dates: [],
  }
};

export const { Types, Creators } = createActions({
  getDeliveries: null,
  setDeliveries: ['deliveries'],
  getCarriers: ['inputValue', 'limit'],
  setCarriers: ['carriers'],
  setTotalDocs: ['value'],
  setHasNextPage: ['value'],
  setFilters: ['channel', 'value'],
  clearAllFilters: null,
  setLimit: ['value'],
  setStatus: ['value'],
  setLoadMoreClicks: ['value'],
  removeFilterBubble: ['channel', 'value'],
  setSelectedDelivery: ['value'],
});

const setDeliveries = (state = STATE, action) => {
  return produce(state, s => {
    s.deliveries = action.deliveries;
  });
}

const setCarriers = (state = STATE, action) => {
  return produce(state, s => {
    s.carriers = action.carriers;
  });
}

const setTotalDocs = (state = STATE, action) => {
  return produce(state, s => {
    s.totalDocs = action.value;
  });
}

const setHasNextPage = (state = STATE, action) => {
  return produce(state, s => {
    s.hasNextPage = action.value;
  });
}

const setLimit = (state = STATE, action) => {
  return produce(state, s => {
    s.limit = action.value;
  });
}
const setStatus = (state = STATE, action) => {
  return produce(state, s => {
    s.status = action.value;
  });
}

const setLoadMoreClicks = (state = STATE, action) => {
  return produce(state, s => {
    s.loadMoreClicks = action.value;
  });
}

const setFilters = (state = STATE, action) => {
  const { channel, value } = action;
  return produce(state, s => {
    switch (channel) {
      case 'dates':
        if (!s.filters[channel].includes(value)) s.filters[channel].push(value);
        break;
      case 'selectedCarriers':
        if (!s.filters[channel].find(carrier => carrier._id === value._id)) 
          s.filters[channel].push(value);
        break;
      default: 
        s.filters[channel] = value;
    };
  });
}

const clearAllFilters = (state = STATE, action) => {
  return produce(state, s => {
    s.filters = STATE.filters;
  });
};

const removeFilterBubble = (state = STATE, action) => {
  const { channel, value } = action;
  return produce(state, s => {
    let valueIndex;
    if (channel === 'selectedCarriers') {
      s.filters[channel].forEach((carrier, index) => {
        if (carrier._id === value._id) valueIndex = index;
      });
    } else {
      valueIndex = s.filters[channel].indexOf(value);
    }
    s.filters[channel].splice(valueIndex, 1);  
  });
};

const setSelectedDelivery = (state = STATE, action) => {
  return produce(state, s => {
    s.selectedDelivery = action.value;
  });
};

export default createReducer(STATE, {
  [Types.SET_DELIVERIES]: setDeliveries,
  [Types.SET_CARRIERS]: setCarriers,
  [Types.SET_TOTAL_DOCS]: setTotalDocs,
  [Types.SET_HAS_NEXT_PAGE]: setHasNextPage,
  [Types.SET_FILTERS]: setFilters,
  [Types.SET_LIMIT]: setLimit,
  [Types.SET_STATUS]: setStatus,
  [Types.SET_LOAD_MORE_CLICKS]: setLoadMoreClicks,
  [Types.REMOVE_FILTER_BUBBLE]: removeFilterBubble,
  [Types.SET_SELECTED_DELIVERY]: setSelectedDelivery,
  [Types.CLEAR_ALL_FILTERS]: clearAllFilters,
})