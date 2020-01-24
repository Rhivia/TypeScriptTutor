@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError('Boat was sunk in ocean.')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator wake: boolean
  ): void {
    // throw new Error();
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: Function) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target);
  console.log(key);
}

// Decorator factory
function logError(errorMessage: string): Function {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function() {
      try {
        method();
      } catch(e) {
        console.log(errorMessage);
      }
    }
  }
}

// new Boat().pilot();
