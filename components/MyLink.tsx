import React from 'react'

import Link from 'next/link'

export interface MyLinkProps {
  title: string
}

export const MyLink: React.FC<MyLinkProps> = ({title}) => (
  <Link href='/'>{title}</Link>
)
