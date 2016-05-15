var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Sowmya');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.level = ko.computed(function(){
        if (this.clickCount() == 0) {
            return 'New Born';
        }
        else if (this.clickCount() < 10) {
            return 'Infant';
        }
        else if (this.clickCount() < 30) {
            return 'Toddler';
        }
        else if (this.clickCount() < 50) {
            return 'Child';
        }
        else if (this.clickCount() < 75) {
            return 'Tween';
        }
        else if (this.clickCount() < 100) {
            return 'Teen';
        }
        else if (this.clickCount() < 200) {
            return 'Adult';
        }
        else {
            return 'Old Age';
        }
    }, this);
}

ko.applyBindings(new ViewModel());
