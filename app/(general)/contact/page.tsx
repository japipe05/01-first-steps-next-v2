
import type { Metadata } from "next";
//para el Seo super importante
export const metadata: Metadata = {
    title: 'SEO Title Contact',
    description: 'SEO Title Contact',
    keywords: ['Contact page','page','felipe','...']
   };

export default function ContactPage(){
    return(
        <>
        <span className="text-7xl">Contact page!!
            {new Date().getDate()}
        </span>
        </>
    );
}