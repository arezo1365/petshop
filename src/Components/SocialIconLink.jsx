import React from 'react'

export default function SocialIconLink({children,url}) {
  return (
    <a className="nav-link icon-socials" href={url}>
        {children}
    </a>
  )
}
