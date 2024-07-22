import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PhotosState {
  photos: string[];
}

const initialState: PhotosState = {
  photos: []
}

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<string[]>) => {
      state.photos = action.payload;
    }
  }
});

export const { setPhotos } = photosSlice.actions;
export const photosReducer = photosSlice.reducer;
