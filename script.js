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