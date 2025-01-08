const PhotoGrid = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 bg-[#d1d5db]"
        >
          <img
            src={photo.url}
            alt={photo.name}
            className="w-full h-48 object-cover"
          />
          <p className="text-center mt-2 text-gray-900 font-medium">{photo.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
