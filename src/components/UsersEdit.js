import React from 'react';
import { SimpleForm, TextInput, Edit } from 'react-admin';
import ModalPage from './ModalPage';
import { UserTitle } from './users';

const UsersEdit = (props) => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone" />
      {/* <TextInput
        // autoFocus
        // margin="dense"
        // label="password"
        type="password"
        // fullWidth
        source="password"
      />}
      {/* <TextInput
        // autoFocus
        // margin="dense"
        // label="password"
        type="password"
        // fullWidth
        source="password"
      /> */}
      <ModalPage
        label="Choose your password"
        source="password"
        disableEnforceFocus
      />
      <TextInput multiline source="company" />
    </SimpleForm>
  </Edit>
);

export default UsersEdit;
