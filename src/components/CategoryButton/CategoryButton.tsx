import React from "react"
import './CategoryButton.scss'

interface buttonProps  {
    image: string
    name: string
    selected: boolean
}

export default function CategoryButton (props: buttonProps) {
    const colorSelected = props.selected ? '#3019B2' :  '#000'
    return (
            <button className="categoryButton">
                <img src={props.image} alt={props.name}/>
                <span style={{color: colorSelected}}>{props.name}</span>
            </button>
    )
}