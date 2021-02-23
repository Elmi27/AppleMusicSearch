import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { MAIN_HEADING_TEXT } from '../../Constants';
import { FormWrapper } from '../../Wrapper';

export const HeroBanner: React.FC = () => {
  return (
        <>
            <Jumbotron>
                <div className="container">
                    <h1>{ MAIN_HEADING_TEXT }</h1>
                    <FormWrapper />
                </div>
            </Jumbotron>
        </>
  );
}