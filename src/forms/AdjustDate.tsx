import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { ManipulateType } from 'dayjs';
import { UnitSelector } from '../components/UnitSelector';
import { DATE_OPTIONS } from '../constants';
import { useDateTimeAdjustment } from '../hooks/dateTimehooks';
import { FormCard } from '../layout/FormCard';
import { dateFormStyles } from '../styles/ date-form.styles';

export const AdjustDate = () => {
  const {
    date,
    unit,
    operation,
    result,
    value,
    handleDate,
    setValue,
    setOperation,
    setUnit,
  } = useDateTimeAdjustment();
  return (
    <FormCard title="Adjust Date">
      <DatePicker
        value={date}
        label="Date"
        onChange={handleDate}
        sx={dateFormStyles.formControl}
      />
      <TextField
        type="number"
        value={value}
        label="Value to adjust"
        onChange={(event) => setValue(parseInt(event.target.value))}
        sx={dateFormStyles.formControl}
      />
      <Select
        value={operation}
        sx={dateFormStyles.formControl}
        onChange={(event: SelectChangeEvent<'add' | 'subtract'>) =>
          setOperation(event.target.value as 'add' | 'subtract')
        }
      >
        <MenuItem value="add">Add</MenuItem>
        <MenuItem value="subtract">Subtract</MenuItem>
      </Select>
      <UnitSelector
        onSelect={(u) => setUnit(u as ManipulateType)}
        options={DATE_OPTIONS}
        unit={unit}
      />
      <DatePicker value={result} />
    </FormCard>
  );
};
