import React from 'react';
import { render, screen } from '@testing-library/react';
import S_App from './App';

test('renders learn react link', () => {
    render(<S_App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
