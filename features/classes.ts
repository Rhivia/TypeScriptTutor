class Vehicle {
  constructor(
    public color: string
  ) {}

  protected honk(): void {
    console.log('honk');
  }
}

class carClass extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('hoink');
  }

  startDrive(): void {
    this.drive();
  }
}

const carInst = new carClass(4, 'yellow');
carInst.startDrive();
console.log(carInst.color);
