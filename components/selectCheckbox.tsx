import * as React from 'react';
import { Checkbox } from 'react-native-paper';

const SelectCheckbox = ({ onPress, isChecked }) => {
  const [checked, setChecked] = React.useState(isChecked);

  React.useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleCheck = () => {
    setChecked(!checked);
    onPress(!checked); 
  };

  return (
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={handleCheck}
    />
  );
};

export default SelectCheckbox;