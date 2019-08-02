import React from 'react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import DropDown from '../../components/DropDown';


describe('DropDown component', () => {
  test('the list element doesnt exist if the job list is empty', () => {
    const props = {
      list: [],
      headerTitle: null
    }
    const { container } = render(<DropDown  {...props} variant="default" />);
    expect(container.querySelector('dd-list-item')).toBeNull();
  }),

  test('it renders list and title', () => {
    const props = {
      list: [{id: 1, title: 'job 1'}],
      headerTitle: 'job 1',
    }
    render(<DropDown {...props} />)
  }),

  test('it contains the right className', () => {
    const { container } = render(<DropDown variant="default" />);
    expect(container.firstChild.classList.contains('dd-wrapper')).toBe(true);
  })
})