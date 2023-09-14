import Button from "../UI/Button";
import Card from "../UI/Card";
import './ErrorModal.css';
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onConfirm} />;
}

const ModalOverlay = props => {
    return (<Card className="modal">
        <header className="header">
            <h2>Invalid input</h2>
        </header>
        <p className="content">{props.message}</p>
        <footer className="actions" >
            <Button type="button" onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    );
}

const ErrorModal = (props) => {

    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<ModalOverlay onConfirm={props.onConfirm} message={props.message}/>, document.getElementById("overlay-root"))}
        </Fragment>
    )
}

export default ErrorModal;