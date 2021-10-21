import React from "react"
import styles from "./UserPro.module.css"
import PersonIcon from '@mui/icons-material/Person';
const UserProfile = ()=> {
    const data = JSON.parse(localStorage.getItem("data"))
    console.log(data);
    return(
        <div className={styles.mainProBox}>

                <section className={styles.profileCard}>

                

                <div className={styles.profilePic}>

                    <PersonIcon style={{fontSize : '120px'}} />      

                </div>

                <div className={styles.userDetailsBox}>

                    <ul>
                        <li>
                            <h4>USER DETAILS</h4>
                        </li>
                        <li><b>First Name: </b> {data.firstName} </li>
                        <li><b>Last Name: </b> {data.lastName} </li>
                        <li><b>Email Address: </b> {data.emailAddress} </li>
                        {/* <li><b>First Name: </b> {data.firstName} </li> */}

                    </ul>



                </div>
                </section>
        </div>
    )  
}

export default UserProfile