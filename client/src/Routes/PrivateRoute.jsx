import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const PrivateRoute = () => (
    <Route
        
        render={props =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                <Navigate
                    to="/login" replace
                />
            )
        }
    ></Route>
);

export default PrivateRoute;