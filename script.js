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

    