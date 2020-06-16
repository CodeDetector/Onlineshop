import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem=({title,imageUrl,size,history,linkUrl,match})=>{
return(
    <div  className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
                <div className="contents">
                    <h1 className="title">{title}</h1>
                    <span className="Shop">Shop Now </span>
                </div>
        </div>
    
)
}

export default withRouter(MenuItem)