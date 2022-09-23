import { useState } from "react";


export function openCreateEventsModal(){
  const [ openModal, setOpenModal ] = useState(false);
  return {
    openModal,
    setOpenModal
  }
}