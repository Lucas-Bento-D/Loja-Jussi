import styled from "styled-components"

export const HeaderCustom = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 25px;
    background: #fff;
    place-content: space-between;
`

export const LogoHeader = styled.img`
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 32px;
`

export const LinkItem = styled.a`
    font-family: Barlow, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #000000;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 32px;

    text-decoration: none;
    align-self: center;
`
export const Busca = styled.div`
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 32px;
    position: relative;
    align-self: center;
`

export const BlocoHeader = styled.div`
    display: flex;
`

export const CampoBusca = styled.input`
    border: 1px solid #F2F2F2;
    box-sizing: border-box;
    border-radius: 24px;
    padding: 8px 16px;
    &::placeholder{
        color:#EE0E7D
    }
`
export const IconBusca = styled.button`
    position: absolute;
    right: 10px;
    top: 3px;
    background:none;
    border:none;
    cursor: pointer;
`