import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import PreviewIcon from '@mui/icons-material/Preview';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Datatable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (CIN) => {
    setData(data.filter((item) => item.CIN !== CIN));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: " Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton"><PreviewIcon/></div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.CIN)}
            >
             <DeleteIcon/>
            </div>
          <Link to="/users/form" style={{ textDecoration: "none" }} >
          <div className="editButton" ><ModeEditIcon/></div>
           </Link>

          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Liste des utilisateurs:
        <Link to="/users/new" className="link">
        <PersonAddIcon/>
                </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        getRowId={(row) => row.CIN} 
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;