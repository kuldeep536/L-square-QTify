import { Grid } from "@mui/material";
import styles from "./section.module.css" ; 
import Cart from "../Card/Card";
import { useState } from "react";
import { CircularProgress } from '@mui/material';
import Carousel from "../Carousel/Carsousel";

function Section({data , title}){
    console.log(data)
    const [showAllBtn , setShowAllBtn] = useState(true); 
   
    const handleBtn = ()=>{
        setShowAllBtn(!showAllBtn)
    }
    return (
          <div >
    <div className={styles.header}>
        <h3>{title}</h3>
        {title && <h4 className={styles.toggleText} onClick={handleBtn}>
            {showAllBtn ? "Show all" : "collapse"}
        </h4>}
    </div>
    {
        !data?.length ?
            <CircularProgress />
            : (
                <div className={styles.cardWrapper}>
                    {!showAllBtn ?
                        <div className={styles.wrapper}>
                            {data.map((item) => <Cart key={item.id} cartData={item} type="album" />)}
                        </div>
                      : 
                         <Carousel 
                             data={data}
                       componentRender={(ele) => <Cart data={ele} type="songs" />}
                        /> 
                    
                     }
                </div>
            )

    }
</div>
)
}

export default Section