import { Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ProfileItem({
  username,
  first_name,
  last_name,
  photo,
  followers,
}) {
  const navigate = useNavigate();

  return (
    <ListGroup.Item>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={photo ? photo.asset.url : "https://via.placeholder.com/80"}
            style={{ width: "80px" }}
          />
          <div>
            <p className="px-2 m-0">
              <strong>{username}</strong>
            </p>
            <p className="px-2 m-0">
              {(first_name ? first_name : "") +
                " " +
                (last_name ? last_name : "")}
            </p>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <p className="px-2">
            <strong>{followers} Followers</strong>
          </p>
          <Button
            variant="success"
            className="px-2 m-0"
            onClick={() => navigate("/profile/" + username)}
          >
            View
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}
