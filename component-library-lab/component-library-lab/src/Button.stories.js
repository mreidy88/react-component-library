import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';
// const style = {
//     backgroundColor: "#0069D9",
//     color: "white",
//     borderRadius: "2px",
//     padding: "5px 25px",
//     border: "#0069D9"
// }
// const danger = {
//     backgroundColor: "red",
//     color: "white",
//     borderRadius: "2px",
//     padding: "5px 25px",
//     border: "red"
// }
// const warning = {
//     backgroundColor: "yellow",
//     color: "black",
//     borderRadius: "2px",
//     padding: "5px 25px",
//     border: "yellow"
// }
// const success = {
//     backgroundColor: "green",
//     color: "white",
//     borderRadius: "2px",
//     padding: "5px 25px",
//     border: "green"
// }
storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" type ="primary"/>) 
    .add('Danger', () => <Button label="Danger" type ="danger"/>) 
    .add('Warning', () => <Button label="Warning" type ="warning"/>) 
    .add('Success', () => <Button label="Success" type ="success"/>)
    .add('Default', () => <Button label="Default" type ="default"/>)

    storiesOf('Button2', module)
    .add('Primary', () => <Button label="Primary" type ="primary2"/>) 
    .add('Danger', () => <Button label="Danger" type ="danger2"/>) 
    .add('Warning', () => <Button label="Warning" type ="warning2"/>) 
    .add('Success', () => <Button label="Success" type ="success2"/>)
    .add('Default', () => <Button label="Default" type ="default2"/>)

    storiesOf('Button3', module)
    .add('Primary', () => <Button label="Primary" type ="primary3"/>) 
    .add('Danger', () => <Button label="Danger" type ="danger3"/>) 
    .add('Warning', () => <Button label="Warning" type ="warning3"/>) 
    .add('Success', () => <Button label="Success" type ="success3"/>)
    .add('Default', () => <Button label="Default" type ="default3"/>)

    storiesOf('Button4', module)
    .add('Primary', () => <Button label="Primary" type ="primary4"/>) 
    .add('Danger', () => <Button label="Danger" type ="danger4"/>) 
    .add('Warning', () => <Button label="Warning" type ="warning4"/>) 
    .add('Success', () => <Button label="Success" type ="success4"/>)
    .add('Default', () => <Button label="Default" type ="default4"/>)

    storiesOf('Button5', module)
    .add('Primary', () => <Button label="Primary" type ="primary5"/>) 
    .add('Danger', () => <Button label="Danger" type ="danger5"/>) 
    .add('Warning', () => <Button label="Warning" type ="warning5"/>) 
    .add('Success', () => <Button label="Success" type ="success5"/>)
    .add('Default', () => <Button label="Default" type ="default5"/>)

    storiesOf('Button6', module)
    .add('Primary', () => <Button label="Primary" type ="primary6"/>) 
    .add('Danger', () => <Button label="Danger" type ="danger6"/>) 
    .add('Warning', () => <Button label="Warning" type ="warning6"/>) 
    .add('Success', () => <Button label="Success" type ="success6"/>)
    .add('Default', () => <Button label="Default" type ="default6"/>)

    storiesOf('Button7', module)
    .add('Primary', () => <Button label="Primary" type ="primary7"/>) 
    .add('Danger', () => <Button label="Danger" type ="danger7"/>) 
    .add('Warning', () => <Button label="Warning" type ="warning7"/>) 
    .add('Success', () => <Button label="Success" type ="success7"/>)
    .add('Default', () => <Button label="Default" type ="default7"/>)