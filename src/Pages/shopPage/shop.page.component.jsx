  
import React from 'react';
import { Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collectionPage/collectionPage.component'
import { Switch } from 'react-router-dom';


const ShopPage = ({ match }) => (
   
  <div className='shop-page'>
    {console.log(match)}
    <Switch>
    <Route path={`/shop/:collectionId`} component={CollectionPage} />
    <Route exact path={`/shop`} component={CollectionsOverview} />
    </Switch>
  </div>
);

export default (ShopPage);