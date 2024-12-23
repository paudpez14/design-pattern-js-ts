class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}
// * Se crea por primera vez
const objSingle = new Singleton();

// * Se usa ya el creado
const objSingle2 = new Singleton();

class WeekDays {
  
  daysEs = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  constructor (lang){
    this.lang = lang;
    if(WeekDays.instance){
      return WeekDays.instance;
    }
    WeekDays.instance = this;
  }
  getDays(){
    return this.lang === "es" ? this.daysEs : this.daysEn;
  }
}