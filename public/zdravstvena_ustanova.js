
pregledi = [];
class Doktor{
    constructor(ime, prezime, specijalnost){
        this._ime=ime;
        this._prezime=prezime;
        this._specijalnost = specijalnost;
        this._pacijenti =[];
        console.log(getDateTime() + " Kreiran doktor "+ this.ime);
    }
    set ime (ime) { this._ime = ime }
    set prezime (prezime) { this._prezime = prezime }
    set specijalnost (specijalnost) { this._specijalnost = specijalnost }
    set pacijenti (pacijenti) { this._pacijenti = pacijenti }

    get ime () { return this._ime  }
    get prezime () { return this._prezime }
    get specijalnost () { return this._specijalnost }
    get pacijenti () { return this._pacijenti }

    dodajPacijenta (pacijent) { this.pacijenti.push(pacijent) }

    zakaziPregled (pregled, pacijent) { 
        pacijent.pregledi.push(pregled) 
    }
}
function getDateTime(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var MM = today.getMinutes();
    var HH = today.getHours();
    return "["+dd+"."+mm+"."+yyyy+" "+HH+":"+MM+"]";
}
class Pacijent{
    constructor(ime, prezime, jmbg, broj_zk){
        this._ime=ime;
        this._prezime=prezime;
        this._jmbg = jmbg;
        this._broj_zk = broj_zk;
        this._doktor;
        this.pregledi = [];
        this.obavljeniPregledi = [];
        console.log( getDateTime()+ " Kreiran pacijent "+ this.ime);
    }
    set ime (ime) { this._ime = ime }
    set prezime (prezime) { this._prezime = prezime }
    set jmbg (jmbg) { this._jmbg = jmbg }
    set broj_zk (broj_zk) { this._broj_zk = broj_zk }
    set doktor (doktor) { 
        console.log(getDateTime() + " Pacijent "+ this.ime + " bira doktora " + doktor.ime);
        this._doktor = doktor 
    }

    get ime () { return this._ime}
    get prezime () { return this._prezime}
    get jmbg () { return this._jmbg}
    get broj_zk () { return this._broj_zk }
    get doktor () { return this._doktor }

    obaviPregled (pregled) { 
        
        var index;
        var tip;
        if(pregled instanceof PregledPritiska){
            index = this.pregledi.find(x => x instanceof PregledPritiska);
            pregled.gornja_vrednost=120;
            pregled.donja_vrednost = 80;
            pregled.puls = 75;
            console.log(getDateTime() + " Pacijent "+ this.ime + " obavio pregled " 
            + "pritiska");
  
            console.log("Gornja vrednost pritiska: " + pregled.gornja_vrednost);

            console.log("Gornja vrednost pritiska: " + pregled.donja_vrednost);

            console.log("Gornja vrednost pritiska: " + pregled.puls);
        }else if(pregled instanceof PregledSecera){

            index = this.pregledi.find(x => x instanceof PregledSecera);

            pregled.vrednost = 20;
            pregled.vreme_obroka = "10:30";
            console.log(getDateTime()+ " Pacijent "+ this.ime + " obavio pregled " 
            + "secera");
  
            console.log("Vrednost secera: " + pregled.vrednost);

            console.log("Vreme obroka: " + pregled.vreme);
        }else{

            index = this.pregledi.find(x => x instanceof PregledHolesterola);
            pregled.vrednost = 20;
            pregled.vreme_obroka = "10:30";
            console.log(getDateTime() + " Pacijent "+ this.ime + " obavio pregled " 
            + "holesterola");
  
            console.log("Vrednost holesterola: " + pregled.vrednost);

            console.log("Vreme obroka: " + pregled.vreme);
        }
        this.pregledi.splice(index, 1);
        
        
        console.log()

        this.obavljeniPregledi.push(pregled);
    }
}


class Pregled{
    constructor(datum, vreme){
        this.datum=datum;
        this.vreme=vreme;
    }
}

class PregledPritiska extends Pregled {
    constructor (datum, vreme) 
    {
        super(datum, vreme); 
        this.gornja_vrednost; 
        this.donja_vrednost;
        this.puls;
    } 
}

class PregledSecera extends Pregled {
    constructor (datum, vreme) 
    {
        super(datum, vreme); 
        this.vrednost; 
        this.vreme_obroka;
    } 
}

class PregledHolesterola extends Pregled {
    constructor (datum, vreme) 
    {
        super(datum, vreme); 
        this.vrednost; 
        this.vreme_obroka;
    } 
}

doktor = new Doktor("Milan","Milovanovic","Opsta praksa");

pacijent = new Pacijent("Dragan","Draganic", "2115315", "2141513");

pacijent.doktor = doktor;

doktor.dodajPacijenta(pacijent);

pregledSecer = new PregledSecera("20.3.2018","15:00");

doktor.zakaziPregled(pregledSecer,pacijent);

pregledPritisak = new PregledPritiska("21.3.2018","14:00");

doktor.zakaziPregled(pregledPritisak,pacijent);

pacijent.obaviPregled(pregledSecer);

pacijent.obaviPregled(pregledPritisak);


