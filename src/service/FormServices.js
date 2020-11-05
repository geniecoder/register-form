import { setFormData } from '../actions/register.actions';
import { BASE_URL, URL_FOMR_DATA, URL_SUBMIT_FORM } from './ApiUrl';
import { GetApiRequest, PostApiRequest } from './ApiCall';


export const getFormData = async () => {
  try {
    const response = await GetApiRequest(`${BASE_URL}${URL_FOMR_DATA}`)
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const submitFormData = async (body) => {
  try {
    const response = await PostApiRequest(`${BASE_URL}${URL_SUBMIT_FORM}`, body)
    return response;
  } catch (error) {
    console.log(error);
  }
}

