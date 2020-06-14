import {Student, Teacher } from './componentsLib.js';
import React from 'react';

export class PersonFactory extends React.Component{
  

     createPerson(params, type, deleteCallback) {
        if (type === 0) {
            return <Student 
            id = {params.id} 
            key = {params.id} 
            fullName = {params.fullName} 
            university = {params.university} 
            birthDate = {params.birthDate} 
            photoUrl = {params.photoUrl}
            deleteCallback = {deleteCallback}
            course = {params.course}/>;
        }

        if (type === 1) {
            return <Teacher 
            id = {params.id} 
            key = {params.id} 
            fullName = {params.fullName} 
            university = {params.university} 
            birthDate = {params.birthDate} 
            deleteCallback = {deleteCallback}
            photoUrl = {params.photoUrl}/>;
        }
    }
}
