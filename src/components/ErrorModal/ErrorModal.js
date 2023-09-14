import Button from "../UI/Button";
import Card from "../UI/Card";
import './ErrorModal.css';

const ErrorModal = (props) => {

    return (
        <div>
        <div className="backdrop" onClick={props.onConfirm} />
            <Card className="modal">
                <header className="header">
                    <h2>Invalid input</h2>
                </header>
                <p className="content">{props.message}</p>
                <footer className="actions" >
                    <Button type="button" onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;