import { useRecordContext} from "react-admin";
import {
    List,
    Datagrid,
    TextField,
    ShowButton,
    EditButton,
    DeleteButton,
    Show,
    SimpleShowLayout,
    Toolbar,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput,
    DateField,
    DateInput,
} from "react-admin";

const EventTitle = () => {
      const record = useRecordContext();
      return <span>Event {record ? `"${record.title}"` : ''}</span>;
};

const eventFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="id" label="Id" reference="id" />,
];

export const EventList = () => (
    <List filters={eventFilters}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="start_date" />
            <TextField source="location" />
            <ShowButton/>
        </Datagrid>
    </List>
);

export const EventEdit = () => (
    <Edit title={<EventTitle />}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="title" variant="outlined" fullWidth/>
            <DateInput source="start_date"/>
            <TextInput source="location" variant="outlined" fullWidth />
        </SimpleForm>
    </Edit>
);


export const EventCreate = () => (
     <Create>
        <SimpleForm>
            <TextInput source="title" variant="outlined" fullWidth/>
            <DateInput source="start_date" />
            <TextInput source="location" variant="outlined" fullWidth />
        </SimpleForm>
      </Create>
);


export const EventShow = () => (
    <Show title = {<EventTitle />}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="start_date" />
            <TextField source="location" />
            <Toolbar sx={{display:"flex", justifyContent: "space-between"}}>
                <EditButton/>
                <DeleteButton label='Delete This Event' mutationMode="pessimistic" />
            </Toolbar>
        </SimpleShowLayout>
    </Show>
);
