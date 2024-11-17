import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { userApi } from "../User Service/userService.js";
import { utilApi } from "../Utility/util.js";

const registerTemp = () => html`
     <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onRegister}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    </div>
`;




let context = null;

export function showRegisterView(ctx,next){
    context = ctx;
    context.render(registerTemp());

}

async function onRegister(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email , password , rePass } = Object.fromEntries(formData.entries());

    if(email === '' || password === '' || rePass === '') return;

    if(rePass !== password) return;

    const userData = await userApi.register({email,password})
    // utilApi.setUserData('UserData',userData);
    if(userData.code > 205){
        alert(userData.message);
    }else{
        utilApi.setUserData(userData);
        context.updateNav();
        context.goTo('/');    
    }
    
    

    
  
}