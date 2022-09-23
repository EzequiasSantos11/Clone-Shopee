import { useState } from "react";


export function useOpenCreateEventsModal(){
  const [ openModal, setOpenModal ] = useState(false);
  return {
    openModal,
    setOpenModal
  }
}