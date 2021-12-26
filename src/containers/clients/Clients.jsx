import React from 'react';
import { SectionTitle, SectionSubtitle } from '../../components';
import Client from '../../components/client/Client';
import "./clients.css";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";
import client7 from "../../assets/client7.png";
import client8 from "../../assets/client8.png";

const subtitle = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

const Clients = () => {
  return (
    <div id="clients" className="clients">
      <div className="container">
        <SectionTitle title="Our Clients" textDirection="center"/>
          <SectionSubtitle subtitle={subtitle} />
        <div className="clients__row">
          <div className="clients__col">
            <Client client={client1} />
            <Client client={client2} />
            <Client client={client3} />
            <Client client={client4} />
          </div>
          <div className="clients__col">
            <Client client={client5} />
            <Client client={client6} />
            <Client client={client7} />
            <Client client={client8} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
