import React from 'react'

const Card = ({imageSrc,imageAlt}) => {
  return (
    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    <img
      src={imageSrc}
      alt={imageAlt}
      className="w-full h-full object-center object-cover group-hover:opacity-75"
    />
  </div>
  )
}

export default Card