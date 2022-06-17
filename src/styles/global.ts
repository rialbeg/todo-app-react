import { createGlobalStyle } from "styled-components";

interface GlobaStyleProps {
  backgroundColor: string;
}

export const GlobaStyle = createGlobalStyle<GlobaStyleProps>`
	:root{
		//Primary

		--bright-blue: hsl(220, 98%, 61%);
		--linear-gradient-begin: hsl(192, 100%, 67%);
		--linear-gradient-end:hsl(280, 87%, 65%);  

		//Light Theme

		--very-light-gray: hsl(0, 0%, 98%);
		--very-light-grayish-blue: hsl(236, 33%, 92%);
		--light-grayish-blue: hsl(233, 11%, 84%);
		--dark-grayish-blue: hsl(236, 9%, 61%);
		--very-dark-grayish-blue: hsl(235, 19%, 35%);

		//Dark Theme

		--very-dark-blue: hsl(235, 21%, 11%);
		--very-dark-desaturated-blue: hsl(235, 24%, 19%);
		--light-grayish-blue: hsl(234, 39%, 85%);
		--light-grayish-blue-hover: hsl(236, 33%, 92%);
		--dark-grayish-blue: hsl(234, 11%, 52%);
		--very-dark-grayish-blue: hsl(233, 14%, 35%);
		--very-dark-grayish-blue: hsl(237, 14%, 26%);
	}

	*{
		margin:0;
		padding:0;
		box-sizing: border-box;
	}
	html{
		font-size:62.5%;
	}
	body{
		font-family: 'Josefin Sans', sans-serif;
		background-color: ${(props) => props.backgroundColor};
	}
	@media(max-width:700px){
		html{ 
			font-size: 50%;
		}
	}
	@media(max-width:300px){
		html{ 
			font-size: 40%;
		}
	}
	
`;
