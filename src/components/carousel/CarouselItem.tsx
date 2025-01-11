import React from 'react'

interface CarouselItemProps {
  children: React.ReactNode
}

export default function CarouselItem({ children }: CarouselItemProps) {
  return (
    <div className="h-36 flex items-center justify-center">
      {children}
    </div>
  )
}

