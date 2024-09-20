import React from 'react';
import {Link} from 'react-router-dom';

export function Footer(){
    return (<footer class="page-footer" style={{
        width: '100%',
        color: '#FFF0F5',
        height: '50px',
        position: 'absolute',
        margin: 0,
        padding: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#12232E',
        fontFamily: 'kaushan Script',
        display: 'flex',
    }}>
        Copyright &copy; 2020
        <Link to="/" style={{textAlign: 'center', fontWeight: 'bold', padding: '4px 8px'}}> 
            <span style={{color:"#449FFF"}}>Abhijeet</span>
        </Link>
            <span>, </span>
        <Link to="/" style={{textAlign: 'center', fontWeight: 'bold', padding: '4px 8px'}}> 
            <span style={{color:"#4CCFFF"}}>Shirsh</span>
        </Link>
            <span>, </span>
        <Link to="/" style={{textAlign: 'center', fontWeight: 'bold', padding: '4px 8px'}}> 
            <span style={{color:"#3D71EB"}}>Kunal</span>
        </Link>
        
    </footer>)
};