// каждый элемент: { src, rotate (градус наклона), size: 'sm' | 'md' | 'lg' }
export default function PhotoCollage({ photos }) {
  return (
    <div className="photo-collage">
      {photos.map((photo, i) => (
        <div
          key={i}
          className={`collage-item collage-${photo.size || 'md'}`}
          style={{ '--rotate': `${photo.rotate ?? 0}deg` }}
        >
          <img src={photo.src} alt="" />
        </div>
      ))}
    </div>
  )
}