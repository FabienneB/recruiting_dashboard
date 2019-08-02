import React from 'react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import DashboardWrapper from '../../pages/DashboardWrapper';
import Dropdown from '../../components/DropDown';


describe('DashboardWrapper page', () => {
  test('it contains the right className', () => {
    const { container } = render(<DashboardWrapper variant="default" />);
    expect(container.firstChild.classList.contains('dashboard-wrapper')).toBe(true);
  }),

  test('dont display dropdown if displayDropdown is false and display title', () => {
    const title = 'job 1';
    const { container } = render(<DashboardWrapper displayDropdown={false} selectedJobTitle={title} />);
    expect(container.querySelector('#dashboard-nav').textContent).not.toBeNull();
    expect(container.querySelector('dd-wrapper')).toBeNull();
  })
})

