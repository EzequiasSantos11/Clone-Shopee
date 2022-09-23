import { Container, Wrapper, Card } from "./styles";
import { EventsContext } from "../../contexts/eventsContext";
import { useContext, useState } from "react";
import { ConfirmDeleteModal } from "../Modals/ConfirmDelete";
import { IoTrashBinSharp } from "react-icons/io5"; 
import { BsClock } from "react-icons/bs";

export default function ListEvents(){

  const { allEvents } = useContext(EventsContext);
  const [ openDeleteModal, setOpenDeleteModal ] = useState(false);
  return(
    <Container>
      <h1>ListEvents</h1>
      <Wrapper>
        { allEvents.map((item, index) =>(
          <>
            <Card key={index}>
              <div className="title">
                <h2>{item.title}</h2>
                <p>{item.date}</p>
              </div>
              <div className="time">
                <BsClock/>
                <span>{item.hour} - {item.hour} AM</span>
              </div>
              <div className="bin">
                <IoTrashBinSharp onClick={()=>setOpenDeleteModal(true)}/>
              </div>
            </Card>
            {openDeleteModal ?  <ConfirmDeleteModal description={item.description} title={item.title} hour={item.hour} date={item.date} id={item.title} close={()=>setOpenDeleteModal(false)}/> : ""}
          </>
        ))}
      </Wrapper>
    </Container>
  )
};