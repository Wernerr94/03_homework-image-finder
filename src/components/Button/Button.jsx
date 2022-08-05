import React from 'react';
import './Button.module.css';

export default function Button({ onLoad }) {
  return (
    <button type="button" onClick={onLoad}>
      Load more
    </button>
  );
}
