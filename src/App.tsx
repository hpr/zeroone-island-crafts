import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import { items } from './items';
import { Item } from './types';
import { ColDef } from 'ag-grid-community';

function App() {
  const gridRef = React.useRef<AgGridReact>(null);
  const keys = Object.keys(items) as Item[];
  const [rowData, setRowData] = React.useState(keys.map((field) => ({
    item: field,
    ...items[field],
    // ...keys.reduce((acc, key) => {
    //   if (field in items[key]) {
    //     const val = items[key][field];
    //     acc[key] = Array.isArray(val) ? val.join(', ') : val;
    //   }
    //   return acc;
    // }, {} as { [k in Item]?: Item | string }),
  })));
  return (
    <div className="App">
      <div className="ag-theme-alpine" style={{ width: '100%', height: '100vh' }}>
        <AgGridReact
          enableBrowserTooltips
          ref={gridRef}
          rowData={rowData}
          defaultColDef={{ resizable: true, width: 70, tooltipValueGetter: ({ data, colDef }) => data[(colDef as ColDef).field!] }}
          columnDefs={[{ field: 'item', pinned: 'left', width: 100 }, ...Object.keys(items).map((field) => ({ field }))]}
        />
      </div>
    </div>
  );
}

export default App;
