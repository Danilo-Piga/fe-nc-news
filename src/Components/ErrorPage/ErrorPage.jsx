import "./ErrorPage.css";

const ErrorPage = ({ message }) => {
  console.log();
  return (
    <section>
      <h1 className="error-msg">{message?.msg || message}</h1>
      <img
        className="error-img"
        src="https://i.gifer.com/7iJR.gif"
        alt="404 Error animation. Animated image of the earth slowly spining in a star filled space scene. Where the earth spinning replaces the 0"
      />
    </section>
  );
};

export default ErrorPage;
