import Axios from 'axios';

export const GetApiRequest = (url) => {
    console.log(`GetApiRequest url: ${url}`)
    return Axios.get(url).then(response => {
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
    }).catch(error => {
        console.log(`error; ${error}`);
    })
}

export const PostApiRequest = (url, body) => {
    console.log(`url: ${url}`);
    console.log(`body: ${body}`);
    return Axios.post(
        url,
        body,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
    ).then(response => {
        if(response.status === 201){
            console.log(`post response1: ${response.data}`)
            return response.data;
        }
    })
}

