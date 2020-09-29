import * as React from 'react';

import { ExampleComponent } from './ExampleComponent';

export default {
    title: 'Example Component',
    component: ExampleComponent,
};

export const ExampleComponentStory = () => (
    <ExampleComponent compulsoryProp='testing'></ExampleComponent>
);
