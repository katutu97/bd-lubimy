export default function ThreePhotosRow({ photos }) {
  return (
    <div className="three-photos-row">
      {photos.map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
    </div>
  )
}