import {
  DateValidationError,
  PickerChangeHandlerContext,
} from '@mui/x-date-pickers';
import { Dayjs, ManipulateType, QUnitType } from 'dayjs';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

export const useDateTimeDifference = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [result, setResult] = useState<number>(0);
  const [unit, setUnit] = useState<QUnitType>('month');
  const handleDateChange = useCallback(
    (setter: Dispatch<SetStateAction<any>>) => (event: Dayjs | null) => {
      setter(event);
    },
    [startDate, endDate, unit]
  );

  useEffect(() => {
    if (!startDate || !endDate || !unit) {
      setResult(0);
      return;
    }

    setResult(endDate.diff(startDate, unit as QUnitType));
  }, [startDate, endDate, unit]);

  const setStartDateFn = handleDateChange(setStartDate);
  const setEndDateFn = handleDateChange(setEndDate);

  return {
    startDate,
    endDate,
    result,
    setStartDateFn,
    setEndDateFn,
    unit,
    setUnit,
  };
};

export const useDateTimeAdjustment = () => {
  const [date, handleDate] = useDateControl(null);
  const [unit, setUnit] = useState<ManipulateType>('month');
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [value, setValue] = useState(0);
  const [result, setResult] = useState<Dayjs | null>();

  useEffect(() => {
    if (!date || !unit || !operation) {
      setResult(null);
      return;
    }

    const result =
      operation === 'add' ? date.add(value, unit) : date.subtract(value, unit);
    setResult(result);
  }, [date, unit, operation, value]);

  return {
    date,
    unit,
    operation,
    value,
    result,
    handleDate,
    setUnit,
    setOperation,
    setValue,
  };
};

const useDateControl = (
  initial: Dayjs | null
): [
  Dayjs | null,
  (
    value: Dayjs | null,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void
] => {
  const [control, setControl] = useState<Dayjs | null>(initial);

  const handler = useCallback((event: Dayjs | null) => setControl(event), []);

  return [control, handler];
};
