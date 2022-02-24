import { useState } from "react";
import { Form, Button, ListGroup, Card } from "react-bootstrap";
import ProfileItem from "./ProfileItem";
import "../css/Search.css";

export default function Search() {
  const [searchText, updateSearchText] = useState("");
  const [searchResults, updateSearchResults] = useState([]);

  function search() {
    fetch("/searchForUsername?text=" + searchText)
      .then((res) => res.json())
      .then((data) => updateSearchResults(data))
      .catch((err) => console.error(err));
  }

  return (
    <div className="search">
      <div className="search-wrapper">
        <Form className="search-form">
          <Form.Group className="search-field">
            <Form.Control
              type="text"
              onInput={(e) => updateSearchText(e.target.value)}
              placeholder="Search for a username"
            />
          </Form.Group>
          <Button variant="primary" onClick={search}>
            Search
          </Button>
        </Form>
        {searchResults.length > 0 ? (
          <div className="search-results-wrapper">
            <Card style={{ width: "100%" }}>
              <ListGroup variant="flush">
                {searchResults.map((item, idx) => (
                  <ProfileItem {...item} idx={idx} />
                ))}
              </ListGroup>
            </Card>
          </div>
        ) : (
          <p>No Search Results</p>
        )}
      </div>
    </div>
  );
}
