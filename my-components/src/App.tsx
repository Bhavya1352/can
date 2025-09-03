import { useState } from "react";
import InputField from "./components/InputField/InputField";
import DataTable from "./components/DataTable/DataTable";

interface Row {
  id: number;
  name: string;
  age: number;
  city: string;
}

const rows: Row[] = [
  { id: 1, name: "Alice", age: 30, city: "New York" },
  { id: 2, name: "Bob", age: 25, city: "London" },
  { id: 3, name: "Charlie", age: 28, city: "Paris" },
];

function App() {
  const [name, setName] = useState("");
  const [selectedRows, setSelectedRows] = useState<Row[]>([]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Front-End Assignment Demo</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>InputField Example</h2>
        <InputField
          label="Your Name"
          placeholder="Type your name..."
          helperText="This is a demo of InputField"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Value typed: <strong>{name}</strong></p>
      </section>

      <section>
        <h2>DataTable Example</h2>
        <DataTable
          data={rows}
          selectable
          onRowSelect={(sel) => setSelectedRows(sel)}
          columns={[
            { key: "c1", title: "Name", dataIndex: "name" },
            { key: "c2", title: "Age", dataIndex: "age" },
            { key: "c3", title: "City", dataIndex: "city" },
          ]}
        />
        <h3>Selected Rows</h3>
        <pre>{JSON.stringify(selectedRows, null, 2)}</pre>
      </section>
    </div>
  );
}

export default App;