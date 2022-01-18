import React, {useState} from 'react';


const Form = ({getFilter}) => {
    const [form, setForm] = useState({name:'', username:'', email:''})

    const onSubmit = (e) => {
        e.preventDefault();
        setForm(form);
        console.log(form)
    }

    const onChange = (e) => {
        e.preventDefault();
        const eventData = {...form, [e.target.name]:e.target.value};
        setForm({...form, ...eventData});
        getFilter(eventData)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name <input type="text" name={'name'} value={form.name} onChange={onChange}/></label>
                <label>Username <input type="text" name={'username'} value={form.username} onChange={onChange}/></label>
                <label>Email <input type="text" name={'email'} value={form.email} onChange={onChange}/></label>
                <button>find</button>
            </form>
        </div>
    );
};

export default Form;