import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const idx = state.items.findIndex(
        (contact) => contact.id === action.payload
      );
      if (idx !== -1) {
        state.items.splice(idx, 1);
      }
    },
  },
});

export default slice.reducer;
export const { addContact, deleteContact } = slice.actions;
