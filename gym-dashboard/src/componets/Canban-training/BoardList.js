import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "./Modal";

const BoardList = ({ boards, addNewBoard, deleteBoard, name }) => {
  const [modal, setModal] = useState(false);
  const [idTobeDeleted, setId] = useState(null);

  const removeBoard = (id) => {
    setModal(false);
    deleteBoard(id);
  };
  const openDeleteModal = (id) => {
    setId(id);
    setModal(true);
  };
  if (navigator.onLine !== true) {
    return (
      <div className="p-12">
        <div className="my-12">
          <h1 className="text-xl text-red-800">
            The network is disconnected. Connect and try again
          </h1>
        </div>
      </div>
    );
  } else
    return (
      <div className="bg-gradient-to-br from-white via-indigo-100 to-primary h-screen px-6 py-4 sm:py-20 sm:px-24">
        <div className="flex flex-col items-center justify-center h-60">
          <h1 className="text-2xl font-bold">
            Click on the button to open the modal.
          </h1>
          <button
            className="px-4 py-2 text-purple-100 bg-purple-600 rounded-md"
            type="button"
            onClick={() => {
              openDeleteModal(true);
            }}
          >
            Open Modal
          </button>

          {modal && (
            <Modal removeBoard={removeBoard} setOpenModal={setModal} />
          )}
        </div>
        <div className="flex flex-col my-2">
          <div className="my-12">
            <h1 className="text-xl text-blue-900">Your Boards</h1>
            <div className="flex flex-wrap mt-2">
              {boards.map((b) => (
                <div
                  className="bg-white text-gray-700 mb-3 mr-4 py-4 px-6 rounded-sm shadow-md w-full sm:w-auto"
                  key={b.id}
                >
                  <div className="flex items-center justify-between">
                    <Link to={`/board/${b.id}`}>
                      <h2 className="text-lg sm:text-2xl text-gray-700 hover:text-gray-900">
                        {b.name}
                      </h2>
                    </Link>
                    <div
                      onClick={() => openDeleteModal(b.id)}
                      className="text-red-500 ml-6 cursor-pointer hover:text-red-700"
                    ></div>
                  </div>
                </div>
              ))}
              {boards.length === 0 ? (
                <h1 className="text-gray-700">
                  No Boards created yet. Why don't you go ahead and create one?
                </h1>
              ) : null}
            </div>
          </div>
        </div>
        <form
          onSubmit={addNewBoard}
          autoComplete="off"
          className="my-4 sm:my-8"
        >
          <label htmlFor="boardName" className="block text-xl text-blue-900">
            Make a new board
          </label>
          <div className="flex items-center mt-2">
            <input
              required
              type="text"
              name="boardName"
              className="bg-transparent border border-gray-500 px-2 py-1 rounded-sm placeholder-gray-700"
              placeholder="Enter a board name"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-900 text-green-50  rounded-sm px-2 py-1.5"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    );
};

export default BoardList;
