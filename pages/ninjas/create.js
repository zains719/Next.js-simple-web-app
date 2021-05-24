import { useState } from "react";
import {useRouter} from 'next/router';
import Styles from '../../styles/Create.module.css'


const Create = () => {
    const [name, setName] = useState(); 
    const [email, setEmail] = useState(); 
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ninja = {name, email};

        fetch("http://localhost:8000/ninjas", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(ninja)
        })
        .then( () => {
            router.push('/ninjas')
        });
    }

    return ( 
        <div className={Styles.create}>
            <h2>Create a New Ninja</h2>
            <form onSubmit={handleSubmit}>
                <label>Ninja name: </label>
                <br/>
                <input className={Styles.form} 
                    type="text" 
                    required 
                    value={name}
                    onChange={e => {setName(e.target.value)}} 
                />
                <br/><br/>
                <label>Ninja email: </label>
                <br/>
                <input className={Styles.form} 
                    type="text" 
                    required 
                    value={email}
                    onChange={e => {setEmail(e.target.value)}} 
                />  
                <br/><br/>
                <input className={Styles.btn} type="Submit" value="Create" />
            </form>
        </div>
     );
}
 
export default Create;