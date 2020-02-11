import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SideboardComp from './SideboardComp';

describe('sideboard load', () => {

  let container = null; //set a container

  beforeEach(() => { //runs before each test in the describe function (sets up)
    // setup a DOM element as a render target
    container = document.createElement("div"); //create a div
    document.body.appendChild(container); //append container to div
  });

  afterEach(() => { //runs after each test in the descripe function (cleans up)
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('click button', () => {
    // setup mock button function
    const mockFx = jest.fn(); // mock function a fake function so htat you can see how it is being called (think console.log in a way)
    act(() => {
      render(
        <SideboardComp
          buttonFunction={mockFx} //passing mock function as props to buttons
        />, container //setting the sideboardcomp in the container
      );
    });
    // identify the buttons
    const up = document.getElementById("up"); 
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    // click up
    act(() => {// do this thing. act may or may not be necessary, do more research
      up.dispatchEvent(new MouseEvent("click", { bubbles: true })); //make a click event, bubbles=true makes sure it bubbles up
    });
    expect(mockFx.mock.calls.length).toBe(1); //check for one click
    expect(mockFx.mock.calls[0][1]).toBe(0); //check what pressing the button returns
    expect(mockFx.mock.calls[0][2]).toBe(-100);//check what pressing the button returns
    // click down
    act(() => {
      down.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(mockFx.mock.calls.length).toBe(2);
    expect(mockFx.mock.calls[1][1]).toBe(0);
    expect(mockFx.mock.calls[1][2]).toBe(100);
    // click left
    act(() => {
      left.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(mockFx.mock.calls.length).toBe(3);
    expect(mockFx.mock.calls[2][1]).toBe(-100);
    expect(mockFx.mock.calls[2][2]).toBe(0);
    // click right
    act(() => {
      right.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(mockFx.mock.calls.length).toBe(4);
    expect(mockFx.mock.calls[3][1]).toBe(100);
    expect(mockFx.mock.calls[3][2]).toBe(0);
  });
});