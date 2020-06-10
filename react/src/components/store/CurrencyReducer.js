const SWITCH_IS_FETCHING = 'SWITCH_IS_FETCHING';
const SET_CURRENCIES = 'SET_CURRENCIES';
const SET_RATE_DYNAMIC_DATA = 'SET_RATE_DYNAMIC_DATA';

let CrUpdState = {
    currencies : [],
    rateDynamicData : {},
    isFetching : false
};

const CurrencyReducer = (state = CrUpdState, action) => {
switch(action.type) {
    case 'SET_CURRENCIES':  {
        return {
            ...state,
            currencies : action.currencies,
        }
    }
    case 'SWITCH_IS_FETCHING':  {
        return {
            ...state,
            isFetching : action.isFetching,
        }
    }
    case 'SET_RATE_DYNAMIC_DATA':  {
        return {
            ...state,
            rateDynamicData : action.rateDynamicData,
        }
    }
    default :
        return state;
    }
}

export const setCurrencies = (props) => ({
    type: SET_CURRENCIES,
    currencies : props.currencies })

export const switchIsFetching = (props) => ({
    type: SWITCH_IS_FETCHING,
    isFetching: props.isFetching })

export const setRateDynamicData = (props) => ({
    type: SET_RATE_DYNAMIC_DATA,
    rateDynamicData: props.rateDynamicData })

export default CurrencyReducer;