import './Header.scss'
import ShieldImage from '../../assets/ShieldCheck.png'
import TruckImage from '../../assets/Truck.png'
import CardCreditImage from '../../assets/CreditCard.png'
import LogoImage from '../../assets/Logo.png'
import IconsImage from '../../assets/Frame 2365.png'
import CrownImage from '../../assets/CrownSimple.png'
import React from 'react'

export default function Header (){
    return (
        <>
        <div className='topHeader'>
            <div className='divTopHeader'>
                <div className='flexContainer'>
                    <img src={ShieldImage}/>
                    <span style={{color: '#3019B2'}}>Compra</span>
                    <span style={{color: '#9F9F9F'}}>100% segura</span>
                </div>
                <div className='flexContainer'>
                    <img src={TruckImage} />
                    <span style={{color: '#3019B2'}}>Frete Grátis</span>
                    <span style={{color: '#9F9F9F'}}>acima de R$ 200</span>
                </div>
                <div className='flexContainer'>
                    <img src={CardCreditImage} />
                    <span style={{color: '#3019B2'}}>Parcele</span>
                    <span style={{color: '#9F9F9F'}}>Suas Compras</span>
                </div> 
            </div>
            
            <hr className='firstHr'/>

            <div className='midHeader'>
                <img src={LogoImage} className='logoImage'/>
                <input type="text" placeholder='O que você está buscando?'></input>
                <img src={IconsImage} className='iconsImage'/>
            </div>

            <hr className='secondHr'/>

            <div className='bottomHeader'>
                <a className='buttonHeader'>TODAS AS CATEGORIAS</a>
                <a className='buttonHeader'>SUPERMERCADO</a>
                <a className='buttonHeader'>LIVROS</a>
                <a className='buttonHeader'>MODA</a>
                <a className='buttonHeader'>LANÇAMENTOS</a>
                <a className='buttonHeader' style={{color: '#3019B2'}}>OFERTAS DO DIA</a>
                <a className='buttonHeader'><img src={CrownImage}/>ASSINATURA</a>
            </div>
        </div>
        </>
    )
}