import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ previewURL, onOpenModal }) {
  return (
    <li className={css.galleryItem} onClick={onOpenModal}>
      <img src={previewURL} alt="" />
    </li>
  );
}
