import { useRef } from "react";

import './Form.css';

const Form = (props) => {
    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        let value = inputRef.current.value;
        inputRef.current.value = '';
        props.onSubmit(value);
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <input ref={inputRef} type="text" placeholder="type something..."/>
            <button>Send</button>
        </form>
    )
};

export default Form;