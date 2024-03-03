import { useId } from 'react';

export const Upload = () => {
    const id = useId()
    return (
      <label htmlFor={id}>
        <input type="file" id={id} />
      </label>
    )
  }