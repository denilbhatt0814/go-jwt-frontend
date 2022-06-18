const Home = (props) => {
  return (
    <div>{props.name ? "Hello, " + props.name : "You're not logged in"}</div>
  );
};

export default Home;
