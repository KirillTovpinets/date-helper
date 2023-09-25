import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ManipulateType, QUnitType } from 'dayjs';
import { useCallback } from 'react';
import { Option } from '../interfaces';
import { dateFormStyles } from '../styles/ date-form.styles';

interface UnitSelectorProps {
  onSelect: (value: QUnitType) => void;
  options: Option[];
  unit: QUnitType | ManipulateType;
}
export const UnitSelector = ({
  onSelect,
  options,
  unit,
}: UnitSelectorProps) => {
  const handleChangeUnit = useCallback((event: SelectChangeEvent) => {
    onSelect(event.target.value as QUnitType);
  }, []);
  return (
    <Select
      label="Unit"
      onChange={handleChangeUnit}
      value={unit}
      defaultValue={unit}
      sx={dateFormStyles.selectControl}
    >
      {options.map((option: Option) => (
        <MenuItem value={option.value} sx={dateFormStyles.menuItem}>
          {option.label ?? option.value}
        </MenuItem>
      ))}
    </Select>
  );
};
