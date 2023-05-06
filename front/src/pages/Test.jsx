import ListItem from "../components/ListItem";

function Test() {

    const arr = []

    for (let i = 0; i < 20; i++) {
        arr.push(i);
    }

    return (
        <div className="container">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 test">
                {
                    arr.map((index)=> (
                        <ListItem className="col" key={index} name="Mateo" description="hey" price={20500}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Test;