import React from 'react';
import './style.scss';


function notice () {
	
}

export default {
	success:success(content: string, duration?: number, onClose?: () => void, mask?: boolean) {
	    return notice(content, 'success', duration, onClose, mask);
	  }
};

