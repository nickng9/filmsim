import { useAppSelector, useAppDispatch } from '../../lib/hooks';

const PhotoEditor = () => {
  const base64Pictures = useAppSelector((state) => state.photos.photos);

  return (
    <div>
      {base64Pictures.map((file, index) => (
        <div key={index}>
          <img src={file} />
        </div>
      ))}
      
    </div>
  );
};

export default PhotoEditor;
