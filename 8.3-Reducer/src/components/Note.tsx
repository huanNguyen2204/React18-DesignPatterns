/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useState } from "react";

type Note = {
  id: number;
  note: string;
};

type Action = {
  type: string;
  payload?: any;
};

type ActionTypes = {
  ADD: "ADD";
  UPDATE: "UPDATE";
  DELETE: "DELETE";
};

const actionType: ActionTypes = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

const initialNotes: Note[] = [
  {
    id: 1,
    note: "Note1",
  },
  {
    id: 2,
    note: "Note2",
  },
];

const reducer = (state: Note[], action: Action) => {
  switch (action.type) {
    case actionType.ADD:
      return [...state, action.payload];

    case actionType.DELETE:
      return state.filter((note) => note.id !== action.payload);

    case actionType.UPDATE:
      const updateNote = action.payload;
      return state.map((n: Note) => (n.id === updateNote.id ? updateNote : n));

    default:
      return state;
  }
};

const Notes = () => {
  const [notes, dispatch] = useReducer(reducer, initialNotes);
  const [note, setNote] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const newNote = {
      id: Date.now(),
      note
    }

    dispatch({ type: actionType.ADD, payload: newNote })
  }

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {
          notes.map((n: Note) => (
            <li key={n.id}>
              {n.note} {" "}
              <button onClick={() => dispatch({ type: actionType.DELETE, payload: n.id })}>X</button>
              <button
                onClick={() => dispatch({ type: actionType.UPDATE, payload: { ...n, note } })}
              >
                Update
              </button>
            </li>
          ))
        }
      </ul>

      <form onSubmit={handleSubmit}>
        <input 
          placeholder="New note"
          value={note}
          onChange={(e: any) => setNote(e.target.value)}
        />
      </form>
    </div>
  )
}

export default Notes
