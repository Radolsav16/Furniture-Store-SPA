import { html } from "../../node_modules/lit-html/lit-html.js";
import { userApi } from "../User Service/userService.js";
import { utilApi } from "../Utility/util.js";


const loginTemp = () => html `
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit = ${onLogin}>
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
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>
`;




let context = null;

export async  function showLoginView(ctx){
    context = ctx;
    context.render(loginTemp());
    context
}

async function onLogin(e){
    e.preventDefault();
    const formData = new FormData();
    const { email , password } = Object.fromEntries(formData.entries());

    if(email === '' || password === '') return;

     const userData = await userApi.login({email,password});
     utilApi.setUserData(userData);
     context.updateNav();
     context.goTo('/');

}