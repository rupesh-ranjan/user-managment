// import {useState} from 'react';
import Card from '../UI/Card';
import'./UserList.css';


const UserList = (props) => {

   
    return (
        <Card className="users">
            <ul>
            {props.users.map(user => (
                <li key={Math.random().toString()}>{`${user.userName} (${user.userAge} years old)`}</li>
            ))}
            </ul>
        </Card>
    );
}

export default UserList;