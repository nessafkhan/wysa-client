import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';

export const BasicTimePicker = () => {
	const [value, setValue] = useState(null);
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<TimePicker
				label="Select a time"
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(params) => (
					<TextField
						variant="standard"
						color="secondary"
						fullWidth
						size="medium"
						
						{...params}
					/>
				)}
			/>
		</LocalizationProvider>
	);
};
