// src/lib/features/photos/photosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface PhotosState {
  photos: string[];
}

const initialState: PhotosState = {
  photos: [],
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPhotos(state, action: PayloadAction<string[]>) {
      state.photos = action.payload;
    },
  },
});

export const { setPhotos } = photosSlice.actions;

export const selectPhotos = (state: RootState) => state.photos.photos;

export default photosSlice.reducer;
