import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';

interface SampleData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleData: SampleData[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'Active' },
];

const columns = [
  { key: 'name', title: 'Name', dataIndex: 'name' as keyof SampleData, sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' as keyof SampleData, sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' as keyof SampleData },
  { key: 'status', title: 'Status', dataIndex: 'status' as keyof SampleData },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns,
  },
};

export const Loading: Story = {
  args: {
    data: sampleData,
    columns,
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns,
  },
};

export const Selectable: Story = {
  args: {
    data: sampleData,
    columns,
    selectable: true,
    onRowSelect: (selectedRows) => {
      console.log('Selected rows:', selectedRows);
    },
  },
};