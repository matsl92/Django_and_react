import styles from './ItemDisplayBlock.module.css';

function ItemDisplayBlock(props) {

    return (
        <div>
            {
                props.items.map((item, i) => {
                    return (
                        <div key={i}>
                            <p className={ styles.field }>Price: { item.price }</p>
                            <p className={ styles.field }>Year: { item.year }</p>
                            <p className={ styles.field }>Ref: { item.ref }</p>
                            <p className={ styles.field }>Brand: { item.brand }</p>
                        </div>
                    );
                })
            }
        </div>
    )
}


export default ItemDisplayBlock