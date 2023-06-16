import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import upcomingEvents from "user.json";

export const App = () => {
  return (
    <>
      <PageTitle text="24th Core Worlds Coal Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
};
