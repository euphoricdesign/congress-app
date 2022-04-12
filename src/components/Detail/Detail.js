import React from "react";
import useMembers from "../../hooks/useMembers";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import atras from '../../images/atras.png'
import BarLoader from "react-spinners/BarLoader";
import "./Detail.scss";

function Detail() {
  const {data,loading} = useMembers()
  const { id } = useParams()
  


  const filteredUsers = data.filter(obj => obj.id === id)
  console.log(filteredUsers)

  const fullName = () => filteredUsers[0] && 
    `${filteredUsers[0].short_title} ${filteredUsers[0].first_name} ${filteredUsers[0].last_name}`


  return (
    <Container>
      {filteredUsers[0] ? (
      
      <div className="memberDetailsContainer">
        <Link className='link' to={"/"} ><img src={atras} alt="" /></Link>
        <div className="fullname">{fullName()}</div>
        <div className="memberCard">
          <div className="memberCard__panel">
            <p><span className="flecha">➱</span> title: {filteredUsers[0].title}</p>
            <p><span className="flecha">➱</span> total votes: {filteredUsers[0].total_votes}</p>
            <p><span className="flecha">➱</span> party: {filteredUsers[0].party}</p>
            <p><span className="flecha">➱</span> state: {filteredUsers[0].state}</p>
            <p><span className="flecha">➱</span> gender: {filteredUsers[0].gender}</p>
          </div>
          <div className="memberCard__panel">
            <p><span className="flecha">➱</span> twitter account: @{filteredUsers[0].twitter_account}</p>
            <p><span className="flecha">➱</span> facebook account: {filteredUsers[0].facebook_account}</p>
            <p><span className="flecha">➱</span> youtube account: {filteredUsers[0].youtube_account}</p>
            <p><span className="flecha">➱</span> phone: {filteredUsers[0].phone}</p>
            <p><span className="flecha">➱</span> office: {filteredUsers[0].office}</p>
          </div>
        </div>
      </div>
      ) : <div className="loader">
      <BarLoader 
        size={80} 
        color={"#5790e6;"}
        loading={loading} 
        />
    </div>}
    </Container>
  );
}

export default Detail;
