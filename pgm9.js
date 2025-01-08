class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
     getArea(){
        return this.width*this.height;
    }
}
const rect=new Rectangle(10,20);
console.log(rect.getArea());