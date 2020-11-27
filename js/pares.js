/*Un buen par (A,B), lo consideraremos bueno si  A es igual que B (nums[i]==nums[j]) y que la posición de A sea < que la de B (i < j).
Dado un array de números llamado nums, encontrar el número de buenos pares.*/

var numIdenticalPairs = function(nums) {
    var i =0;
    var j=0;
    total =0;

    while(i < nums.length){
        
        while(j < nums.length){

            if (nums[i] == nums[j] && i<j){
                console.log(nums[i],nums[j], '', i,j)
                total++;
            }
            j++;
        }
        i++;
        j=0;
    }
    console.log('El total de pares son:',""+ total)
};

var nums = [1,2,3,1,1,3,4,3,3];
//          0 1 2 3 4 5 6 7 8
numIdenticalPairs(nums);