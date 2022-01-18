class Avenger
{
    //properties
    name;
    powerLevel;



    //ONE constructor
    constructor(n,pl)
    {
        this.name = n;
        this.powerLevel = pl;
    }

    //methods
    displayAllInfo()
    {
        console.log(`Avenger Name : ${this.name}`);
        console.log(`Avenger Power Level : ${this.powerLevel}`);
    }

}

module.exports = Avenger;




