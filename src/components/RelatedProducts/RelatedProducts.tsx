import React from "react";
import './RelatedProducts.scss'

export default function RelatedProducts() {
  return (
    <div className="relatedProducts">
      <hr className="leftHr"/><h2>Produtos relacionados</h2><hr className="rightHr"/>
      <div className="buttonCategories">
        <button style={{color: "#3442B5"}}>CELULAR</button>
        <button>ACESSÓRIOS</button>
        <button>TABLETS</button>
        <button>NOTEBOOKS</button>
        <button>TVs</button>
        <button>VER TODOS</button>
      </div>
    </div>
  )
}