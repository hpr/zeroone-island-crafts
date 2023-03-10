import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import { items } from './items';
import { Item } from './types';
import { ColDef, IHeaderParams } from 'ag-grid-community';

function App() {
  const gridRef = React.useRef<AgGridReact>(null);
  const keys = (Object.keys(items) as Item[]).filter((key) => Object.keys(items[key]).length);
  const [rowData, setRowData] = React.useState(
    keys
      .map((field) => ({
        item: field,
        ...items[field],
        // ...keys.reduce((acc, key) => {
        //   if (field in items[key]) {
        //     const val = items[key][field];
        //     acc[key] = Array.isArray(val) ? val.join(', ') : val;
        //   }
        //   return acc;
        // }, {} as { [k in Item]?: Item | string }),
      }))
  );
  return (
    <div className="App">
      <button onClick={() => gridRef.current!.api.exportDataAsCsv()}>Export</button> contact (requests, etc): <a href="mailto:habs@sdf.org">habs@sdf.org</a>,
      discord sbah#1649
      <div className="ag-theme-alpine" style={{ width: '100%', height: '97vh' }}>
        <AgGridReact
          enableBrowserTooltips
          columnHoverHighlight
          ref={gridRef}
          rowData={rowData}
          defaultColDef={{
            resizable: true,
            width: 40,
            tooltipValueGetter: ({ data, colDef }) => data[(colDef as ColDef).field!],
            filter: true,
            cellRenderer: ({ value }: { value: string | string[] }) => {
              const items = value ? (Array.isArray(value) ? value : [value]) : [];
              return (
                <>
                  {items.map((v) => (
                    <img key={v} height={20} width={20} src={`assets/${v}.png`} />
                  ))}
                </>
              );
            },
            headerComponent: (props: IHeaderParams) =>
              props.column.getColId() === 'item' ? (
                props.displayName
              ) : (
                <img title={props.column.getColId()} height={20} width={20} src={`assets/${props.column.getColId()}.png`} />
              ),
            sortable: true,
          }}
          columnDefs={[{ field: 'item', pinned: 'left' }, ...keys.map((field) => ({ field }))]}
        />
      </div>
    </div>
  );
}

export default App;
