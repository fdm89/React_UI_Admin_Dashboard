import DataTable from "../../components/datatable/DataTable"
import { GridColDef,  } from "@mui/x-data-grid";
import './users.scss'
import { userRows } from "../../data";
import Add from "../../components/add/Add";
import { useState } from "react";
//import { useQuery } from "@tanstack/react-query";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "img",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
];



function Users() {
  const [open, setOpen] = useState(false)

  //const { isLoading, data } = useQuery({
   //    queryKey: ["reportData"],
   //    queryFn: () =>
    //    fetch("http://localhost:8800/api/users").then(
    //      (res) => res.json()
    //    ),
   //  });

  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users"  columns={columns} rows={userRows}/>
      {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div>
  )
}

export default Users