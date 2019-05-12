import React from 'react'

function Joke(props){
	const wholeJoke = {
		punchline: props.joke.punchline
	};

	if(typeof(props.joke.question) !== 'undefined'){
		wholeJoke.question = props.joke.question;
	}else{
		wholeJoke.question = '';
	}
	return(
		<div>
			<p>{wholeJoke.question}</p>
			<p>{wholeJoke.punchline}</p>
		</div>
	);
}

export default Joke