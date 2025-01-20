import React from "react";
import CategoryButton from "../CategoryButton/CategoryButton";
import "./CategorysButtons.scss"
import tecnologiaImage from "../../assets/tecnologia.png"
import superMarket from "../../assets/supermercados 1.png"
import whiskeyImage from "../../assets/whiskey.png" 
import ferramentaImage from "../../assets/ferramentas 1.png"
import saudeImage from "../../assets/cuidados-de-saude 1.png"
import corridaImage from "../../assets/corrida 1.png"
import modaImage from "../../assets/moda 1.png"

export default function CategorysButtons() {
    return(
        <>
        <div className="categorysButtons">
            <CategoryButton image={tecnologiaImage} name="Tecnologia" selected={true} />
            <CategoryButton image={superMarket} name="Supermercado" selected={false} />
            <CategoryButton image={whiskeyImage} name="Bebidas" selected={false}/>
            <CategoryButton image={ferramentaImage} name="Ferramentas" selected={false}/>
            <CategoryButton image={saudeImage}  name="Saúde"  selected={false}/>
            <CategoryButton image={corridaImage} name="Esportes e Fitness" selected={false}/>
            <CategoryButton image={modaImage} name="Moda" selected={false}/>
        </div>
        </>
    )
}