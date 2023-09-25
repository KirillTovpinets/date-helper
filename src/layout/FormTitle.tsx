import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';
import { appStyles } from '../styles/app.styles';

interface FormTitleProps extends PropsWithChildren {}
export const FormTitle = (props: FormTitleProps) => {
  return (
    <Typography variant="h4" align="center" sx={appStyles.formTitle}>
      {props.children}
    </Typography>
  );
};
