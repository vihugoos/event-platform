import { LogoRocketseat } from './LogoRocketseat'

export function Footer() {
    return (
        <footer className="w-full h-16 flex items-center justify-between p-8 bg-gray-700 border-t border-gray-600"> 
            <LogoRocketseat />
            <p> All rights reserved. </p> 
        </footer>
    )
}
