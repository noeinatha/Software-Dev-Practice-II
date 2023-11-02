import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookingState = {
  bookingItems: BookingItem[];
};

const initialState: BookingState = { bookingItems: [] };

export const bookSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      if (state.bookingItems != null) {
        state.bookingItems.pop();
      }
      state.bookingItems.push(action.payload);
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const remainItems = state.bookingItems.filter((obj) => {
        return (
          obj.firstname !== action.payload.firstname ||
          obj.lastname !== action.payload.lastname ||
          obj.IDnumber !== action.payload.IDnumber ||
          obj.hospital !== action.payload.hospital ||
          obj.date !== action.payload.date
        );
      });
      state.bookingItems = remainItems;
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
