import React from 'react'
import Alert from 'react-bootstrap/Alert'

interface ErrorMessageProps {
    children: React.ReactNode
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
    children
}) => {
        return (
            <Alert role="alert" variant="danger">
                {children}
            </Alert>
        );
}