import { useContext } from "react";
import { EventsContext } from "../../../contexts/eventsContext";
import { EventsData } from "../../../helpers/interfaces";
import Button from "../../Button";
import { Container } from "./styles";

interface Props extends EventsData {
  close: ()=>void,
}

export function ConfirmDeleteModal({id, date, hour, title, description, close}: Props){

  const {deleteEvent} = useContext(EventsContext);

  const deleteEventById = ()=>{
    deleteEvent(id);
    modalClose();
  }
  const modalClose = ()=>{
    close();
  }

  return(
    <Container>
      <div className="card">
        <h1>Tem certeza que deseja excluir este evento?</h1>
        <div className="event">
          <div className="title">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="time">
              <i className="icon"></i>
              <p>{date}</p>
              <span>{hour} - {hour} AM</span>
          </div>
          </div>
        <div className="actions">
          <Button danger onClick={deleteEventById} textButton="Excluir"/>
          <Button onClick={modalClose}  textButton="Voltar"/>
        </div>
      </div>
    </Container>
  )
}