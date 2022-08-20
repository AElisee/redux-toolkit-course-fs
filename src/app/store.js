import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "./feacture/pictures.slice";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
