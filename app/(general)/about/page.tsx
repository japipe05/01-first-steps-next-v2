import type { Metadata } from "next";

//para el Seo super importante
export const metadata: Metadata = {
 title: 'SEO Title about',
 description: 'SEO Title about',
 keywords: ['About page','page','felipe','...']
};
export default function AboutPage(){
    return(
        <main className="flex flex-col items-center p-24">
            <span className="text-7xl">About page!!
                {new Date().getDate()}
            </span>
        </main>
    );
}