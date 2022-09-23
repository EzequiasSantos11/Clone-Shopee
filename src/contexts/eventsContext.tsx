import React, { createContext, useEffect, useState } from "react";
import { EventsData, PropsEventsContext, PropsEventsValues } from "../helpers/interfaces";


export const EventsContext = createContext<PropsEventsValues>({} as PropsEventsValues);



export function EventsProvider({ children }: PropsEventsContext){

  const [ allEvents, setAllEvents ] = useState<EventsData[]>([]);
  const [ load, setLoad ] = useState(false);
  
  let events: any = [];
  
  //verificando e Recuperando dados do localstorage
  useEffect(() => {
    const getEvents = localStorage.getItem("events");
    if(getEvents){
      setAllEvents(JSON.parse(""+getEvents+""));
      events.push(getEvents);
    }else{
      events = null;
      setAllEvents([]);
    }},[load]);

  //Criando novo evento
  function createEvent(data: EventsData){
    //Se já existem registros verificar se já existe um com o mesmo id.
    const eventExists = allEvents.filter((event)=> event.id === data.id);

    if(eventExists.length > 0){
      alert("Evento já existe!");
      return;
    }else{
      //Se não existem registros criar sem medo.
      allEvents.push(data);
      localStorage.setItem("events", JSON.stringify(allEvents));
      alert("Evento criado com sucesso!");
      setLoad(!load);
    }
  }

  //Filtrando um único evento e deletando
  function deleteEvent(id: string){
    const eventExist = allEvents.filter((event)=>{
      return event.id === id;
    });

    if(eventExist){
      const neweventExist = allEvents.filter((event)=>{
        return event.id !== id;
      });
      if(neweventExist.length > 0){
        localStorage.setItem("events", JSON.stringify(neweventExist));
        alert("Evento excluido com sucesso!")
        setLoad(!load);
      } else {
        localStorage.removeItem("events");
        setLoad(!load);
      }
    }
    else{
      alert("Erro: Este evento não existe no banco de dados!")
    }
  }


  
  
  return(
    <EventsContext.Provider value={{createEvent, allEvents, deleteEvent}}>
      {children}
    </EventsContext.Provider>
  )
}