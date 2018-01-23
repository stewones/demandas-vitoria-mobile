import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  demandasForm: FormGroup;
  
  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

    this.demandasForm = this.formBuilder.group ({
      nome: [''],
      telefone: [''],
      endereco: [''],
      bairro: [''],
      demanda: ['']
    })
  }
  demandasClick () {
    console.log('crap');
  }
}
