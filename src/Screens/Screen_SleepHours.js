import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import ScreenStyles from './Screen.module.css';

const ScreenSleepHours = () => {
	const text =
		"You seem to have a sleep efficiency of 45%. We'll get this upto 80%";
	return (
		<div className={ScreenStyles.screen_container}>
			<TextWrapper text={text} />
			<h1 style={{ textAlign:'center' }} >&#128526;</h1>
		</div>
	);
};

export default ScreenSleepHours;
