import { useState, useCallback } from 'react';

export const useInput = (
  initialValue: string,
  maxLength: number | undefined
) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!maxLength || event.target.value.length <= maxLength) {
      setValue(event.target.value);
    }
    setTouched(true);
  };

  const resetValue = useCallback((newValue = '') => {
    setValue(newValue);
    setTouched(false);
  }, []);

  const unsetTouched = () => {
    setTouched(false);
  };

  return [value, changeValue, touched, resetValue, unsetTouched];
};
