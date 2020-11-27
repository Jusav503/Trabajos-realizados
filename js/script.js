var num = 1;

while (num <= 100){

    if ((num % 3 == 0 && num & 5 ==0) || (num.toString().includes("3") && num.toString().includes(5))){
        console.log("Fizz Buzz");
    }

    else if (num & 3==0 || num.toString().includes("3")){
        console.log("Fizz");
    }

    else if (num & 5==0 || num.toString().includes("5")){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
    num++;
}