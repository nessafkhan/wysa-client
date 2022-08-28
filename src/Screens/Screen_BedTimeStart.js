import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';
import { BasicTimePicker } from '../Components/TimePicker/BasicTimePicker';
import { useNavigate } from 'react-router-dom';

const ScreenBedTimeStart = () => {
	const navigate = useNavigate();
	const nextButtonClicked = () => {
		navigate('/bed-time-end');
	};

	const text = 'What time do you go to bed to start sleep?';
	return (
		<div className={ScreenStyles.screen_container}>
			<TextWrapper text={text} />
			<div className={ScreenStyles.btns_container}>
				<button className={ScreenStyles.btn}>
					<BasicTimePicker />
				</button>
			</div>
			<DownArrowButton nextScreen={nextButtonClicked} />
		</div>
	);
};

export default ScreenBedTimeStart;
