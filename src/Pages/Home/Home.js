import React, { useState } from 'react';
import styles from './Home.module.css';
import Header from './Header';
import { data } from '../../data';

const Home = () => {
    // console.log(data);
    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <div className={styles.body_main}>
            <Header />

            <body>
                <div className={styles.search_section}> <input type="search" placeholder='Search Contacts' onChange={(event) => { setSearch(event.target.value) }} /> </div>

                {/*  */}
                <section>
                    <table>
                        <thead>
                            <tr style={{ height: '35px', verticalAlign: 'middle' }}>
                                <th>SL</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((items) => (
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.first_name}</td>
                                    <td>{items.last_name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.phone}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </section>

            </body>
        </div>
    )
}

export default Home;