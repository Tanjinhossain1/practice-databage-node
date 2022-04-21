import React from 'react';

const AddUser = () => {
    const handleToAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const user = { name, email, password }
        

    }
    return (
        <div>
            <h1>Add USer ok </h1>
            <form onSubmit={handleToAddUser}>
                <input type="text" name='name' />
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;