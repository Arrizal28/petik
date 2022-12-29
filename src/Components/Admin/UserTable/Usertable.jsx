import React, { useEffect } from "react";
import { getallusers } from "../../../Redux/Actions/adminAction";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./usertable.scss";

function Usertable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { getusers } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getallusers());
  }, [dispatch]);

  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Id</TableCell>
              <TableCell className="tableCell">Email</TableCell>
              <TableCell className="tableCell">Role</TableCell>
              <TableCell className="tableCell">Login Type</TableCell>
              <TableCell className="tableCell">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getusers?.data?.map((item) => {
              return (
                <>
                  <TableRow key={item.id}>
                    <TableCell className="tableCell">{item.id}</TableCell>
                    <TableCell className="tableCell">{item.email}</TableCell>
                    {item.role_id === 2 ? (
                      <TableCell className="tableCell">Buyer</TableCell>
                    ) : (
                      <TableCell className="tableCell">Admin</TableCell>
                    )}
                    <TableCell className="tableCell">
                      {item.user_type}
                    </TableCell>
                    <TableCell className="tableCell">
                      <Button
                        variant="outlined"
                        onClick={() => {
                          navigate(`/admin/user/${item.id}`);
                        }}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Usertable;
