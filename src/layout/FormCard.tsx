import { Card, CardContent } from '@mui/material';
import { PropsWithChildren } from 'react';
import { cardStyles } from '../styles/card.styles';
import { FormTitle } from './FormTitle';

interface FormCardProps extends PropsWithChildren {
  title: string;
}
export const FormCard = ({ children, title }: FormCardProps) => {
  return (
    <Card id="date-form" variant="outlined" sx={cardStyles.card}>
      <CardContent>
        <FormTitle>{title}</FormTitle>
        {children}
      </CardContent>
    </Card>
  );
};
