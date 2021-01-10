$(document).ready(function () {
    new Vue({
        el: '#app',
        data: {
            counter: 100
        },
        methods: {
            downCounter: function() {
                this.counter-=3;
            }
        }
    });
});