import React from 'react';
import DownArrowButtonStyles from './DownArrowButton.module.css';
import ArrowDownIcon from '../../assets/ArrowDownIcon';

const DownArrowButton = ({nextScreen, loginButton}) => {
	return (
		<div className={ loginButton ? DownArrowButtonStyles.login_btn : DownArrowButtonStyles.down_btn} onClick={nextScreen} >
			<ArrowDownIcon />
		</div>
	);
};

export default DownArrowButton;
