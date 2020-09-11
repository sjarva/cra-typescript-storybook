import * as React from "react";
import { shallow } from "enzyme";
import { MyComponent } from "./MyComponent";
it("Renders without crashing", () => {
  const wrapper = shallow(React.createElement(MyComponent, null));
  expect(wrapper).toMatchSnapshot();
});
//# sourceMappingURL=MyComponent.test.js.map