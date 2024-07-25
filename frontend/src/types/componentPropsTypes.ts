export interface PhotoSelectorProps {
    getSelectedImage: (img: string) => void;
    filteredImage: string;
}

export interface FilmSelectorProps {
    selectedImage: string | null;
    imageFile: File | null;
    getFilteredImage: (img: string) => void;
}
