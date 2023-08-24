import { Admin, Resource, ShowGuesser } from "react-admin";
// import { dataProvider } from './dataProvider';
import restProvider from "ra-data-json-server";
import { EventList, EventEdit, EventCreate, EventShow } from "./Events";
import { UserList } from "./users";
import UserIcon from "@mui/icons-material/Group";
import EventIcon from '@mui/icons-material/Event';
import SupportIcon from '@mui/icons-material/Support';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';

import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';


export const App = () => (
  <Admin authProvider={authProvider} dataProvider={restProvider("http://localhost:5000")} dashboard={Dashboard}>
      <Resource 
          name="events"
          list={EventList}
          edit={EventEdit}
          show = {EventShow}
          create={EventCreate}
          icon={EventIcon}
      />
      <Resource
          name="users"
          list={UserList}
          show={ShowGuesser}
          recordRepresentation="name"
          icon={UserIcon}
      />
      <Resource
          name="sponsors"
          list={UserList}
          show={ShowGuesser}
          recordRepresentation="name"
          icon={SupportIcon}
      />
      <Resource
          name="speakers"
          list={UserList}
          show={ShowGuesser}
          recordRepresentation="name"
          icon={InterpreterModeIcon}
      />
  </Admin>
);