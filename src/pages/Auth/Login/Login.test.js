import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import axios from '../../../axios-auth';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('axios', () => {
	return {
		create: () => {
			return {
				post: jest.fn(() => Promise.resolve('')),
				get: jest.fn(() => Promise.resolve('')),
			};
		},
	};
}); //zasymulowanie swoich danych anie tych z backendu

test('renders Logowanie', () => {
	render(
		<Router>
			<Login />;
		</Router>
	);
	expect(screen.getByText(/Logowanie/i)).toBeInTheDocument();
});

test('changes email value', () => {
	render(
		<Router>
			<Login />;
		</Router>
	);
	const emailInput = screen.getByLabelText('Email');
	fireEvent.change(emailInput, { target: { value: 'marek' } });
	expect(emailInput.value).toBe('marek');
});

test('show error on fail login', async () => {
	axios.post.mockImplementation(() => {
		Promise.reject({ response: { data: { error: { message: 'Błędne dane' } } } });
	});
	render(
		<Router>
			<Login />;
		</Router>
	);
	const submitButton = screen.getByText('Zaloguj');
	fireEvent.click(submitButton);
	await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
	expect(screen.getByText('Błędne dane')).toBeInTheDocument();
});
