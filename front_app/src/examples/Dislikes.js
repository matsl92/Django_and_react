import {useState} from 'react';
function Dislikes() {

    const [dislikeCount, setDislikeCount] = useState(0);

    const updateDislikeCount = () => {
        setDislikeCount(dislikeCount + 1);
    }

    return (
        <div>
            <h2>Dislike count</h2>
            <p>{dislikeCount}</p>
            <button onClick={updateDislikeCount}>Add dislike</button>
        </div>
    )
}

export default Dislikes