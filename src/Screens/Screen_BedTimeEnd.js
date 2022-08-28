import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';
import { BasicTimePicker } from '../Components/TimePicker/BasicTimePicker';
import { useNavigate } from 'react-router-dom';

const ScreenBedTimeEnd = () => {
	const navigate = useNavigate();
	const nextButtonClicked = () => {
		navigate('/sleep-hours');
	};

	const text = 'What time do you get out of bed to start your day?';
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

export default ScreenBedTimeEnd;
