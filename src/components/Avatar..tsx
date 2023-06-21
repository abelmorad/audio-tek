import user from "../../public/userprofile.png";

function Avatar() {
  return (
    <figure className="avatar">
      <img src={user} alt="dude" />
    </figure>
  );
}

export default Avatar;
