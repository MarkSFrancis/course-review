import { render, screen } from 'test-utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('should render with the role "status"', () => {
    render(<Spinner />);

    const spinner = screen.queryByRole('status');

    expect(spinner).toBeInTheDocument();
  })
});
