import {useState} from 'react';
function Likes() {

    const [likeCount, setLikeCount] = useState(0);

    const updateLikeCount = () => {
        setLikeCount(likeCount + 1);
    }

    return (
        <div>
            <h2>Like count</h2>
            <p>{likeCount}</p>
            <button onClick={updateLikeCount}>Add like</button>
        </div>
    )
}

export default Likes