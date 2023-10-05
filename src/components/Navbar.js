import Link from 'next/link';

import { CarFront } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    
    <div className='flex p-10 justify-around text-xl font-bold'>
        <Link href="/">
            <div className='flex content-center items-center gap-5'>
                <CarFront className='text-orange-600 w-20 h-20'/>
                <div>
                    <span className='font-black text-3xl'>CAR</span>
                    <h3 className='font-normal text-2xl'>Rental</h3>
                </div>                        
            </div>
        </Link>

        <div className='flex items-center'>
            <ul className='flex gap-8'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/models">Vehicle Models</Link></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                <li><Link href="/team">Our Team</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>

        <div  className='flex content-center items-center gap-5'>
            <p>Sign In</p>
            <Button className='px-11 py-8 text-2xl'>Register</Button>
        </div>
    </div>
  )
}

export default Navbar