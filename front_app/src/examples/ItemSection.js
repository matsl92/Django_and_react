import { useState } from 'react';
import ItemForm from './ItemForm';
import SearchInputs from './SearchInputs';
import ItemDisplayBlock from './ItemDisplayBlock';


function ItemSection() {

    const [searchParams, setSearchParams] = useState({});
    
    const [matchingItems, setMatchingItems] = useState([]);
    
    const [data, setData] = useState({items: []});

    console.log('search params', searchParams);

    function addItemToData(item) {
        let items = data['items'];
        items.push(item);
        setData({items: items})
        // console.log(data.items);
    }


    function updateParamsAndMatchindItems(newSearchParams) {
        setSearchParams(newSearchParams);
        console.log('search params 1', searchParams);
        let selectedItems = [];
        for (let item of data.items) {
            if (searchParams.price !== 0 && item.price > searchParams.price) {
                continue;
            };
            if (searchParams.year !== 0 && item.year !== searchParams.year) {
                continue;
            };
            if (searchParams.ref !== '' && item.ref !== searchParams.ref) {
                continue;
            };
            if (searchParams.brand !== '' && item.brand !== searchParams.brand) {
                continue;
            };
            selectedItems.push(item);
        }

        setMatchingItems(selectedItems);
        // console.log('matching items', matchingItems);
    }

    return (
        <div>
            <SearchInputs callBack={updateParamsAndMatchindItems} />
            <ItemDisplayBlock items={matchingItems} />
            <ItemForm addItem={addItemToData} />
        </div>
    )
}

export default ItemSection;