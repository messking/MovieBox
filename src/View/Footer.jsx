import React from 'react';
import styled from 'styled-components';

function Footer({ update_view_cast }) {
	return (
		<StyledFooter>
			<a href="/">
				<h4>Designed & developed by Or Messing</h4>
			</a>
			<StyledContact>
				<a href="https://facebook.com/omessing">
					<i class="fab fa-facebook fa-lg" />
				</a>

				<a href="https://github.com/messking">
					<i class="fab fa-github fa-lg " />
				</a>
				<a href="https://linkedin.com/in/or-messing">
					<i class="fab fa-linkedin fa-lg " />
				</a>

				<a href="mailto:ormessing96@gmail.com?Subject=Movie%Box">
					<i class="fas fa-envelope fa-lg" />
				</a>
			</StyledContact>

			<a href="https://github.com/messking/MovieBox">
				<h4>
					{/* <i class="fab fa-github" /> */}
					View Code
				</h4>
			</a>
		</StyledFooter>
	);
}

export default Footer;

const StyledContact = styled.div`
	display: flex;

	a {
		margin: 0.3rem;
	}
`;

const StyledFooter = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	// flex-wrap: wrap;
	color: gray;
	font-size: 1.7rem;
	height: 10rem;
	background-color: transparent;

	h4 {
		text-decoration: underline;
		padding: 8px;
		cursor: pointer;
		font-weight: 100;
		&:hover {
			color: dimgray;
		}
	}

	a:visited {
		color: gray;
		text-decoration: none;
	}

	a:link {
		color: gray;
		text-decoration: none;
	}
`;
