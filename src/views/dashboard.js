import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { furnitureApi } from "../Furniture Service/furnitureService.js";

const furnitureTemp = (item) => html `
     <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${item.img}" />
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href=”#” class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`


const dashboardTemp =  (items) => html `
     <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${items.map(item => furnitureTemp(item))}
        </div>
`;


export async function showDashBoard(ctx){
    const data = await furnitureApi.getAllFurnitures();

    ctx.render(dashboardTemp(data))
}

