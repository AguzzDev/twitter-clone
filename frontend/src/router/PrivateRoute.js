import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    Authenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (Authenticated)
                    ? <Component {...props} />
                    : <Redirect to="/" />
            )}
        />

    )
}

PrivateRoute.propTypes = {
    Authenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
