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
                type: "Compact",
                description: "Civic with an extra Attitude, 4 door , small, and economic",
                price: 110,
                img: "../img/Civic-Si.jpg",
                available: 20
            },
            {
                name: 'Honda Civic',
                type:"Compact",
                description: "the trusted Economy model car",
                price: 50,
                img: "../img/Civic.jpg",
                available: 15
                
            },{
                name: 'Honda Clarity',
                type: "Luxury",
                description: "This is one compact worth driving, with electric energy you will go farther",
                price: 90,
                img: "../img/Clarity.jpg",
                available: 5
                
            }],[{
                name: 'honda CRV',
                type: "SUV",
                description: "an SUV With class",
                price: 150,
                img: "../img/crv.jpg",
                available: 10
                
            },{
                name: 'honda fit',
                type: "SUV",
                description: "one of our cheaper models but, its a great car that will get you far on a budge",
                price: 60,
                img: "../img/fit.png",
                available: 10
            },{
                
                name: 'Honda hrv',
                type: "SUV",
                description: "Great SUV for all your needs, at a price thats affordable",
                price: 150,
                img: "../img/hrv.jpg",
                available: 12
            }],[{
                
                name: 'Honda Hybrid EX-L',
                type: "Premium",
                description: "half gas half electric, but all the power of new technology and luxery",
                price: 550,
                img: "../img/Hybrid-EX-L.jpg",
                available: 10
            },{
                
                name: 'Honda Ridge-line',
                type: "Premium",
                description: "Ride in style with this truck, luxery,sound, and great for tailgates",
                price: 550,
                img: "../img/ridge-line.png",
                available: 20
            }]
        ]

})();

//Materialize inits
$(document).ready(function() {
    $('select').material_select();
    $('ul.tabs').tabs();
});