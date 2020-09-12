import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  InputBase,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Pagination } from "@material-ui/lab";
import { Link } from "react-router-dom";
import "../styles/List.scss";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    title: "제목",
    comment: 5,
    like: 1,
    look: 3,
    writer: "a",
  },
  {
    title: "제목2",
    comment: 3,
    like: 6,
    look: 1,
    writer: "da",
  },
  {
    title: "제목3",
    comment: 54,
    like: 12,
    look: 324,
    writer: "an",
  },
];

export default function List() {
  const classes = useStyles();
  const a = () => {
    axios.get("/api").then((response) => {
      console.log(response);
    });
  };

  a();

  return (
    <section>
      <div className="loginWrap">
        <Button variant="contained" color="primary">
          로그인
        </Button>
        <Button variant="contained" color="primary">
          회원가입
        </Button>
      </div>
      <Paper component="form" className="search" elevation={3}>
        <InputBase className={classes.input} placeholder="Search" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={row.idx}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.comment}</TableCell>
                <TableCell align="right">{row.like}</TableCell>
                <TableCell align="right">{row.look}</TableCell>
                <TableCell align="right">{row.writer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" className="createBtn">
        <Link to="/create">글쓰기</Link>
      </Button>
      <Pagination count={10} />
    </section>
  );
}
