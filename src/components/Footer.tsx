import logo from '../assets/logo/glyptik_logo-only.png'
import { IconCopyright } from '@tabler/icons-react'
import { IconBrandLinkedin } from '@tabler/icons-react'
import { IconBrandInstagram } from '@tabler/icons-react'

const Footer = () => {
  return (
    <div className='relative !m-auto w-[95vw] bg-[#000000b3] font-text-primary rounded-t-md flex flex-col justify-center items-center gap-3 px-10 pt-12 pb-5' >
        <div className="flex w-full items-center justify-between max-sm:flex-col max-sm:items-start gap-2">
            <div className="footer-left flex flex-col gap-5">
                <div className="logo flex flex-col gap-2 w-fit items-center ">
                    <img src={logo} alt="" className='object-fit h-16 w-24' />
                    <h3 className='text-xl text-[#5EC2B5] ' >Glyptika Studios LLP</h3>
                </div>
                <div className="links flex gap-2 max-sm:text-sm font-text-secondary ">
                    <a href="/" className='hover:text-[#5EC2B5]' >Home</a>
                    <a href="/" className='hover:text-[#5EC2B5]' >Portfolio</a>
                    <a href="/" className='hover:text-[#5EC2B5]' >Services</a>
                    <a href="/" className='hover:text-[#5EC2B5]' >Contact Us</a>
                </div>
            </div>
            <div className="footer-right font-text-tertiary text-[#5EC2B5] flex flex-col items-center justify-center gap-5 max-sm:flex-row max-sm:text-xs max-sm:flex-wrap max-sm:justify-start max-sm:gap-2">
                <p>teamglyptika@gmail.com</p>
                <p>98XXXXX1213</p>
                <p>Venture Lab, TIET Patiala</p>
            </div>
        </div>
        <div className="separator w-full h-0.5 bg-white "></div>
        <div className='flex w-full justify-between items-center'>
            <div className="copyright flex justify-center items-center gap-2 font-text-tertiary ">
                <IconCopyright className='h-4 w-4' />
                 <p className='text-sm max-sm:text-xs ' >ALL RIGHTS RESERVED BY GLYPTIKA STUDIOS LLP</p>
            </div>
            <div className="social flex justify-center items-center">
                <IconBrandLinkedin className='h-8 w-8 hover:cursor-pointer hover:text-[#5EC2B5]' />
                <IconBrandInstagram className='h-8 w-8 hover:cursor-pointer hover:text-[#5EC2B5]' />
            </div>
        </div>
    </div>
  )
}

export default Footer