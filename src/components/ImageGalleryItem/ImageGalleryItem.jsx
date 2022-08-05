import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ previewURL, onOpenModal, tags }) {
  return (
    <li className={css.galleryItem} onClick={onOpenModal}>
      <img src={previewURL} alt={tags} />
    </li>
  );
}
