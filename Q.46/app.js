var laptop = {
    make: 'Dell',
    model: 'I7 Gen 8',
    year: '2021',
    Describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, ". "));
    }
};
laptop.Describe();
