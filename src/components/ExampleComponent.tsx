import * as React from 'react';

export interface ExampleProps {
    /**
     * Describe shortly and clearly what each prop is for.
     *
     * Describe shortly what this prop affects (e.g. styles, other props or prop combinations).
     *
     * @example
     *
     * Each prop and component should also have a mention of the version they were first published in.
     * @version 0.3
     */
    compulsoryProp: string;

    /**
     *
     * Especially with optional props, it's important to document what the prop will default to.
     * @default 'mostOftenUsedWord'
     *
     */
    optionalProp?: string;

    /**
     * Some features that are needed, but haven't been implemented yet, should be documented with the
     * todo tag. For example, this prop's basic functionality has been implemented, but some details
     * are still missing.
     *
     * @todo We have talked about adding another theme option for this prop, the designs aren't ready yet.
     *
     * @todo We should also check the accessibility concerns related to this one.
     */
    propWithTodos: string;
}

/**
 *
 * @param compulsoryProp A text that is shown in the component.
 *
 *
 * Provide a short example code snippet of how to use this component.
 * @example
 *      <ExampleComponent compulsoryProp="testing" optionalProp="some value"></ExampleComponent>
 *
 *
 * You can also provide another example if needed. This is especially useful, if you can provide
 * another design system component as a child or parent to this component.
 * @example
 *      <ExampleComponent compulsoryProp="nesting">
 *          <IconExample></IconExample>
 *      </ExampleComponent>
 */

export const ExampleComponent: React.FC<ExampleProps> = ({
    compulsoryProp,
    optionalProp = 'mostOftenUsedWord',
    propWithTodos,
}) => {
    return (
        <div>
            Example component <span>{compulsoryProp}</span> and{' '}
            <span>{optionalProp}</span>
        </div>
    );
};
