import './Description.css'
import {useState} from 'react'

const Description = () => {
    const [btnOn, setBtnOn] = useState(true)
    return(
        <section>
            <div className="description">
                <div className="text">
                    <h1>Sobre Mim</h1>
                    <p>Prazer, me chamo Willen Andrade, tenho 25 anos moro em Palmital-SP.</p>
                    <p>Estudo programação desde o ano passado com foco no Front End.</p>
                    <p>Sou disciplinado, fácil de lidar, prático e aprendo rápido.</p>
                </div>
                <div className={btnOn ? 'text2' : 'active'}>
                <p>Prazer, me chamo Willen Andrade, tenho 25 anos moro em Palmital-SP.</p>
                    <p>Estudo programação desde o ano passado com foco no Front End.</p>
                    <p>Sou disciplinado, fácil de lidar, prático e aprendo rápido.</p>
                </div>
                <div className='div-button'><button onClick={()=> setBtnOn(!btnOn)}>{btnOn ? 'Mostrar mais': 'Mostrar menos'}</button></div>
            </div>
        </section>
    )
}

export default Description