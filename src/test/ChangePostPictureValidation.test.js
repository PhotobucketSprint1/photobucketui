import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EditPostPicture from "../components/EditPostPicture";

//test block
test("change post pic validation test", async() => {
// render the component on virtual dom
render( <BrowserRouter><EditPostPicture /></BrowserRouter> );

//select the elements you want to interact with

const editPostBtn = screen.getByTestId("changeBtnTest");
const postPic = screen.getByTestId("postPicTest");

//interact with those elements

const file = new File(['(⌐□_□)'], 'norris.png', { type: 'image/png' });
fireEvent.change(postPic,"");

fireEvent.click(editPostBtn);
const msg = await screen.findByTestId("invalidImage");

//assert the expected result
expect(msg.textContent).toBe("Please Select Image")
});