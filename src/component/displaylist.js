import React from 'react';

const Displaylist = (props) => {

    const renderView = ({dataList}) => {
        if(dataList){
            return dataList.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            {renderView(props)}
        </div>
    )
}

export default Displaylist
