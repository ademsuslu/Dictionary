import React, { useState } from 'react'
import Link from 'next/link'
import { BsPlus } from 'react-icons/bs'
import { FiArrowLeft } from 'react-icons/fi'
import { Slant as Hamburger } from 'hamburger-react'
import { useRouter } from 'next/router'
import {
  AboutPage,
  ContributeLink,
  createWordButtonLink,
  HomePage,
  Telegram,
  telegramChannelName,
} from '@/Data/constants'
export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const { asPath } = useRouter()

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {asPath === '/' ? (
              <a
                href={createWordButtonLink}
                target='_blank'
                rel='noreferrer'
                className='create'
              >
                <BsPlus className='createIcon' />
              </a>
            ) : (
              <Link href='/' className='create'>
                <FiArrowLeft />
              </Link>
            )}
          </div>
          <div className='col'>
            <div className='HeadWrapper'>
              <h1 className='Head'>Open Didionny 1.0</h1>
            </div>
          </div>
          <div className='col'>
            <div className='hamburger'>
              <div className='hamburgerIcon'>
                <Hamburger
                  color='black'
                  easing='ease'
                  toggled={isOpen}
                  toggle={setOpen}
                  direction='left'
                />
              </div>
              {isOpen && (
                <ul className='List'>
                  <li onClick={() => setOpen(false)} className='ListItem'>
                    <Link href={HomePage}>Home</Link>
                  </li>
                  <li onClick={() => setOpen(false)} className='ListItem'>
                    <Link href={AboutPage}>About Us</Link>
                  </li>
                  <li onClick={() => setOpen(false)} className='ListItem'>
                    <a rel='noreferrer' target={'_blank'} href={Telegram}>
                      Telegram
                    </a>
                  </li>
                  <li onClick={() => setOpen(false)} className='ListItem'>
                    <a rel='noreferrer' target={'_blank'} href={ContributeLink}>
                      Contribute
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
