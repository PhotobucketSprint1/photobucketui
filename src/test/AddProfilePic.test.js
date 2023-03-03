import { render, fireEvent, screen } from "@testing-library/react";

import AddProfilePic from "../components/AddProfilePic";
import { BrowserRouter } from "react-router-dom";




test("add profile test", async() => {
// render the component on virtual dom
render(<BrowserRouter><AddProfilePic /></BrowserRouter>);

const profilePic = screen.getByTestId("profileTest");

const saveBtn = screen.getByTestId("saveBtnTest");

//interact with those elements
const file = new File(['(⌐□_□)'], 'norris.png', { type: 'image/png' });
fireEvent.change(profilePic,file);

fireEvent.click(saveBtn);
const msg = await screen.findByTestId("successMsg");

//assert the expected result
expect(msg.textContent).toBe("Profile Picture Added !")
});