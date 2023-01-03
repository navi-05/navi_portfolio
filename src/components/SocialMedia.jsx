import React from 'react'
import { BsTwitter, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://twitter.com/navi___05'>
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/naveen-kumar-bba000216/'>
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href='https://github.com/navi-05'>
            <FaGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia