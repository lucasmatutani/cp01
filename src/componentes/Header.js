import React from 'react'
import './Header.css'  

export default function Header(){
    return( 
        <header className='header-main'>
            <div className='header-menu'>                 
                <nav>
                    <ul>
                        <li><a href='#'>Nacional</a></li>
                        <li><a href='#'>Business</a></li>
                        <li><a href='#'>INternacional</a></li>
                        <li><a href='#'>Saúde</a></li>
                        <li><a href='#'>Tecnologia</a></li>
                        <li><a href='#'>Esporte</a></li>
                        <li><a href='#'>Entretenimento</a></li>
                        <li><a href='#'>Estilo</a></li>
                        <li><a href='#'>Viagem &amp; Gastronomia</a></li>
                        <li><a href='#'>Newsletters</a></li>
                        <li><a href='#'>Podcasts</a></li>
                    </ul>
                </nav>
            </div>
        </header>     
    )
}