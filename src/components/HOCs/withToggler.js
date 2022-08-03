import { useState } from 'react';

function Toggler(props) {
    const { component: C, defaultOnValue, ...otherProps } = props;
    const [isToggled, setIsToggled] = useState(defaultOnValue);

    return (
        <C
           handleClick={setIsToggled} 
           on={isToggled}
           {...otherProps}
        />
    );
}

export default function(component, options) {
    return function(props) {
        return (
            <Toggler component={component} 
                     defaultOnValue={options.defaultOnValue} 
                     {...props} 
            />
        );
    }
}