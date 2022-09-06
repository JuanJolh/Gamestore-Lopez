import React from "react";
import ItemCount from "./ItemCount";

const ItemList = ({ejemplo}) => {
    return (
            <ItemCount stock={5} initial={1} onAdd={0} />
        
    )
}

export default ItemList;