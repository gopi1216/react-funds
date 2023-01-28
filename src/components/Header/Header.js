const Header = (props) => {
  return(
    <header>
      <h1>{props.title}</h1>
      <span>Sample text</span>
      <strong>Strong text</strong>
    </header>
  );
}

export default Header;