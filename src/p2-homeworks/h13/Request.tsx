import React, {useEffect, useState} from "react";
import {requestAPI} from "./RequestsAPI";


function Request() {

    const [checkboxValue, setCheckboxValue] = useState(false)
    const [response, setResponse] = useState('')
    const [responseErr, setResponseErr] = useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
    }

    useEffect(() => {
        requestAPI.authTest(checkboxValue)
            .then(res => {
                setResponse(JSON.stringify(res.data))
            })
            .catch(err => {
                setResponseErr(JSON.stringify(err.response))
            })
    }, [checkboxValue])

    return (
        <div>
            Request component
            <input type='checkbox'
                   checked={checkboxValue}
                   onChange={changeHandler}/>
            {checkboxValue
                ? <div>Response - {response}</div>
                : <div>Error - {responseErr}</div>
            }
        </div>

    );
}

export default Request;