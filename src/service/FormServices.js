import { setFormData } from '../actions/register.actions';
import { BASE_URL, URL_FOMR_DATA } from './ApiUrl';
import { GetApiRequest } from './ApiCall';


export const getFormData = async () => {
  try {
    const response = await GetApiRequest(`${BASE_URL}${URL_FOMR_DATA}`)
    return response;
  } catch (error) {
    console.log(error);
  }
  //return GetApiRequest(`${BASE_URL}${URL_FOMR_DATA}`);
}

export const fetchData = async () => {
  try {
    const response = await fetch("https://5fa27aacba0736001613bb59.mockapi.io/api/v1/colorlist");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

