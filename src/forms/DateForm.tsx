import { DatePicker } from '@mui/x-date-pickers';
import { UnitSelector } from '../components/UnitSelector';
import { DATE_OPTIONS } from '../constants';
import { useDateTimeDifference } from '../hooks/dateTimehooks';
import { FormCard } from '../layout/FormCard';
import { Result } from '../layout/Result';
import { dateFormStyles } from '../styles/ date-form.styles';

export const DateForm = () => {
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
    <FormCard title="Date difference">
      <DatePicker
        label="Start date"
        value={startDate}
        onChange={setStartDateFn}
        maxDate={endDate ?? undefined}
        sx={dateFormStyles.formControl}
      />
      <DatePicker
        label="End date"
        value={endDate}
        minDate={startDate ?? undefined}
        onChange={setEndDateFn}
        sx={dateFormStyles.formControl}
      />
      <UnitSelector
        onSelect={(u) => setUnit(u)}
        options={DATE_OPTIONS}
        unit={unit}
      />
      <Result>{result}</Result>
    </FormCard>
  );
};
