import { render, fireEvent, screen } from "@testing-library/react";

import PostCard from "../views/PostCard";
import { BrowserRouter } from "react-router-dom";

//test block
test("create post test", async() => {
// render the component on virtual dom
render( <BrowserRouter><PostCard /></BrowserRouter> );

//select the elements you want to interact with

const deleteBtn = screen.getByTestId("deleteBtnTest");

//interact with those elements

fireEvent.click(deleteBtn);
const msg = await screen.findByTestId("successMsg");

//assert the expected result
expect(msg.textContent).toBe("Post Deleted !")
});