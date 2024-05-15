let laptop = {
    make: 'Dell',
    model: 'I7 Gen 8',
    year: '2021',
    Describe: function(){
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}. `);
    }
};

laptop.Describe();
