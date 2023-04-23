export default function FormField(props) {

    return (
        <div className="formField">
            <label htmlFor={props.name}
            className="formLabel">{props.text}</label>
            <input id={props.name} className="formInput" type={props.type} 
            onChange={props.onChange} defaultValue={props.defaultValue}></input>
        </div>
    )
}