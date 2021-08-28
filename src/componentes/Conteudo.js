import React from 'react'
import './Conteudo.css'
import author from './img/author.png'
import logo from './img/logo.svg'

export default function Conteudo() {
    return (
        <div className='content'>
            <header className='title'>
                <h1>
                    Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos
                </h1>
                <hr></hr>
                <p>
                    A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus
                </p>
                <figure className='autor'>
                    <img src={author} alt='autor'></img>
                </figure>
                <hr></hr>
                <div className='update'>
                    <span>
                        24/08/2021 às 16:44 | Ataulizado às 16:56
                    </span>
                </div>
            </header>

            <section className='post-content'>
                <figure className='logo'>
                    <img src={logo} alt='logo'></img>
                </figure>
                <p>
                    Por ser uma doença nova, a <a href='#'>covid-19</a> ainda não foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.
                </p>
                <p>
                    A  <a href='#'>variante Delta da Covid-19,</a> originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa capa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.
                </p>
            </section>

        </div>
    )
}
