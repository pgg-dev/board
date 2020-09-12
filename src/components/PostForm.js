import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import "../styles/Create.scss";

export default function PostForm() {
  return (
    <section>
      <TextField
        style={{ margin: 8 }}
        placeholder="제목"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        placeholder="내용"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
      />
      <div className="btnWrap">
        <Button variant="contained" color="primary">
          <Link to="/">취소</Link>
        </Button>
        <div>
          <Button variant="contained" color="primary">
            <Link to="/create">사진 업로드</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/create">등록</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
