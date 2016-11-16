angular.module('dateCalc', [])
    .controller('dateCalcController', function () {
        var format = 'MM/DD/YYYY';

        // subtractions
        this.minus_date = new Date(moment().format(format));

        this.sub_base = function() {
            return moment(this.minus_date, format);
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
        this.from_date = new Date(moment().subtract(30, 'days').format(format));
        this.to_date = new Date(moment().format(format));

        this.numberOfDays = function() {
            return moment(this.to_date, format).diff(moment(this.from_date, format), 'days');
        }

        this.numberOfMonths = function() {
            return (this.numberOfDays() / (365.242 / 12)).toFixed(2);
        }
    });