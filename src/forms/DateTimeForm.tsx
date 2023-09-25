import { DateTimePicker } from '@mui/x-date-pickers';
import { UnitSelector } from '../components/UnitSelector';
import { DATE_TIME_OPTIONS } from '../constants';
import { useDateTimeDifference } from '../hooks/dateTimehooks';
import { FormCard } from '../layout/FormCard';
import { Result } from '../layout/Result';
import { dateFormStyles } from '../styles/ date-form.styles';

export const DateTimeForm = () => {
  const {
    startDate,
    endDate,
    result,
    setEndDateFn,
    setStartDateFn,
    setUnit,
    unit,
  } = useDateTimeDifference();

  return (
    <FormCard title="Date and Time difference">
      <DateTimePicker
        label="Start Date and Time"
        value={startDate}
        onChange={setStartDateFn}
        sx={dateFormStyles.formControl}
      />
      <DateTimePicker
        label="End Date and Time"
        value={endDate}
        onChange={setEndDateFn}
        sx={dateFormStyles.formControl}
      />
      <UnitSelector
        onSelect={(value) => setUnit(value)}
        options={DATE_TIME_OPTIONS}
        unit={unit}
      />
      <Result>{result}</Result>
    </FormCard>
  );
};
