const PhotoCard = ({ photo }) => {
  return (
    <div className="group relative">
      <img
        src={photo.url}
        alt={photo.name}
        className="w-full h-48 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
      />
      <div className="text-center mt-2">
        <p className="text-gray-700 font-medium">Descrição: {photo.name}</p>
        {photo.author && (
          <p className="text-sm text-gray-500">Foto por: {photo.author}</p>
        )}
      </div>
    </div>
  );
};

export default PhotoCard;
