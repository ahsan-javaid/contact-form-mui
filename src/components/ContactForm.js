import React, { useState } from 'react';
import { Card, Typography, Divider, Table, TableRow, TableBody, TableCell, CardHeader } from '@mui/material';
import TextInput from '../controls/TextInput';
import SelectInput from '../controls/SelectInput';

const ContactForm = () => {
  const [fields, setFields] = useState([
    {
      field: 'email',
      type: 'email',
      value: 'miron.vitold@devias.io',
      label: 'Email'
    },
    {
      field: 'phone',
      type: 'text',
      value: '+55 748 327 439',
      label: 'Phone'
    },
    {
      field: 'country',
      type: 'text',
      value: 'USA',
      label: 'Country'
    },
    {
      field: 'state',
      type: 'text',
      value: 'New York',
      label: 'State/Region'
    },
    {
      field: 'addressOne',
      type: 'text',
      value: 'Street John Wick, no. 7',
      label: 'Address 1'
    },
    {
      field: 'addressTwo',
      type: 'text',
      value: 'House #25',
      label: 'Address 2'
    },
    {
      field: 'gender',
      type: 'select',
      value: 'Male',
      label: 'Gender',
      options: ['Male', 'Female']
    }
  ]);

  const setField = (field, value) => {
    const updatedFields = fields.map((field) => {
      if (field.field === field) {
        field.value = value;
      }
      return field;
    });
    setFields(updatedFields);
  }

  return (<Card variant="outlined">
    <CardHeader title="Contact Details">
    </CardHeader>
    <Divider></Divider>
    <Table>
      <TableBody>
          {fields.map((field, index) => (<TableRow  key={index}>
              <TableCell>
                <Typography variant="p" component="b">{field.label}</Typography>
              </TableCell>
              <TableCell align="right">
              {field.type === 'select' ? <SelectInput name={field.field} options={field.options} label={field.label} type={field.type} value={field.value} setValue={setField}></SelectInput>:
                <TextInput name={field.field} label={field.label} type={field.type} value={field.value} setValue={setField}></TextInput>}
              </TableCell>
          </TableRow>))}
      </TableBody>
    </Table>
  </Card>)
}

export default ContactForm;
