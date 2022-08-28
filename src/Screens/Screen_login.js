import { React, useState } from 'react';
import TextWrapper from '../Components/TextWrapper/TextWrapper';
import DownArrowButton from '../Components/DownArrowButoon/DownArrowButton';
import ScreenStyles from './Screen.module.css';
import { useNavigate } from 'react-router-dom';

const ScreenLogin = () => {
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();
	const inputValueChangeHandler = (e) => {
		setInputValue(e.target.value);
	};
	const nextButtonClicked = () => {
		navigate('/sleep-struggling-period');
	};
	const text =
		"Our conversations are private & anonymus, so there is no login. Just choose nick name we're good to go.";
	return (
		<div className={ScreenStyles.screen_container}>
			<h1 className={ScreenStyles.login_header}>
				Hey! I'm <span>wysa</span>
			</h1>
			<TextWrapper text={text} />
			<div className={ScreenStyles.btns_container}>
				<div className={ScreenStyles.login_input}>
					<input
						type="text"
						placeholder="Choose a nickname..."
						className={ScreenStyles.login_inputbox}
						value={inputValue}
						onChange={inputValueChangeHandler}
					/>
				</div>
			</div>
			<div className={!inputValue && ScreenStyles.hide_element}>
				<DownArrowButton nextScreen={nextButtonClicked} />
			</div>
			<div className={ScreenStyles.acknowledge_container}>
				<p className={ScreenStyles.acknowledge_text}>
					By continuing, I confirm I am 13 or older and accept the{' '}
					<span>Terms of Service</span> and{' '}
					<span>Privacy Policy</span>{' '}
				</p>
			</div>
		</div>
	);
};

export default ScreenLogin;
