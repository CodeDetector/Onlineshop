import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectSection} from '../../redux/directory/directory.selectors'

const Directory=({sections})=>{

        
        return(
            <div className="directory-menu">
            {sections.map(({id,...otherSectionComponents})=>(<MenuItem key={id} {...otherSectionComponents}/>))}
            </div>
            )

}

const mapStateToProps=createStructuredSelector(
  {
    sections:selectSection
  }
)

export default connect(mapStateToProps)(Directory)
