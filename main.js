

    function tenpow() {
        var num = parseFloat(screen.value); 
        screen.value = Math.pow(10, num);
    }

    function power2() {
        var num = parseFloat(screen.value); 
        screen.value = Math.pow(num, 2);
    }

    function power3() {
        var num = parseFloat(screen.value); 
        screen.value = Math.pow(num, 3);
    }

    function _2pow() {
        var num = parseFloat(screen.value); 
        screen.value = Math.pow(2, num);
    }

    function factorial() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++) {
            f = f * i;
        }

        i = i - 1;

        screen.value = f;
    }

    function sin() {
        screen.value = Math.sin(screen.value);
    }

    function cos() {
        screen.value = Math.cos(screen.value);
    }

    function tan() {
        screen.value = Math.tan(screen.value);
    }

    function toggleSign() {
        var currentValue = parseFloat(screen.value);
        if (currentValue > 0) {
        screen.value = -currentValue;
        } 
        else {
        screen.value = Math.abs(currentValue);
        }
    }

    function sqrt() {
        screen.value = Math.sqrt(screen.value, 2);
    }

    function mod() {
        var screen = document.getElementById("screen");
        var expression = screen.value;
        var parts = expression.split("%");
    
        if (parts.length == 2) {
            var dividend = parseFloat(parts[0]);
            var divisor = parseFloat(parts[1]);
    
            if (divisor === 0) {
                console.error("Division by zero error in modulo operation");
                screen.value = "Error: Division by Zero";
            } else {
            
                var result = dividend % divisor;
                screen.value = result;
            }
        } else {
            console.error("Invalid format for modulo operation");
            screen.value = "Error";
        }
    }

    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }
