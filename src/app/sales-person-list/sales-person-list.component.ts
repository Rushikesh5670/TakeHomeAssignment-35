import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  
  name : string = "Rushikesh";

  salesPersonList : Salesperson [] = [new Salesperson("Dhanraj","Shinde","dhanraj@gmail.com",50000,"500"),
                                      new Salesperson("Ashish","Mote","ashish@gmail.com",20000,"200"),
                                      new Salesperson("Rushikesh","Jadhav","rushi@gmail.com",40000,"400"),
                                      new Salesperson("Balaji","Bhosale","balaji@gmail.com",15000,"150"),
                                      new Salesperson("Pravin","Gaikwad","pravin@gmail.com",25000,"250"),
                                      new Salesperson("Sagar","Devkate","sagar@gmail.com",45000,"450"),]

  formModel : Salesperson = new Salesperson("","","",0,"");
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.formModel)
  }

  onSubmit(){
    this.salesPersonList.push(this.formModel);
  }

}
