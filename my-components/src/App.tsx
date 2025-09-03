import React, { useState } from "react";
import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  status: 'Active' | 'Inactive';
}

const employees: Employee[] = [
  { id: 1, name: "Alice Johnson", email: "alice@company.com", department: "Engineering", salary: 95000, status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@company.com", department: "Design", salary: 75000, status: "Active" },
  { id: 3, name: "Charlie Brown", email: "charlie@company.com", department: "Marketing", salary: 65000, status: "Inactive" },
  { id: 4, name: "Diana Prince", email: "diana@company.com", department: "Engineering", salary: 105000, status: "Active" },
  { id: 5, name: "Eve Wilson", email: "eve@company.com", department: "HR", salary: 70000, status: "Active" },
];

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRows, setSelectedRows] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🎨 React Component Showcase</h1>
          <p className="text-lg text-gray-600">Professional InputField & DataTable Components</p>
        </header>

        {/* InputField Showcase */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">📝 InputField Component</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <InputField
                label="Full Name"
                placeholder="Enter your full name"
                helperText="This field supports clear functionality"
                value={name}
                onChange={(e) => setName(e.target.value)}
                clearable
                onClear={() => setName("")}
                size="md"
                variant="outlined"
              />
              
              <InputField
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                helperText="We'll never share your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                clearable
                onClear={() => setEmail("")}
                variant="filled"
              />
              
              <InputField
                label="Password"
                type="password"
                placeholder="Enter secure password"
                helperText="Click the eye icon to toggle visibility"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
              />
            </div>
            
            <div className="space-y-6">
              <InputField
                label="Loading State"
                placeholder="Processing..."
                loading={loading}
                disabled={loading}
                variant="outlined"
              />
              
              <InputField
                label="Error State"
                placeholder="Invalid input"
                errorMessage="This field is required"
                invalid
                variant="outlined"
              />
              
              <InputField
                label="Disabled State"
                placeholder="Cannot edit"
                disabled
                variant="ghost"
              />
              
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                {loading ? "Processing..." : "Test Loading State"}
              </button>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium mb-2">Form Values:</h3>
            <pre className="text-sm text-gray-600">{JSON.stringify({ name, email, password: password ? "***" : "" }, null, 2)}</pre>
          </div>
        </section>

        {/* DataTable Showcase */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">📊 DataTable Component</h2>
          
          <DataTable
            data={employees}
            selectable
            onRowSelect={(sel) => setSelectedRows(sel)}
            columns={[
              { key: "name", title: "Employee Name", dataIndex: "name", sortable: true },
              { key: "email", title: "Email", dataIndex: "email", sortable: true },
              { key: "department", title: "Department", dataIndex: "department", sortable: true },
              { key: "salary", title: "Salary", dataIndex: "salary", sortable: true },
              { key: "status", title: "Status", dataIndex: "status", sortable: true },
            ]}
          />
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <h3 className="font-medium mb-2">Selected Employees ({selectedRows.length}):</h3>
            {selectedRows.length > 0 ? (
              <div className="space-y-2">
                {selectedRows.map(emp => (
                  <div key={emp.id} className="text-sm text-gray-600">
                    {emp.name} - {emp.department} - ${emp.salary.toLocaleString()}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No employees selected</p>
            )}
          </div>
        </section>
        
        <footer className="text-center mt-12 text-gray-500">
          <p>Built with React, TypeScript, TailwindCSS & Storybook</p>
        </footer>
      </div>
    </div>
  );
}

export default App;