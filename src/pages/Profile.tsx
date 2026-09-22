function Profile() {
  const storedUser = localStorage.getItem("loggedInUser");
  const user = JSON.parse(storedUser!);

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      <div className="profile-card">
        <div className="profile-avatar">👤</div>

        <h2>Name : {user.name}</h2>
        <p>Mobile : {user.mobile}</p>
      </div>
    </div>
  );
}
export default Profile;
