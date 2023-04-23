import { Link } from 'react-router-dom';

function ListItem(props) {
    return (
        <div className="listItem">
            <Link to={`client/read/${props.id}`} className='client'>{props.firstName}</Link>
            <Link to={`client/update/${props.id}`} className="edit button">Edit</Link>
        </div>
    )
}

export default ListItem;