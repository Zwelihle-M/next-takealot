import Link from 'next/link'
import React from 'react'

export default function Dropdownlink(props) {
  let{ href, children,...rest} = props

  return (
 <Link href={href} legacyBehavior>
  <a {...rest}>{children}</a>
 </Link>
  )
}
