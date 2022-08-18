import Head from "next/head";
 import A from "./A";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={'karen, demonDeveloper' + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href='/' text='Главная' />
                <A href='/users' text='Пользователи' />
            </div>
            {children}
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </>
    )
}

export default MainContainer;
