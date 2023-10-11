export default function Alert({alerttype, message}) {
    return (
        <div className="position-fixed w-100 h-fit" style={{zIndex:'99'}}>
            <div className={`alert alert-${alerttype} mb-0`}>{message}</div>
        </div>
        )
}