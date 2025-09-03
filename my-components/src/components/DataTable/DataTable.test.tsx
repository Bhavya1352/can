
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DataTable from './DataTable';

interface MockData {
  id: number;
  name: string;
  age: number;
}

const mockData: MockData[] = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Doe', age: 25 },
];

const mockColumns = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age' },
];

describe('DataTable', () => {
  it('renders with data', () => {
    render(<DataTable columns={mockColumns} data={mockData} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('shows a loading message when loading', () => {
    render(<DataTable columns={mockColumns} data={[]} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('shows an empty message when there is no data', () => {
    render(<DataTable columns={mockColumns} data={[]} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('sorts the data when a sortable column header is clicked', () => {
    render(<DataTable columns={mockColumns} data={mockData} />);
    const nameHeader = screen.getByText('Name');
    fireEvent.click(nameHeader);
    const rows = screen.getAllByRole('row');
    // The first row is the header, so we check the second row
    expect(rows[1].children[0].textContent).toBe('Jane Doe');
  });

  it('selects a row when a selectable row is clicked', () => {
    const handleRowSelect = vi.fn();
    render(<DataTable columns={mockColumns} data={mockData} selectable onRowSelect={handleRowSelect} />);
    const row = screen.getByText('John Doe');
    fireEvent.click(row);
    expect(handleRowSelect).toHaveBeenCalledWith([mockData[0]]);
  });
});
