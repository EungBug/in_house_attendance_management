import { useCallback, useState } from 'react';

type UseDisclosureReturn = [
  boolean, // opened
  {
    open: () => void;
    close: () => void;
    toggle: () => void;
    setState: (value: boolean) => void;
  },
];

const useDisclosure = (initialState = false): UseDisclosureReturn => {
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => setOpened(true), []);
  const close = useCallback(() => setOpened(false), []);
  const toggle = useCallback(() => setOpened((prev) => !prev), []);
  const setState = useCallback((value: boolean) => setOpened(value), []);

  return [
    opened,
    {
      open,
      close,
      toggle,
      setState,
    },
  ];
};

export default useDisclosure;
