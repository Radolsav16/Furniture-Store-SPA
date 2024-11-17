import { furnitureApi } from './Furniture Service/furnitureService.js';
import { userApi } from './User Service/userService.js';
import { utilApi } from './Utility/util.js';
import { requestApi } from './requester.js';
import { showLoginView } from './views/login.js';
import { showLogoutView } from './views/logout.js';
import { showRegisterView } from './views/register.js';
import { showCreateFurnitureView } from './views/createFurniture.js';
import { showDetailsView } from './views/detailsFurniture.js';
import { showEditView } from './views/editFurniture.js';
import { showDashBoard } from './views/dashboard.js';
import { myFurnitureView } from './views/myFurniture.js';
import { deleteView } from './views/deleteFurniture.js';

import { html ,render } from '../node_modules/lit-html/lit-html.js';
import  page  from '../node_modules/page/page.mjs';



const container = document.getElementById('container');
const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

page(updateCTX);
page('/',showDashBoard);
page('/register',showRegisterView);
page('/login',showLoginView);
page('/logout',showLogoutView)

page.start();


initNavigation();

function initNavigation(){
    const user = utilApi.getUserData();

    if(user){
        userNav.style.display = 'inline-block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'inline-block';
    }
}

function renderer(temp){
    render(temp,container);
}

function goTo(direction){
    page.redirect(direction)
}



function updateCTX(ctx,next){
    ctx.render = renderer;
    ctx.updateNav = initNavigation;
    ctx.goTo = goTo;
    next();
}