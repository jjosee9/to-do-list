import React from 'react';



const List = props => {
 return(
 <ul>
        {
            props.items.map((items,index) =>
            <li key = {index}>
                {items}

            </li>)
        }
    </ul>
   )
}

export default List;