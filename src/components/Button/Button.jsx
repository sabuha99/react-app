import styles from"./index.module.css"
function Button(props){
    console.log(props)
    return(
        <button
        onClick={props.clickleyende}
        className={styles.btn}>{props.txt}
       </button>
    )
}
export default Button;