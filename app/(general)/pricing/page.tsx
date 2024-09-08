

import type { Metadata } from "next";
//para el Seo super importante
export const metadata: Metadata = {
    title: 'SEO Title Pricing',
    description: 'SEO Title Pricing',
    keywords: ['Pricing page','page','felipe','...']
   };
export default function PricingPage(){
    return(
        <>
        <span className="text-7xl">Pricing page!!
            {new Date().getDate()}
        </span>
        </>
    );
}