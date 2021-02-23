import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ErrorMessage } from '../../components';

/**
 * Form Search with error validation 
 *  and Button showing loading text while fetching data.
 * Used `useReducer` instead of two `useState` calls.  
 */

interface SearchFormProps {
    isLoading: boolean,
    labelText: string,
    placeHolderText: string,
    errorText: string,
    searchDispatch: (searchTerm:string) => void
}

export const SearchForm: React.FC<SearchFormProps> = ({
    isLoading,
    labelText,
    placeHolderText, 
    errorText,
    searchDispatch
}) => {

    interface DefaultState {
        isError: boolean,
        inputVal: string
    }

    interface DefaultAction {
        type: string,
        payload: string
    }

    const initialState: DefaultState = { 
        isError: false, 
        inputVal: ''
    }
    
    function reducer(state: DefaultState, action: DefaultAction) {
        switch (action.type) {
            case 'updateInput': 
                return { isError: false, inputVal: action.payload }
            case 'updateError': 
                return { isError: true, inputVal: action.payload }
            default:
                return state
        }
    }

    const [state, dispatchState] = React.useReducer(reducer, initialState);

    const { isError, inputVal } = state;

    /* Submit handler for Form post */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        event.stopPropagation();
        const submittedVal = inputVal.trim();
        if (submittedVal === '') {
            /* Trigger Error if Input Text Field is Empty */                    
            dispatchState({
                type: "updateError", 
                payload: ''
            });
        } else {
            searchDispatch(submittedVal);
            dispatchState({ 
                type: "updateInput", 
                payload: ''
            });
        }
    };
    
    /* OnChange handler for Input box */
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        dispatchState({ 
            type: "updateInput", 
            payload: event.target.value
        });
    };

    return (
        <>
            {isError && <ErrorMessage>{ errorText }</ErrorMessage>}            
            <Form onSubmit={ handleSubmit }>
                <Form.Group controlId="searchInput">
                    <Form.Label>
                        { labelText }
                    </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder={ placeHolderText }  
                        value={ inputVal }
                        onChange={ handleInputChange }
                    />
                    <Form.Control.Feedback 
                        type="invalid"
                    >
                        { errorText }
                    </Form.Control.Feedback>
                </Form.Group>
                <Button
                    type="submit"
                    variant="primary"
                    disabled={ isLoading }
                >
                {isLoading ? 'Loading…' : 'Search'}
                </Button> 
            </Form>
        </>
    );
}