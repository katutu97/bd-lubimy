// Новый компонент ThreePhotosRowExtended.jsx
export default function ThreePhotosRowExtended({ photos }) {
  return (
    <div className="three-photos-row-extended">
      {photos.map((src, i) => (
        <img 
          key={i} 
          src={src} 
          alt="" 
          className={i === 1 ? 'three-photos-row-extended__center' : 'three-photos-row-extended__side'}
        />
      ))}
    </div>
  );
}