import React from "react";
import { shallow } from "enzyme";
import Header from "../components/Header";
test("renders the component", () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});
