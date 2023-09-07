import React, { useState } from 'react'
import { Modal } from '../components/Modal'
import { Card } from '../components/Card'

export const List = () => {
  const [isModalOpen1, setModalOpen1] = useState(false)
  const [isModalOpen2, setModalOpen2] = useState(false)

  const openModal1 = () => {
    setModalOpen1(true)
  }

  const closeModal1 = () => {
    setModalOpen1(false)
  }

  const openModal2 = () => {
    setModalOpen2(true)
  }

  const closeModal2 = () => {
    setModalOpen2(false)
  }
  return (
    <>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">集中治療とは</h2>
      <p>
        ICU()とは医療チームが全身状態を24時間管理しています。状態によっては意識レベルの低下、心肺停止となる可能性があります。
      </p>
      <p>
        緊急時はどんな治療を受けることになるのか知っておいてほしいのです。また、決断をしておいてほしいのです。
      </p>
      <p>治療≠魔法</p>
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        知っておいてほしいあれこれ
      </h3>
      <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer">
        <Card title="人工呼吸器とは" text="hoge" onClick={openModal1} />
        <Modal
          isOpen={isModalOpen1}
          closeModal={closeModal1}
          title={'人工呼吸器とは'}
          content={`1 gyome hodehodehodehodehode\n2 gyome`}
        />
      </a>
      <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer">
        <Card title="心臓マッサージとは" text="hoge" onClick={openModal2} />
        <Modal
          isOpen={isModalOpen2}
          closeModal={closeModal2}
          title={'心臓マッサージとは'}
          content={`1 gyomehogehogehogehogehoge\n2 gyome`}
        />
      </a>
    </>
  )
}
