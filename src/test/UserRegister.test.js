import { render, fireEvent, screen,  } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Register from "../components/auth/Register";


//test block
describe('Register component', () => {
test("User Register test", async() => {

render(<BrowserRouter><Register /></BrowserRouter>);

//select the elements you want to interact with

const username = screen.getByTestId("usernameTest");
const email = screen.getByTestId("emailTest");
const password = screen.getByTestId("passwordTest");
const image = screen.getByTestId("imageTest");

const registerBtn = screen.getByTestId("registerBtnTest");
//interact with those elements

fireEvent.change(username,"testusername");
fireEvent.change(password, "test");
fireEvent.change(email, "test@gmail.com");
const file = new File(['(⌐□_□)'], 'norris.png', { type: 'image/png' });
fireEvent.change(image, file);


// fireEvent.change(image,image.b)
fireEvent.click(registerBtn);
const msg = await screen.findByTestId("successMsg");


//assert the expected result
expect(msg.textContent).toBe("User Added !")
})


test("Registration Validation Test", async()=>{
    render(<BrowserRouter><Register /></BrowserRouter>);


    const username = screen.getByTestId("usernameTest");
    const email = screen.getByTestId("emailTest");
    const password = screen.getByTestId("passwordTest");
    const image = screen.getByTestId("imageTest");
    const registerBtn = screen.getByTestId("registerBtnTest");


    fireEvent.change(username,"");
    fireEvent.change(password, "");
    fireEvent.change(email, "");
    const file = new File(['(⌐□_□)'], 'norris.png', { type: 'image/png' });
    fireEvent.change(image, "");

    
    fireEvent.click(registerBtn);
    const msg = await screen.findByTestId("invalidUsernameTest");

    expect(msg.textContent).toBe("Please Enter Username")

})


});
