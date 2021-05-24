import Styles from '../../styles/Ninja.module.css';
import {useRouter} from 'next/router';

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:8000/ninjas");
    const data =  await res.json();

    const paths = data.map(ninja => {
        return {
            params : {id : ninja.id.toString()}
        }
    });

    return {
        paths, 
        fallback: false
    };
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch("http://localhost:8000/ninjas/" + id);
    const data = await res.json();

    return {
        props: {ninja: data}
    };
}


const NinjaDetails = ({ninja}) => {
    const router = useRouter();

    const handleClick = (id) => {
        fetch("http://localhost:8000/ninjas/" + id, {
            method: 'DELETE'
        })
        .then(() =>{
            router.push('/ninjas');
        })
    }

    return ( 
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <button className={Styles.btn} onClick={() => {handleClick(ninja.id)}}>
                Delete Ninja
            </button>
        </div>
     );
}
 
export default NinjaDetails
