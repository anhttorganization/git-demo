function Dog() {
    //
    // second comment
    // third comment
    this.stomach = [];
}

Dog.prototype.eat = function(cat) {
    this.stomach.push(cat);
}