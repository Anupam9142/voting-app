import React, {useState} from 'react';
import styled from 'styled-components';
import {Link as ReactRouterDomLink, useLocation} from 'react-router-dom';

const HeaderWrapper = styled.header`
    background-color: #12232E;
    width: 100vw;
    text-align: center;
    font-size: 25px;
    color: #0fFfff;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 100;
    justify-content: center;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;    
`;

const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'};
    font-family: "Open Sans";
    justify-content: center;
    position: absolute;
    width: 100%;
    top: 40px;
    left: 0;
    padding: 8px;
    border-sizing: border-box;
    background: white;
    
    @media(min-width: 768px){
        position: relative;
        width: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
        background: none;
        left: initial;
        top: initial;
        display: flex;
    }
`;

const LogoText=styled.span`
    color: ${p => p.color ? p.color : "white"};
    font-family: 'kaushan Script';
    font-size: 23px;
`;

const Link = ({isActive, children, ...props}) => {
    return (
    <ReactRouterDomLink {...props}>
        {children}
    </ReactRouterDomLink>
    );
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    color: black;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'}
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    
    >div{
        height: 3px;
        background: black;
        margin: 5px 0;
        width; 100%;
    }
    @media(min-width: 768px){
        display: none;
    }
`;

export function Header(){
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <HeaderWrapper>
            <Link to="/"> 
                <LogoText color="#4C9FFF">Vote Gauge - Make Your Vote Count!
</LogoText>
            </Link>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}>
                    Home
                </StyledLink> 
                <StyledLink to="/admin" isActive={pathname === '/admin'}>
                    Admin
                </StyledLink>
                <StyledLink to="/voter" isActive={pathname === '/voter'}>
                    Voter
                </StyledLink>
            </Menu>
        </HeaderWrapper>
    )
}