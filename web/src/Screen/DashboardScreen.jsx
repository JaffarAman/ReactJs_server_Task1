import React from 'react'
import ButtonAppBar from '../Components/Drawer'
import TodoApp from './TodoApp'
import UserProfile from './UserProfile'


const DashboardScreen = () => {
    return (
        <div>
         <ButtonAppBar />
            <div>
                {/* <TodoApp /> */}
                <UserProfile     />
            </div>

        </div>
    )
}

export default DashboardScreen
