const HomeComponent = (props) => {
    const{user} = props
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Welcome back, {user.username}</h1>
          </div>
          <div className="card-body">
            <p>Your account type is: {user.admin ? "Administrator" : "User"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
