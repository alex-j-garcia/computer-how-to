import { useState } from 'react';
import PropTypes from 'prop-types';

function Toggler(props) {
    const { component: C, defaultOnValue, ...otherProps } = props;
    const [isToggled, setIsToggled] = useState(defaultOnValue);

    const toggle = () => setIsToggled(prev => !prev);

    return (
        <C
           toggle={toggle}
           on={isToggled}
           {...otherProps}
        />
    );
}

Toggler.propTypes = {
    component: PropTypes.func.isRequired,
    defaultOnValue: PropTypes.bool.isRequired,
}

export default function withToggler(component, options) {
    return function(props) {
        return (
            <Toggler component={component} 
                     defaultOnValue={options.defaultOnValue} 
                     {...props} 
            />
        );
    }
}