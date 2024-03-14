import { render, fireEvent } from '@testing-library/react';
import Sidebar from '../components/sidebar'; 



describe('Sidebar', () => {
  it('should close sidebar when hamburger menu is clicked', () => {
    const { getByTestId } = render(<Sidebar />);
    const hamburgerMenu = getByTestId('hamburger-menu');
    const sidebar = getByTestId('sidebar');
    fireEvent.click(hamburgerMenu);
    expect(sidebar).toHaveBeenCalled();
  });
});


