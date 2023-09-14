import { useState } from 'react';
import './AddUser.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

const INTIAL_USERDATA = {
    userName: '',
    userAge: ''
}

const AddUser = (props) => {
    const [userData, setUserData] = useState(INTIAL_USERDATA);
    const [error, setError] = useState();

    const userNameChangeHandler = (event) => {
        setUserData({ ...userData, userName: event.target.value });
    }
    const userAgeChangeHandler = (event) => {
        setUserData({ ...userData, userAge: event.target.value });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (userData.userName.trim().length === 0 || Number(userData.userName.trim())) {
            setError({ message: "Invalid user name value" });
            return;
        }
        if (userData.userAge.trim().length === 0 || Number(userData.userAge.trim()) < 0) {
            setError({ message: "Invalid age value" });
            return;
        }
        props.onAddUser(userData);
        setUserData(INTIAL_USERDATA);
    }

    const errorHandler = () => {
        setError(null);
    };


    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} message={error.message} />}
            <Card className="input" >
                <form onSubmit={submitHandler}>
                    <label htmlFor="" >Username</label>
                    <input type="text" id="userName" value={userData.userName} onChange={userNameChangeHandler} />

                    <label htmlFor="" >Age(Years)</label>
                    <input type="number" value={userData.userAge} onChange={userAgeChangeHandler} />

                    <Button type="submit">AddUser</Button>
                </form>
            </Card>
        </div>
    );
}
export default AddUser;