import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

interface ResultProps extends PropsWithChildren {}

export const Result = ({ children }: ResultProps) => {
  return (
    <Typography variant="h5" align="center" sx={{ marginTop: '10px' }}>
      Result: {children}
    </Typography>
  );
};
