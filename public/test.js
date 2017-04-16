

    var $array1 = [];
    var $array2 = []; // need if 1 is not empty or something
    var $array3 = []; // need if 1 is not empty or something

    $('button').click(function() {
        var keyValue = $(this).val();
        var valClass = $(this).parent().attr("class");

        if (valClass == 'number') {
            if ($(this).val() >= 0 && $(this).val() <= 9) {
                $array3.push(keyValue);
                // $.each($array, function(i, v) {
                $('#display').text($('#display').text() + keyValue);
                // });
            } else {
                return NaN;
            }
        } else if (valClass == 'operator' || valClass == 'function') {
            var operation = {
                first: [],
                second: [],
                third: []
            }
            if ($array1.length === 0) {
                var intArr3 = [];
                intArr3 = parsedArray($array3); //Parse array to ints
                var reducedArray = reduced(intArr3); //reduce to 1 value
                $array1 = reducedArray; //set 1st array to make room for new
                $array3.length = 0;

                operation.first = $array1;
                switch (keyValue) {
                    case '+':
                        console.log('in +');
                        $('#display').text('');
                        operation.second = '+';
                        console.log(operation);
                        break;
                    case '-':
                        method = minus();
                        break;
                    case '*':
                        method = muliply();
                        break;
                    case '/':
                        method = divide();
                        break;
                    case 'C':
                        console.log('in c');
                        method = clear($array1, $array2);
                        break;
                }
            } else {
                var intArr3 = [];
                intArr3 = parsedArray($array3); //Parse array to ints
                var reducedArray = reduced(intArr3); //reduce to 1 value
                operation.third = reducedArray;
                console.log(operation);
            }
        }
    });


    function clear(arr1, arr2) {
        arr1.length = 0;
        arr2.length = 0;
        $('#display').text('');
    }

    function add(arr1, arr2) { //need to reduce 2 []

        //
        //
        // newA1 = arr1.reduce((a, b) => {
        //     a + b;
        // });
        // newA2 = arr2.reduce((a, b) => {
        //     a + b;
        // });
        //
        // console.log(newA1 + newA2);
    }
});



var assignListenersByClass = function(event, cb, name) {
    $(name).each(function() {
        $(this).on(event, cb($(this)));
    });
};

var parsedArray = function(a) {
    return a.map(Number);
}

var reduced = function(a) {
    return a.reduce((x, y) => {
        return x + y;
    });
}
