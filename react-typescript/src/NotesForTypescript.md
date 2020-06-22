 // init variable and type string number boolean 
  let firstValue: string = 'Manny';
  let secondValue: number = 100;
  let thirdValue: boolean = true;
  
  //Array of num => its object Type no "Array Type"
  let fourthValue: number[] = [2,3,56];

  //Actual Array
  let fifthValue: Array<string> = ["Ammir","Reza"]

  //Tuple => Type of array to import multiple types of data 
  let aTuple: [string,number] = ["Amir",2];

  //Enum => Like objects, init inside it 
  enum Codes{first = 1,second = 2};

  //any => All types of data
  //Mainly Prototyping
  let firstName: any = 'Manny';
  firstName = 100;

  //void for functions and return syntax 
  const warning = (): void => {
    console.log('Warning');
  }
