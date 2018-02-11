import { Component } from "@angular/core";

@Component({
  selector: "app-styled",
  template: `
   <hr/>
     style - ngStyle
      <hr/>
    <button [style.font-weight]="isBold ? 'bold' : 'normal' " 
    style="color: blue">style attrb styled button</button>
    <hr/>
     <button [style.font-size.em]="fontSize" 
    style="color: blue">numeric attrb styled button</button>
    <hr/>
    <button [ngStyle]="addStyles()"
    style="color: blue">object based styles styled button</button>
     <hr/>
     class - ngClass
      <hr/>
    <button [class.fs1]="true" 
    style="color: blue">class attrb styled button</button>
 
    <button [ngClass]="'fs1 bold italic'" 
    style="color: blue">string classes styled button</button>
    
    <button [ngClass]="getClasses()" 
    style="color: blue">array classse styled button</button>

    <button [ngClass]="{ 'bold': isBold, 'italic': isItalic}" 
    style="color: blue">object class styled button</button>
  `,
  styles: [
    `
    .fs1 {
        font-size: 1.5em
    }

    .bold {
        font-weight: bold
    }

     .italic {
        font-style: italic
    }
    
    `
  ]
})
export class StyledComponent {
  isBold: boolean = true;
  fontSize: number = 1;

  isItalic: boolean = true;

  // The Below is discouraged as the style belongs to te template so it is better
  // to move the styles object to the template
  addStyles(): {} {
    let styles = {
      "font-size.em": this.fontSize,
      "font-weight": this.isBold ? "bold" : "normal",
      "font-style": this.isItalic ? "italic" : "normal"
    };

    return styles;
  }

  getClasses(): string[] {
    let classes = ["fs1", "bold"];
    classes.push("italic");

    return classes;
  }
}
