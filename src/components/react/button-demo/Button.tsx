import type { KeyboardEvent} from "react";

export const HTMLButton = () => {
	const handleClick = () => alert("button clicked");
	return <button className="btn" onClick={handleClick}>Save</button>
}

export const ButtonBase = () => {
	const handleClick = () => alert('button clicked');
	return <div className='btn' onClick={handleClick}>Save</div>
}

export const ButtonFocus = () => {
	const handleClick = () => alert('button clicked');
	return <div
		tabIndex={0}
		className='btn'
		onClick={handleClick}
	>Save</div>
}

export const ButtonKeyUp = () => {
	const handleClick = () => alert('button clicked');
	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.code === "Enter") {
			handleClick()
		}
	};
	return <div
		tabIndex={0}
		className='btn'
		onKeyUp={handleKeyUp}
		onClick={handleClick}
	>Save</div>
}

export const ButtonAria = () => {
	const handleClick = () => alert('button clicked');
	const handleKeyUp = (event: KeyboardEvent) => {
		if (event.code === "Enter") {
			handleClick()
		}
	};
	return <div
		role='button'
		tabIndex={0}
		className='btn'
		onKeyUp={handleKeyUp}
		onClick={handleClick}
	>Save</div>
}
