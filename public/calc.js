$(document).ready(function() {
    main();

    var $array1 = [];
    var $array2 = []; // need if 1 is not empty or something

    $('button').click(function() {
        var keyValue = $(this).val();
        var valClass = $(this).parent().attr("class");

        if (valClass == 'number') {
            if ($(this).val() >= 0 && $(this).val() <= 9) {
                $array2.push(keyValue);
                // $.each($array, function(i, v) {
                $('#display').text($('#display').text() + keyValue);
                // });
                console.log("1: " + $array1);
                console.log("2: " + $array2);
                console.log(valClass);
            } else {
                return NaN;
            }
        } else if (valClass == 'operator' || valClass == 'function') {
            switch (keyValue) {
                case '+':
                    console.log('in +');
                    $array1 = $array2;
                    $array2.length=0;
                    $('#display').text('');
                    method = add($array1, $array2);
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
                case 'sum':
                    console.log('in sum');
                    method = sum();
            }
            return method;
        }
    });

    function clear(arr1, arr2) {
        arr1.length = 0;
        arr2.length = 0;
        $('#display').text('');
    }

    function add(arr1, arr2) { //need to reduce 2 []
        newA1 = arr1.reduce((a, b) => {
            a + b;
        });
        newA2 = arr2.reduce((a, b) => {
            a + b;
        });

        console.log(newA1 + newA2);
    }
});

var main = function() {

    var $num0 = $('#row6 td').eq(0);
    var $num1 = $('#row5 td').eq(0);
    var $num2 = $('#row5 td').eq(1);
    var $num3 = $('#row5 td').eq(2);
    var $num4 = $('#row4 td').eq(0);
    var $num5 = $('#row4 td').eq(1);
    var $num6 = $('#row4 td').eq(2);
    var $num7 = $('#row3 td').eq(0);
    var $num8 = $('#row3 td').eq(1);
    var $num9 = $('#row3 td').eq(2);
    var $plus = $('#row2 td').eq(2);
    var $minus = $('#row3 td').eq(3);
    var $divide = $('#row4 td').eq(3);
    var $multiply = $('#row5 td').eq(3);
    var $sum = $('#row6 td').eq(1);
    var $clear = $('#row2 td').eq(0);
    var $display = $('#row1 td').eq(0);
    var $decimal = $('#row2 td').eq(1);

    $($num0).attr('colspan', '3');
    $($sum).attr('id', 'sum');
    $($clear).attr('id', 'clear');
    $($clear).attr('colspan', '2');
    $($display).attr('id', 'display');
    $($display).attr('colspan', '4');

    $($num0).append('<button class="btn btn-default" value="0" name="0">0</button>');
    $($num1).append('<button class="btn btn-default" value="1" name="1">1</button>');
    $($num2).append('<button class="btn btn-default" value="2" name="2">2</button>');
    $($num3).append('<button class="btn btn-default" class="btn btn-default" value="3" name="0">3</button>');
    $($num4).append('<button class="btn btn-default" value="4" name="0">4</button>');
    $($num5).append('<button class="btn btn-default" class="btn btn-default" class="btn btn-default" value="5" name="0">5</button>');
    $($num6).append('<button class="btn btn-default" class="btn btn-default" value="6" name="0">6</button>');
    $($num7).append('<button class="btn btn-default" value="7" name="0">7</button>');
    $($num8).append('<button class="btn btn-default" value="8" name="0">8</button>');
    $($num9).append('<button class="btn btn-default" value="9" name="0">9</button>');
    $($plus).append('<button class="btn btn-warning" value="+" name="plus">+</button>');
    $($minus).append('<button class="btn btn-warning" value="-" name="minus">-</button>');
    $($divide).append('<button class="btn btn-warning" value="/" name="divide">/</button>');
    $($multiply).append('<button class="btn btn-warning" value="*" name="multiply">*</button>');
    $($sum).append('<button class="btn btn-primary" value="=" name="sum">=</button>');
    $($clear).append('<button class="btn btn-danger" value="C" name="clear">C</button>');
    $($decimal).append('<button class="btn btn-warning" value="." name="decimal">.</button>');

    $num0.addClass('number');
    $num1.addClass('number');
    $num2.addClass('number');
    $num3.addClass('number');
    $num4.addClass('number');
    $num5.addClass('number');
    $num6.addClass('number');
    $num7.addClass('number');
    $num8.addClass('number');
    $num9.addClass('number');
    $plus.addClass('operator');
    $minus.addClass('operator');
    $divide.addClass('operator');
    $multiply.addClass('operator');
    $clear.addClass('function');

}

var assignListenersByClass = function(event, cb, name) {
    $(name).each(function() {
        $(this).on(event, cb($(this)));
    });
};

var parse = function() {
    a.map(function(x) {
        return parseInt(x, 10);
    });
}
