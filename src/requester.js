import { utilApi } from "./Utility/util.js";

async function requester(url,method,data) {
    const options = {
        method,
        headers:{}
    }

    const accessToken = utilApi.getAccessToken();

    if(accessToken){
        options.headers['x-authorization'] = accessToken;
    }


    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url,options);

        return await response.json();
    }catch(err){
        alert(err.message);
    }

}


async function get(url){
    return await requester(url,'GET');
}

async function post(url,data){
    return await requester(url,'POST',data);
}

async function put(url,data){
    return await requester(url,'PUT',data);
}

async function del(url){
    return await requester(url,'DELETE');
}






export const requestApi  = {
    get,post,put,del
}