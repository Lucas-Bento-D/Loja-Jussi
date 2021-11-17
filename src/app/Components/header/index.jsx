import React from "react";
import JussiLogo from '../../../imgs/logoJussiVectorGreen.svg';
import SearchLogo from '../../../imgs/search.svg';
import CartLogo from '../../../imgs/shopping-cart.svg';
import { HeaderCustom, LogoHeader, LinkItem, Busca, BlocoHeader, CampoBusca, IconBusca } from './styles.js'

const logo = <a href="https://jussi.com.br/">
                <LogoHeader src={JussiLogo} alt="Jussi" />
            </a>

const busca = <Busca>
                    <CampoBusca type="text" placeholder="Buscar" /> 
                    <IconBusca>
                        <img src={SearchLogo} alt="Pesquisar" />
                    </IconBusca>
              </Busca>

const carrinho = <LinkItem href="https://jussi.com.br/">
                    <img src={CartLogo} alt="Carrinho" />
                </LinkItem>

const bloco1 = <BlocoHeader>
                    {logo}
                    <LinkItem href="https://jussi.com.br/"> Nossas soluções</LinkItem>
                    <LinkItem href="https://jussi.com.br/"> Conheça a Jüssi</LinkItem>
               </BlocoHeader>

const bloco2 = <BlocoHeader>
                    {busca}
                    <LinkItem href="https://jussi.com.br/"> Login</LinkItem>
                    {carrinho}
                </BlocoHeader>

function Header(){
    return(
        <header className="header">
            <HeaderCustom>
                {bloco1}
                {bloco2}
            </HeaderCustom>
        </header>
    )
}

export default Header;