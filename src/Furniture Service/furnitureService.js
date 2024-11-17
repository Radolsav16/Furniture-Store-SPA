import { requestApi } from "../requester.js";

const BASE_URL = 'http://localhost:3030/data';

const endpoints = {
    furnitures:'/catalog',
    myFurnitures:id => `/catalog?where=_ownerId%3D%22${id}%22`
};


async function getAllFurnitures(){
    return await requestApi.get(BASE_URL + endpoints.furnitures)
} 


async function createFurnitures(data){
    return await requestApi.post(BASE_URL + endpoints.furnitures,data)
} 

async function detailsFurniture(id){
    return await requestApi.get(BASE_URL + endpoints.furnitures + '/' + id);
} 

async function updateFurniture(data,id){
    return await requestApi.put(BASE_URL + endpoints.furnitures + '/' +id)
} 

async function deleteFurnitures(data,id){
    return await requestApi.del(BASE_URL + endpoints.furnitures + '/' + id);
} 

async function myFurniture(id){
    return await requestApi.get(BASE_URL + endpoints.myFurnitures(id));
} 


export const furnitureApi = {
    getAllFurnitures,
    createFurnitures,
    detailsFurniture,
    updateFurniture,
    deleteFurnitures,
    myFurniture
};