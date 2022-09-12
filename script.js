    //Пример 1
    function externalFunc() {
        const variableExt = 'Внешняя функция';

        function internalFunc() {
            const variableInt = 'Внутренняя функция';
            console.log('variableExt ->', variableExt);
            console.log('variableInt ->', variableInt);
        }
        return internalFunc;
    }

    const internal = externalFunc();
    internal();

    //Пример 2
    function createAddress (type) {
        const addressUpCase = type.toUpperCase(); 
        return function(name){
            return `${addressUpCase} ${name}`
        }
    }

    const addressMan = createAddress('гражданин')
    const addressWoman = createAddress('гражданка')
    console.log(addressMan('Сергей Петрович'))
    console.log(addressWoman('Алла Сергеевна'))

    //Пример 3
    const counterPoint = (name) => {
        let point = 0;
        return function(){
            point++;
            return `${name} - ${point}`
        } 
    }

    const firstPlayer = counterPoint('Сергей');
    firstPlayer()
    const secondPlayer = counterPoint('Сергей');
    secondPlayer()

    // Задача с собеса 
    // создать свой bind

   const bind = (context, func) => {
        return function(...args){
            func.apply(context, args)
        }
   }

   function personFn(){
    console.log(`имя:${this.name} возраст:${this.age} специальность:${this.job}`)
   }

   const personFirst = {
    name: 'Сергей',
    age: 29,
    job: 'FrontEnd Developer'
   }
   const personSecond = {
    name: 'Михаил',
    age: 35,
    job: 'BackEnd Developer'
   }

   bind(personFirst, personFn)()
   bind(personSecond, personFn)()


   var initialValue = 0;
   var sum = [{x:1},{x:2},{x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x, initialValue
   )

   console.log(sum)