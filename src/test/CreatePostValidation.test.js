import { render, fireEvent, screen } from "@testing-library/react";
import CreatePost from "../components/CreatePost";

//test block
test("create post validation test", async() => {
// render the component on virtual dom
render(<CreatePost />);

//select the elements you want to interact with
const title = screen.getByTestId("titleTest");
const description = screen.getByTestId("descriptionTest");
const image = screen.getByTestId("imageTest");


const saveBtn = screen.getByTestId("savePostBtn");

//interact with those elements
fireEvent.change(title,"");
fireEvent.change(description, "");
const file = new File(['(⌐□_□)'], 'norris.png', { type: 'image/png' });
fireEvent.change(image, "");
// fireEvent.change(image,image.b)
fireEvent.click(saveBtn);
const msg = await screen.findByTestId("invalidTitleTest");

//assert the expected resultPlease Enter Title
expect(msg.textContent).toBe("Please Enter Title")
});