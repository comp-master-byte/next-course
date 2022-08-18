import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from '../../styles/user.module.scss';

export default function({user}) {

    const {query} = useRouter();

    return (
        <MainContainer keywords={user.name}>
            <div  className={styles.user}>
                <h1>Пользователь {query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
      props: {user}, // will be passed to the page component as props
    }
}