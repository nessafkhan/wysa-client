import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';
import Button from '../Components/Button/ Button';
import { useNavigate } from 'react-router-dom';

const ScreenSleepStrugglingPeriod = () => {
	const navigate = useNavigate();
	const nextButtonClicked = () => {
		navigate('/bed-time-start');
	};

	const text =
		"That's a great goal. How long have you been struggling with your sleep?";

	const buttonsText = [
		'Less than 2 weeks',
		'2 to 8 weeks',
		'More than 8 weeks',
	];
	return (
		<div className={ScreenStyles.screen_container}>
			<TextWrapper text={text} />
			<div className={ScreenStyles.btns_container}>
				{buttonsText.map((item) => (
					<Button buttonText={item} />
				))}
			</div>
			<DownArrowButton nextScreen={nextButtonClicked} />
		</div>
	);
};

export default ScreenSleepStrugglingPeriod;
