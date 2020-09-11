import * as React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

/*
storiesOf("Button", module).add("Default button", () => (
    <Button label="TESTING"></Button>
));*/

export default {
    title: "Button",
    component: Button,
};

export const DefaultWithoutLabel = () => <Button label="TESTING"></Button>;
