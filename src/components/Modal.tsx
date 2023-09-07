import { FC } from 'react'
import { Button } from '../components/Button'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  title: string
  content: string
}

export const Modal: FC<ModalProps> = ({ isOpen, closeModal, title, content }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-500 opacity-50"></div>
      <div className="modal-container bg-white max-w-md mx-auto rounded shadow-lg z-50">
        <div className="modal-header p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        </div>
        <div className="modal-body p-4">
          <p className="whitespace-pre-wrap">{content}</p>
        </div>
        <div className="modal-footer p-4 border-t">
          <Button label="閉じる" onClick={closeModal} variant="secondary" />
        </div>
      </div>
    </div>
  )
}
