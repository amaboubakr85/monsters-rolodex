import React from "react";
import "./card-list.style.css";
import {Card} from "../card/card.component";

export const CardList = (props)=>{
    // console.log(props)
    return (
        <div className="card-list">
            {
                props.theMonsters.map((monster) => {
                    return (
                        // <h1 key={monster.id}>{monster.name}</h1>
                        <Card key={monster.id} monster={monster} />
                    )
                })
            }
        </div>
    );
};

