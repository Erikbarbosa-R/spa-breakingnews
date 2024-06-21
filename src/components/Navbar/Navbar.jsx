import logo from '../../images/logo.png';
import './Navbar.css';
import { Search } from 'lucide-react';

export function Navbar(){
    return(
        <>
            <nav>
                <div className="input-search-space">
                        <div className='input-search-icon'>
                            <Search color='black' size={23} /> 
                        </div>
                        <div className="barra-de-pesquisa">
                            <input type="text" 
                            placeholder="Pesquisar por um titulo " /> 
                        </div>
                </div>

                <img src={logo} alt="Logo Breaking News" />

                <button>ENTRAR</button>
            </nav>
        </>
    )
}