import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("renders empty todo list", () => {
  const { queryByRole } = render(<Todo />);
  const listElement = queryByRole("list");
  expect(listElement.children.length).toBe(0);
});

test("adds new item to todo list", () => {
  const { getByLabelText, queryByRole } = render(<Todo />);
  const inputElement = getByLabelText(/add new todo/i);
  const listElement = queryByRole("list");

  fireEvent.change(inputElement, { target: { value: "Walk the dog" } });
  fireEvent.submit(inputElement);

  expect(listElement.children.length).toBe(1);
  expect(listElement.firstChild.textContent).toContain("Walk the dog");
});


