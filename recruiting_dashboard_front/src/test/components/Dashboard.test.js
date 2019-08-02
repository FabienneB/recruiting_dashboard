import React from 'react';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import Dashboard from '../../components/Dashboard';


describe('Dasboard component', () => {
  test('it contains the right class', () => {
    const props = {
      filteredCandidates: [ {id: 1, category: 'waiting', name: 'Jose'}]
    }
    const { container } = render(<Dashboard  {...props} variant="default" />);
    expect(container.firstChild.classList.contains('dashboard')).toBe(true);
  })

})