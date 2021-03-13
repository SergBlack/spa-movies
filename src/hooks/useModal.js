import { useState, useCallback } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(
    () => { setIsOpen((prev) => !prev); },
    [setIsOpen],
  );

  return { isOpen, toggle };
};

export default useModal;
