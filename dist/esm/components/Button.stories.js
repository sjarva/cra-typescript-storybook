import * as React from "react";
import { Button } from "./Button";
/*
storiesOf("Button", module).add("Default button", () => (
    <Button label="TESTING"></Button>
));*/

export default {
  title: "Button",
  component: Button
};
export const DefaultWithoutLabel = () => React.createElement(Button, {
  label: "TESTING"
});
//# sourceMappingURL=Button.stories.js.map