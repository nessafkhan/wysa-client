import { React, useState } from 'react';
import ScreenStyles from '../../Screens/Screen.module.css';

const Button = ({ buttonText }) => {
	const [isClicked, setIsClicked] = useState(false);
	const buttonClickHandler = () => {
		setIsClicked(!isClicked);
	};

	return (
		<button
			className={isClicked ? ScreenStyles.btn_clicked : ScreenStyles.btn}
			onClick={buttonClickHandler}
		>
			{buttonText}
		</button>
	);
};

export default Button;
