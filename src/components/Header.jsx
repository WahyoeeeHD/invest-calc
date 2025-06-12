export function Header({ src, alt }) {
  return (
    <header id="header">
      <img src={src} alt={alt} />
      <h1>Investment Calculator</h1>
    </header>
  );
}
