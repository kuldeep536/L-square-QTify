import Style from "./Btn.module.css"
const Button = ({TextToShow})=> {
   
    return (
        
        <button className={Style.btn}>{TextToShow}</button>
        
    )
}

export default Button