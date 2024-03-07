import React from 'react'
import Container from './Container'
import { FaGithub, FaFacebook, FaYoutube } from 'react-icons/fa'
import { TbMinusVertical } from 'react-icons/tb'
import Link from 'next/link'

const Footer = () => {
const footerList = [
  {_id:111, title:'お問い合わせ', link:'#', icon:true},
  {_id:112, title:'利用規約', link:'#', icon:true},
  {_id:113, title:'プライバシーポリシー', link:'#', icon:true},
  {_id:114, title:'特定商取引法に基づく表記', link:'#', icon:true},
  {_id:115, title:'運営会社', link:'#', icon:true},
  {_id:116, title:'お問い合わせ', link:'#'},
]

  return (
    <div className='w-full bg-blueLight mt-10'>
    <Container>
      <div className='text-sm flex flex-col md:flex-row md:items-center gap-2 justify-between mb-2'>
        <p className='mb-2 text-gray-700'>&copy; ORIGIN .Doc</p>
        <ul className='flex items-center gap-2 mb-2'>
          {
            footerList.map((item) => (
              <Link href={item.link} key={item._id}>
              <li className='flex items-center gap-2 text-gray-500 hover:text-primeColor duration-300 cursor-pointer'>
                {item.title}
                {item.icon && <TbMinusVertical/>}
              </li>
              </Link>
            ))
          }
          <li>List</li>
        </ul>
        <div className='flex items-center gap-4'>
          <a
            href=""
            target='_blank'
            className='text-xl hover:text-primeColor duration-300 cursor-pointer'
          >
            <FaGithub/></a>
          <a
            href=""
            target='_blank'
            className='text-xl hover:text-primeColor duration-300 cursor-pointer'
          >
            <FaFacebook/>
          </a>
          <a
            href=""
            target='_blank'
            className='text-xl hover:text-primeColor duration-300 cursor-pointer'
          >
            <FaYoutube/>
          </a>
        </div>
      </div>
      Footer
    </Container>
    </div>
    )
}

export default Footer