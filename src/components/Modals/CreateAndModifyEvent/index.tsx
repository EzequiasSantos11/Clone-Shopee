import { Input } from "../../Input";
import { Container } from "./styles";
import { EventsData } from "../../../helpers/interfaces";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Button from "../../Button";
import { useContext } from "react";
import { EventsContext } from "../../../contexts/eventsContext";
import { inputTimeMask } from "../../../helpers/inputMasks";


interface PropsCreateEventModal{
  close: ()=>void;
}


export function CreateEventModal({close}: PropsCreateEventModal){
  const [ data, setData ] = useState({
    title: "",
    date: "",
    hour: "",
    description: "",
  } as EventsData);

  useEffect(()=>{
    setData({...data, id: Math.random().toString()});
  },[]);
// Math.random().toString()
  const { createEvent } = useContext(EventsContext);

  const closeModal = (e?: FormEvent)=>{
    e?.preventDefault();
    close();
  }

  const handleOnChange = (field: string, value: any)=>{
    setData({ ...data, [field]: value });
  }
  
  const handleSubmit = async ()=>{
    console.log("data", data);
    if(data.title === "" || data.date ==="" || data.hour === ""){
      alert("Preencha todos os campos obrigatórios, marcados com *");
    }else{
      createEvent(data);
      closeModal();
    }
  }

  return(
    <Container>
      <div className="form">
        <Input 
          type="text" 
          label="* Título" 
          placeholder="Ex: Reunião com RH"
          value={data.title}
          onChange={(e) => handleOnChange("title", e.currentTarget.value)}
        />
        <div className="date">
          <Input 
            type="date"  
            label="* Data" 
            placeholder="Ex: 22/02/2022"
            value={data.date}
            onChange={(e) => handleOnChange("date", e.currentTarget.value)}
          />
          <Input 
            type="text" 
            label="* Hora" 
            placeholder="Ex: 11:00"
            minLength={4}
            maxLength={5}
            value={inputTimeMask(data.hour)}
            onChange={(e) => handleOnChange("hour", e.currentTarget.value)}
          />
        </div>
        <Input 
          type="textarea" 
          label="Descrição" 
          placeholder="Ex: Digite uma breve descrição sobre o que é o evento..."
          value={data.description}
          onchange={(e) => handleOnChange("description", e.currentTarget.value)}
        />
        <div className="actions">
          <Button type="button" onClick={handleSubmit}  textButton="Salvar"/>
          <Button onClick={(e)=>closeModal(e)} danger textButton="Cancelar"/>
        </div>
      </div>
    </Container>
  )
};