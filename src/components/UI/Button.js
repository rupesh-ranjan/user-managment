import './Button.css';

const Button = (props) => {
    const classes = 'button ' + props.className;
    return <button className={classes} type={props.type} onClick={props.onClick}>{props.children}</button>
}

export default Button;