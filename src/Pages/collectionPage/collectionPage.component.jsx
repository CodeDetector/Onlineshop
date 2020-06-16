import React from 'react';
import { connect } from 'react-redux';

import Item from '../shopPage/Item.component';

import { selectCollection } from '../../redux/shopPage/shop.selectors';

import './collectionPage.styles.scss';

const CollectionPage = ({ collection ,match}) => {
  const { title, items } = collection;
  console.log(match);
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default (connect(mapStateToProps)(CollectionPage));