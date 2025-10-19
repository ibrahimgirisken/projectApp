import React from 'react'
interface StaticPageProps{
    title:string;
    content:string;
}
export default function StaticPage({title,content}:StaticPageProps) {
  return (
    <div>{title}</div>
  )
}
