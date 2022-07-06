import { useState } from 'react';

// Fetchers
import { updateUser } from '../../fetchers';

const Update = ({ userID }) => {
    const [values, setValues] = useState({ userName: '', userID: userID });

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
        setValues((val) => ({ ...val, [inputName]: inputValue }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(values).then((response) => console.log(response));
    }

    return (
        <>
        {console.log(userID)}
        <form>
            <input onChange={handleChange} value={values.userName} name='userName' type='text' placeholder='Name' />
            <button onClick={handleSubmit}>Update</button>
        </form>
        </>
    )
}

export default Update;