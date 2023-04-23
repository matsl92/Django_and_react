import { useState } from 'react';

function SearchInputs(props) {

    const [price, setPrice] = useState(0);
    const [year, setYear] = useState(0);
    const [ref, setRef] = useState('');
    const [brand, setBrand] = useState('');

    // console.log('values', price, year, ref, brand);

    const searchParams = () => {
        props.callBack({price: price, year: year, ref: ref, brand: brand});
    };

    return (
        <div>
            <h1>Filter items</h1>
            <form>
                <label htmlFor="price">Price</label>
                <input id="price" type="number" value={price}
                onChange={(e) => setPrice(e.target.value)}></input>
                <label htmlFor="year">Year</label>
                <input id="year" type="number" value={year}
                onChange={(e) => setYear(e.target.value)}></input>
                <label htmlFor="ref">Ref</label>
                <input id="ref" type="text" value={ref}
                onChange={(e) => setRef(e.target.value)}></input>
                <label htmlFor="brand">Brand</label>
                <input id="brand" type="text" value={brand}
                onChange={(e) => setBrand(e.target.value)}></input>

                <button type="button" onClick={searchParams}>Search</button>
            </form>
        </div>
    )
}

export default SearchInputs;