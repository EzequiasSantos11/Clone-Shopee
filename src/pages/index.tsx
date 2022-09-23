import type { NextPage } from 'next';
import Header from '../components/Header';
import ListEvents from '../components/ListEvents';
import { Container } from '../styles/homeStyles';
import { Calendar } from "../components/Calendar";
import { EventsProvider } from '../contexts/eventsContext';
import { CreateEventModal } from '../components/Modals/CreateAndModifyEvent';
import { useOpenCreateEventsModal } from '../helpers/hooks/controllersModals';

const Home: NextPage = () => {
  const { openModal, setOpenModal } = useOpenCreateEventsModal();
  return (
    <EventsProvider>
      <Container>
        <Header createEvent={()=>setOpenModal(true)}/>
        <div className="wrapper">
          <div className="left">
            <div className="calendar">
              <Calendar/>
            </div>
            <ListEvents/>
          </div>
          <div className="right">
            <img src="/timeline.png" alt="" />
          </div>
        </div>
        {openModal ? <CreateEventModal close={()=>setOpenModal(false)}/> : ""}
      </Container>
    </EventsProvider>
  )
} 

export default Home
