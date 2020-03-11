import { AppContext, ContextProvider } from '../contextMaker';
import React, { useEffect, useState } from 'react';






 const LifoFifoComp = () => {

    const context = React.useContext(AppContext);
    
    let [displayList, setDisplayList] = useState([]);

    console.log(context.LIFOFIFOList);

    return( 
        <div className='myHeading'>Hello</div>
    )

}

export default LifoFifoComp;