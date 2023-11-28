interface Props {
  width?: number;
  height?: number;
}

export default function Loading({ width, height }: Props) {
  return (
    <div className="loader-container">
      <div className="spinner" style={{ width: width, height: height }}></div>
    </div>
  );
}
