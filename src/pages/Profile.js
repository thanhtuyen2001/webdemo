import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Profile = () => {
  let {username} = useParams();

  let [isFollow, setIsFollow] = useState('Follow');
  // var isFollow = "Follow";
  let changeFollow = (e) => {
    if (isFollow === 'Follow'){
      setIsFollow("Unfollow");
    }
    else setIsFollow("Follow");
    console.log(e);
  }

  return (
    
    <div >
      {/* this is profile page for {username}! */}

    <Card border="warning" style={{ width: '18rem', margin: "30px auto" }}>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/0c/14/4a/0c144ad96b703877bc9bfbefa71c2c6b.jpg" />
      <Card.Body>
        <Card.Title >{username}</Card.Title>
        <Card.Text>Web Developer</Card.Text>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">Message</Button>
        <Button variant="warning" className="m-3 btnFollow" onClick={changeFollow}>{isFollow}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile