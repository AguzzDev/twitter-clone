import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types';

export const PublicRoute = ({
    Authenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={(props) => (
                (!Authenticated)
                    ? <Component {...props} />
                    : <Redirect to="/home" />
            )}
        />

    )
}

PublicRoute.propTypes = {
    Authenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}