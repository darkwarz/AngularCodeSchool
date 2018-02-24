/*global $ angular*/
(function(){

    var app = angular.module('carRental', []);

    app.controller('RentalController', function(){
        this.info = company;
        this.rentals = rentals;
    });

    var company = {
        name: "Angular Rentals",
        types: [{
            type: "Compact",
            available: 10,
            price: 50
        },{
            type: "SUV",
            available: 7,
            price: 150
        },{
            type: "Luxury",
            available: 5,
            price: 550
        }]

    }

    var rentals = [[{
                name: 'Honda Civic-Si',
                description: "Civic with an extra Attitude",
                price: 110,
                img: "../img/Civic-Si.jpg"
            },
            {
                name: 'Honda Civic',
                description: "the trusted Economy model car",
                price: 50,
                img: "../img/Civic.jpg"
            },{
                name: 'Honda Clarity',
                description: ". . .",
                price: 90,
                img: "../img/Clarity.jpg"
            }],[{
                name: 'honda CRV',
                type: "SUV",
                description: ". . .",
                price: 150,
                img: "../img/crv.jpg"
            },{
                name: 'honda fit',
                type: "SUV",
                description: "one of our cheaper models but, its a great car that will get you far on a budge",
                price: 60,
                img: "../img/fit.png"
            },{
                name: 'Honda hrv',
                type: "SUV",
                description: ". . .",
                price: 150,
                img: "../img/hrv.jpg"
            }],[{
                name: 'Honda Hybrid EX-L',
                type: "Premium",
                description: "half gas half electric, but all the power of new technology and luxery",
                price: 550,
                img: "../img/Hybrid-EX-L.jpg"
            },{
                name: 'Honda Ridge-line',
                type: "Premium",
                description: "Ride in style with this truck, luxery,sound, and great for tailgates",
                price: 550,
                img: "../img/ridge-line.png"
            }]
        ]

})();

//Materialize inits
$(document).ready(function() {
    $('select').material_select();
    $('ul.tabs').tabs();
});
