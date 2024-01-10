import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null)

    const data = [
        {
            desc: "Funfact @ 1 .  React is not a framework",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"},
        },
        {
            desc: "Funfact @ 2 .  React has a strong community",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"},
        },
        {
            desc: "Funfact @ 3 .  Virtual DOM is faster than real DOM",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Upload",
                tagColor: "green"},
        },
        {
            desc: "Funfact @ 4 .  Keep your components small",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "pink"},
        },
        {
            desc: "Funfact @ 5 .  Supports Type Systems",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Upload",
                tagColor: "green"},
        },
        {
            desc: "Funfact @ 6 .  React development and SEO go together",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload",
                tagColor: "blue"},
        },
    ]

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
