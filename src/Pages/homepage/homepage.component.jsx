import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
// import {Route,Link} from 'react-router-dom'

const Homepage=(props)=>{
    return(
        <div className="homepage">
            <Directory/>
            {console.log(props)}
        </div>
    )
}
export default Homepage