import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Message } from '../enums/message';
import { from } from 'rxjs';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  model: any = {
    name: '',
    contact: null,
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Form Invalid');
      form.control.markAllAsTouched();
      return;
    } else {
      console.log(form.value);

      // Retrieve existing messages from localStorage
      const existingMessages = localStorage.getItem(Message.Message_key);
      console.log(existingMessages);


      // Parse the existing messages or initialize an empty array
      const messagesArray = existingMessages ? JSON.parse(existingMessages) : [];

      // Use spread operator to add the new form value to the array
      const updatedMessages = [...messagesArray, form.value];

      console.log(updatedMessages);


      // Store updated array back to localStorage
      localStorage.setItem(Message.Message_key, JSON.stringify(updatedMessages));

      alert('Message sent');
      form.reset();
    }
  }
}
