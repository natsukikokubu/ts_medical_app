import React from 'react'

interface CardProps {
  title: string
  text: string
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({ title, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-700">{title}</div>
      <div className="font-normal text-gray-700">{text}</div>
    </div>
  )
}
