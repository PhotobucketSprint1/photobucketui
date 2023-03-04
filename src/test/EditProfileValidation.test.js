import { render, fireEvent, screen } from "@testing-library/react";

import EditProfile from "../views/EditProfile";

import { BrowserRouter } from "react-router-dom";


//test block
test("edit profile validation test", async() => {
// render the component on virtual dom
render( <BrowserRouter> <EditProfile  /> </BrowserRouter> );

//select the elements you want to interact with
const username = screen.getByTestId("usernameTest");
const email = screen.getByTestId("emailTest");
// const image = screen.getByTestId("imageTest");


const editBtn = screen.getByTestId("editBtnTest");

//interact with those elements
fireEvent.change(username,"");
fireEvent.change(email, "");
// const file = new File(['(⌐□_□)'], 'norris.png', { type: 'image/png' });
// fireEvent.change(image, file);
// fireEvent.change(image,image.b)
fireEvent.click(editBtn);
const msg = await screen.findByTestId("invalidUsernameTest");

//assert the expected result
expect(msg.textContent).toBe("Please enter username")
});