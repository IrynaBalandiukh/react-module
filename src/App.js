import {useState, useEffect} from 'react';

import Form from './components/Form';
import Users from './components/Users';
import {userService} from './services/user.service';

function App() {
    const [users, setUsers] = useState([]);
    const [filetredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, [])

    const getFilter = (data) => {
        let filterArray = [...users];

        if(data.name) {
            filterArray = filterArray.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }

        if(data.username) {
            filterArray = filterArray.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }

        if(data.email) {
            filterArray = filterArray.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }

        setFilteredUsers(filterArray)
    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filetredUsers}/>
        </div>
    );
}

export default App;
