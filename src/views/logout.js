import { utilApi } from "../Utility/util.js";



export function showLogoutView(ctx){
    utilApi.clearUserData();

    ctx.updateNav();
    ctx.goTo('/');
}