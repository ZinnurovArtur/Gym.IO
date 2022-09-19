import db from "../../../firebase";

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import BoardList from "../BoardList";
import Kanban from "./Kanban";

import { v4 as uuidv4 } from "uuid";

const Prekanban = ({ logOut, userId, name }) => {
  const boards = useBoards(userId);

  const addNewBoard = (e) => {
    e.preventDefault();
    const uid = uuidv4();

    db.collection(`users/${userId}/boards`)
      .doc(uid)
      .set({ name: e.target.elements.boardName.value });

    const columnOrder = { id: "columnOrder", order: [] };

    db.collection(`users/${userId}/boards/${uid}/columns`)
      .doc("columnOrder")
      .set(columnOrder);

    e.target.elements.boardName.value = "";
  };

  const deleteBoard = (id) => {
    db.collection(`users/${userId}/boards`).doc(id).delete();
  };

  return boards !== null ? (
    <Router>
    <Routes>
      <Route exact path="/">
        <BoardList
          deleteBoard={deleteBoard}
          logOut={logOut}
          boards={boards}
          addNewBoard={addNewBoard}
          name={name}
        ></BoardList>
      </Route>
    

      <Route path="/board/:boardId">
        <Kanban userId={userId} />
      </Route>
      </Routes>
    </Router>
  ) : (
    <div className="spinner h-screen w-screen" />
  );
};

export default Prekanban;
