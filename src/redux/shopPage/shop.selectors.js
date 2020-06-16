import {createSelector} from 'reselect'
// import SHOP_DATA from '../../Pages/shopPage/shop.data/ShopData'

const selectShop=state=>state.shop
const COLLECTION_ID_MAP={
hats:1,
sneakers:2,
jackets:3,
womens:4,
mens:5
}

export const selectCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectCollection=collectionUrlParam=>createSelector(
    [selectCollections],
    collections=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])
)