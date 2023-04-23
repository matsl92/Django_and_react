function OneButtonSection(props) {
    const p = props.params;
    return (
        <div className="buttonSection oneButtonSection">
            <button className={p.class ? p.class + " button": "success button"} 
            onClick={p.onClick}>
                {p.text}
            </button>
        </div>
    )
}

export default OneButtonSection;