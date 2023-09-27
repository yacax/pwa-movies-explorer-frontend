import { useState, useEffect } from 'react';
import { BASE_ERROR_MESAGE, DEFAULT_POPUP_DELAY } from '../utils/constants';

export default function usePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(BASE_ERROR_MESAGE);
  const [isMessageType, setMessageType] = useState(false);
  const [isAutoClose, setIsAutoClose] = useState(true);
  const [delay, setDelay] = useState(DEFAULT_POPUP_DELAY);

  const close = () => setIsOpen(false);

  const showMessage = (
    newMessage = BASE_ERROR_MESAGE,
    newIsMessageType = isMessageType,
    newIsAutoClose = isAutoClose,
    newDelay = delay
  ) => {
    setMessage(newMessage);
    setIsOpen(true);
    setIsAutoClose(newIsAutoClose);
    setMessageType(newIsMessageType);
    setDelay(newDelay);
    setIsOpen(true);
  };

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, delay);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  return [showMessage, isOpen, message, isMessageType, isAutoClose, close];
}
