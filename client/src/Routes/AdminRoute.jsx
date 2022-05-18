import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() && isAuth().role === 'admin' ? (
                <Component {...props} />
            ) : (
                <Navigate
                    to="/signin" replace
                />
            )
        }
    ></Route>
);

export default AdminRoute;