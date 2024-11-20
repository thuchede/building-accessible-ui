import {type FormEvent, useState} from "react";

export const Form = () => {
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState<string | undefined>(undefined)

	if (submitted && !error) {
		return <div>
		<p className='text-green-400'>You're all set!</p>
			<button className='btn' onClick={() => setSubmitted(false)}>Go back</button>
		</div>
	}

	const handleSubmit = () => {
		console.log("submitted");
		setSubmitted(true);
		setError(undefined);
	}

	return <div className={'grid grid-cols-2 gap-1'}>
		<div>Firstname:</div>
		<input id='var-one' />
		<div>Lastname:</div>
		<input id='var-two' />
		<div>Phone</div>
		<input id='var-three' />

		<button className={'btn col-span-2'} onClick={handleSubmit}>Submit</button>
	</div>
}


export const BetterForm = () => {
	const [submitted, setSubmitted] = useState(false)
	const [error, setError] = useState<string | undefined>(undefined)


	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		setSubmitted(true);
		setError(undefined)
	}
	if (submitted && !error) {
		return <div>
			<p aria-live='polite' className='text-green-400'>You're all set!</p>
			<button className='btn' onClick={() => setSubmitted(false)}>Go back</button>
		</div>
	}

	return <>
			<h3 id='form-title' className='text-center'>Register To the next TZ:</h3>
		<form className={'grid grid-cols-2 gap-1'} onSubmit={handleSubmit} autoComplete="on">
			<label htmlFor="firstname">Firstname</label>
			<input className='ps-2' type="text" id="firstname" name='firstname' placeholder='Jane' autoComplete="given-name"
						 required aria-required='true'/>
			<label htmlFor="lastname">Lastname</label>
			<input className='ps-2' type="text" id="lastname" name='lastname' placeholder='Doe' autoComplete="family-name"/>
			<label htmlFor="phone">Phone</label>
			<input className='ps-2' type="text" id="phone" name='phone' placeholder='98765432'
						 autoComplete="phone"/>

			<input className={'btn col-span-2'} type='submit' value="Submit"></input>
	</form></>
}
