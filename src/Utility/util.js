
function getUserData(){
    return sessionStorage.getItem('UserData') && JSON.parse(sessionStorage.getItem('UserData'));
}

function setUserData(data){
    sessionStorage.setItem('UserData',JSON.stringify(data))
};

function clearUserData(){
    sessionStorage.clear();
};


function getAccessToken(){
   const data = getUserData();
   return data?.accessToken;

}


function getUserId(){
    const data = getUserData();
    return data?._id;
}

function hasOwner(ownerId){
    const id = getUserId();
    return id === ownerId;
}


export const utilApi = {
    getUserData,
    setUserData,
    clearUserData,
    hasOwner,
    getAccessToken
}
