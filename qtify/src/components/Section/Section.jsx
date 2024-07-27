import { Grid } from "@mui/material";
import styles from "./section.module.css" ; 
import Cart from "../Card/Card";
import { useState } from "react";
import { CircularProgress } from '@mui/material';

function Section({data , title}){
    const [showAllBtn , setShowAllBtn] = useState(true); 
   
    const handleBtn = ()=>{
        setShowAllBtn(!showAllBtn)
    }
    return (
          <div >
    <div className={styles.header}>
        <h3>{title}</h3>
        {title && <h4 className={styles.toggleText} onClick={handleBtn}>
            {showAllBtn ? "Show All" : "collapse All"}
        </h4>}
    </div>
    {
        !data?.length ?
            <CircularProgress />
            : (
                <div className={styles.cardWrapper}>
                    {/* {!showAllBtn ? */}
                        <div className={styles.wrapper}>
                            {data.map((item) => <Cart key={item.id} cartData={item} type="album" />)}
                        </div>
                        {/* : */}
                        {/* // <Carousel */}
                        {/* //     data={data}
                        //     componentRender={(ele) => <Card data={ele} type="album" />}
                        // /> 
                        null
                    } */}
                </div>
            )

    }
</div>
)
}

export default Section