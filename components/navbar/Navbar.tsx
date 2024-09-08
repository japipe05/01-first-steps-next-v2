
// defecto 'use server';
// si lo agregamos 'use cliente';
/*
ejemplo de un componente asincrono
const temporalAsync = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(true);
        },2000);
    })
}*/

import Link from 'next/link';
import {HomeIcon} from '@primer/octicons-react';
import { text } from 'stream/consumers';
import path from 'path';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems =[
    {path: '/about', text:'About'},
    {path: '/pricing', text:'Pricing'},
    {path: '/contact', text:'Contact'},
];
//export const Navbar = async() => {
export const Navbar = () => {
    //await temporalAsync();
  console.log("Navbar creado")
    return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rouded">
        
        <Link href={'/'}>
            <HomeIcon className='mr-2'/>
            <span>Home</span>
        </Link>
        <div className="flex flex-1"></div>
        {
            navItems.map(navItem=>(
                //<Link key={navItem.path} className="mr-2" href={navItem.path}>{navItem.text}</Link>
                <ActiveLink key={navItem.path} {...navItem}/>
            ))
        }


        {/* <Link className="mr-2" href="/about">About</Link>
        <Link className="mr-2" href="/contact">Contact</Link>
        <Link className="mr-2" href="/pricing">Pricing</Link> */}
        
    </nav>
  )
}
