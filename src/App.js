import { useGetAllAttractionsQuery } from "./services/attraction";
import { DataGrid, GridColDef, GridValueGetterParams , GridActionsCellItem } from "@mui/x-data-grid";
import Container from "@mui/material/Container";
import Avatar from '@mui/material/Avatar';
import Attractioncard from "./Attractioncard";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch } from 'react-redux'
import { setAttractonID } from "./features/attractions/attractionSlice";



function App() {
  const { data, error, isLoading } = useGetAllAttractionsQuery();
  const dispatch = useDispatch()


  const columns = [
    { field: "id", headerName: "id", width: 50 },
    { field: "coverimage", headerName: "coverimage", width: 100,
    renderCell:(params) => <Avatar src={params.value} variant="square" /> },
    { field: "name", headerName: "name", width: 150 },
    { field: "detail", headerName: "detail", width: 500 },
    { field: "latitude", headerName: "latitude", width: 100 },
    { field: "longitude", headerName: "longitude", width: 100 },
    { field: "action", headerName: "action", width: 100,
    renderCell:(params) =>
    <GridActionsCellItem
      icon={<VisibilityIcon/>}
      onClick={() => dispatch(setAttractonID(params.id))}
    />
  }

  ];

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
         <Container maxWidth="lg">
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
          <div>
            <Attractioncard/>
          </div>
        </Container>
        </>
      ) : null}
    </div>
  );
}

export default App;
