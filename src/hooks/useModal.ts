import { useState } from 'react';

export default function useModal() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(prev => !prev);
  };

  return { isVisible, toggleModal };
}
