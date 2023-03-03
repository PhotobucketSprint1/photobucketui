import { render, fireEvent, screen } from "@testing-library/react";
import CreatePost from "../components/CreatePost";

//test block
test("create post test", async() => {
// render the component on virtual dom
render(<CreatePost />);

//select the elements you want to interact with
const title = screen.getByTestId("titleTest");
const description = screen.getByTestId("descriptionTest");
const image = screen.getByTestId("imageTest");


const saveBtn = screen.getByTestId("savePostBtn");

//interact with those elements
fireEvent.change(title,"TESTPOST");
fireEvent.change(description, "TESTTINGNNGNGNGNGNGNGN");
const file = new File(['(⌐□_□)'], 'norris.png', { type: 'image/png' });
fireEvent.change(image, file);
// fireEvent.change(image,image.b)
fireEvent.click(saveBtn);
const msg = await screen.findByTestId("successMsg");

//assert the expected result
expect(msg.textContent).toBe("Posted !")
});