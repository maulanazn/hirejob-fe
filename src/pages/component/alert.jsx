export default function Alert({alerttype, message}) {
    return (
            <div className={`alert alert-${alerttype}`}>{message}</div>
        )
}