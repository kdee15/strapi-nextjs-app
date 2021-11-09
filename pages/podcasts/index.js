const Home = ({ podcasts, error }) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <ul className="kd-wow">
            {podcasts.map((podcasts) => (
              <li key={podcasts.id}>
                <span>{podcasts.Title}</span>
                <span>{podcasts.Description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    // Parses the JSON returned by a network request
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);
    // Checks if a network request came back fine, and throws an error if not
    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }

      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const podcasts = await fetch("http://localhost:1337/podcasts", {
      method: "GET",
      headers,
    })
      .then(checkStatus)
      .then(parseJSON);

    return { podcasts };
  } catch (error) {
    return { error };
  }
};

export default Home;
