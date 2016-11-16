angular.module('dateCalc', [])
    .controller('dateCalcController', function () {
        var format = 'MM/DD/YYYY';

        // subtractions
        this.minus_date = moment().toDate();

        this.sub_base = function() {
            return moment(this.minus_date);
        }

        this.sub = function (days) {
            return this.sub_base().subtract(days, 'days').format(format);
        };

        this.lastWednesday = function () {
            return this.sub_base().day(-4).format(format);
        }

        this.fiveSundaysAgo = function () {
            return this.sub_base().day(-28).subtract(this.sub_base().day() == 0 ? 7 : 0, 'days').format(format);
        }

        // number of days
        this.from_date = moment().subtract(30, 'days').toDate();
        this.to_date = moment().toDate();

        this.numberOfDays = function() {
            return moment(this.to_date).diff(moment(this.from_date), 'days');
        }

        this.numberOfMonths = function() {
            return (this.numberOfDays() / (365.242 / 12)).toFixed(2);
        }
    });