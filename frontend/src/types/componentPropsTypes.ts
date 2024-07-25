export interface PhotoSelectorProps {
    getSelectedImage: (img: string) => void;
}

export interface FilmSelectorProps {
    selectedImage: string | null;
    imageFile: File | null;
}
