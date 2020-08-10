var app=angular.module('myapp',[])
app.controller('myctrl',function($scope){
  var operator=[]
  var numbers=[]
 
 
  $scope.number=function(value){
    var a=$scope.history
 
    if(a==0){
    $scope.history=value; }
    else{
      var b=String(a)+String(value)
      $scope.history=b
    } 
  }
    $scope.operator=function(value){
       
      if(value=="=" && numbers.length==1 && operator.length==1){
        $scope.calculate(operator[0])
      }
     
      else if(operator.length==0 && numbers.length==0){

        operator.push(value)
        numbers.push($scope.history)
        console.log(operator,numbers)
        $scope.history+=value
        

      }
    
      else if(numbers.length==1){
        v=operator.splice(0,1)
        operator.push(value)
        if($scope.history.split(v).filter(Boolean).length==2){
      
        $scope.calculate(v)
        }
        else{
          $scope.history=numbers[0]+value
        }

        
      }

    }
   $scope.calculate=function(v){
     var a=parseInt(numbers[0])
     var c=$scope.history.split(v)
     var b=parseInt(c[1]) || 0;
     numbers.length=0
     if(v=='+'){
       $scope.history=a+b
     }
     else if(v=='-'){
      $scope.history=a-b
     }
     else if(v=='x'){
      $scope.history=a*b
     }
     else{
      $scope.history=a/b
     }
     numbers.push($scope.history)
     if(operator[0]!="="){
     $scope.history+=operator[0]}

   }
   $scope.action=function(clr){
     if(clr=='allclear'){
          numbers.length=0
          operator.length=0
          $scope.history=0
     }
     else{
      
       $scope.history=$scope.history.split('').splice(0,$scope.history.length-1).join('') || 0
       
     }
   }
  


})