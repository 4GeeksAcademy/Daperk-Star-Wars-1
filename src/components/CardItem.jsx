import React from "react";

export const CardItem = ({children, img}) => {
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    {children}
                </div>
        </div>
    );
};