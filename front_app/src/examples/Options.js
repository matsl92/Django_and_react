import SearchInputs from './SearchInputs';
import { useState } from 'react';


function Options() {

    const [data, setData] = useState({});

    const updateData = (searchParams) => {
        setData(searchParams);
    };

    return (
        <div>
            <SearchInputs callback={updateData} />
            <p>Price: {data.price ? data.price : 'No data to display'}</p>
            <p>Year: {data.year ? data.year : 'No data to display'}</p>
            <p>Ref: {data.ref ? data.ref : 'No data to display'}</p>
            <p>Brand: {data.brand ? data.brand : 'No data to display'}</p>
        </div>
    )
}

export default Options;