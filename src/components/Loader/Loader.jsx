import React from 'react';
import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader({ color, height, width }) {
  return (
    <Grid
      wrapperClass={css.loader}
      color={color}
      height={height}
      width={width}
    />
  );
}
