import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            jhjbnhnhb
            {error.message}
        </div>
    );
};

export default ErrorPage;