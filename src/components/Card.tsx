import React from 'react'

interface CardProps {
  title: string
  p: string
  onClick?: () => void // onClick プロパティは任意の関数とする
}

export const Card: React.FC<CardProps> = ({ title, p, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-700 "> {title}</div>
      <div className="font-normal text-gray-700 dark:text-gray-400">{p}</div>
    </div>
  )
}
