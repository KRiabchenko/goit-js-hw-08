'use strict';
import throttle from 'lodash.throttle'

const LOCAL_STORAGE_KEY = 'feedback';
const formRef = document.querySelector('.feedback-form');

import { save, load, remove }  from './storage'

initPage();

const onFormSub = event => {
    const { name, value } = event.target
    let savedMessage = load(LOCAL_STORAGE_KEY);
        
    savedMessage = savedMessage ? savedMessage : {};
     
    savedMessage[name] = value;

    save(LOCAL_STORAGE_KEY, savedMessage)

}
const throttleOnFormSub = throttle(onFormSub, 500);
formRef.addEventListener('input', throttleOnFormSub);

function initPage() {
    const savedMessage = load(LOCAL_STORAGE_KEY);

    if (!savedMessage) {
        return;
    }
    Object.entries(savedMessage).forEach(([name, value]) => {
        formRef.elements[name].value = value;
    })
}
        

const handelSub = event => {
    event.preventDefault();
    const {
    elements: { email, message },
  } = event.currentTarget;

  console.log({email: email.value, message: message.value });
  event.currentTarget.reset();
  remove(LOCAL_STORAGE_KEY);
}

formRef.addEventListener('submit', handelSub);

