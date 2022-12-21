import styles from "./index.module.css"
import User from "../User";
import { useState } from "react";
import Button from "components/Button/Button";

import usersData from "./users.json"
import PageContainer from "components/PageContainer";

const Users =()=>{
    const[isDarkMode,setIsDarkMode]=useState(true)
    return (
        <PageContainer>
        <div className={`${styles.usersContainer} ${isDarkMode ? styles.darkMode:""}`}>
             <Button 
             txt={`${isDarkMode?"🌞":`🌚`}`}
            clickleyende={()=>{
            setIsDarkMode(!isDarkMode)
            }}/>
            <h1 className={styles.basliq}>Memory Cards</h1>
            <div className={styles.cardContainer}>
                {
                    usersData.map((user)=>{
                        return <User key={user.id} 
                        imgSrc={`/img/${user.img}.jpg`}
                         basliq={user.username} 
                         description={user.job} />
            
                    })}
            </div>
        </div>
        </PageContainer>
    )
}
export default Users;