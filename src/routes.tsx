import { createHashRouter } from 'react-router-dom';
import App from './App';
import { APP_ROUTES } from './constants';
import { AdjustDate } from './forms/AdjustDate';
import { DateForm } from './forms/DateForm';
import { DateTimeForm } from './forms/DateTimeForm';
export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: APP_ROUTES.difference,
        element: <DateForm />,
      },
      {
        path: APP_ROUTES.timeDifference,
        element: <DateTimeForm />,
      },
      {
        path: APP_ROUTES.adjustDate,
        element: <AdjustDate />,
      },
    ],
  },
]);
