import React from 'react';
import styles from './Home.module.css';
import Header from './Header';

const Home = () => {
    return (
        <div className={styles.body_main}>
            <Header />

            <body>
                <div className={styles.search_section}> <input type="search" placeholder='Search Contacts' /> </div>
            </body>
        </div>
    )
}

export default Home;