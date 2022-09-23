export interface PropsEventsContext{
  children: React.ReactNode,
}

export interface PropsEventsValues {
  createEvent: (data: EventsData)=>void,
  deleteEvent: (id: string)=>void,
  allEvents: EventsData[],
}

export interface EventsData {
  id: string,
  title: string,
  description?: string,
  date: string,
  hour: string,
}