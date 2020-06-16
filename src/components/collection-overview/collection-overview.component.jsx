import React from 'react' 
import {connect} from 'react-redux'
import Preview from '../preview/preview.component'
import { selectCollections } from '../../redux/shopPage/shop.selectors'
import {createStructuredSelector} from 'reselect'

const CollectionOverview=({match,collections})=>{
    console.log(match);
    return(
        <div className="collection-overview">
        {collections.map((previewList)=>
        (
            <Preview key={previewList.id} {...previewList}/>
        ))}</div>)
}

const mapStateToProps=createStructuredSelector(
        {
            collections:selectCollections
        }
    )


export default connect(mapStateToProps)(CollectionOverview)
