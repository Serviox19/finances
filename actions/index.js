import axios from 'axios';
import { TRANS_FETCH } from './types';


export const transFetch = () => {
  return (dispatch) => {
    axios.get('https://shrouded-scrubland-99138.herokuapp.com/api/trans')
      .then(response => {
        const data = response.data;
        dispatch({ type: TRANS_FETCH, payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
