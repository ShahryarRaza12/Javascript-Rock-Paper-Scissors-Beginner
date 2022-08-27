let userinput = String(prompt("Rock, Paper or Scissors"));
number = Math.floor(Math.random()* 9) + 1;
var holder = userinput;
if(userinput == "Rock")
{
    userinput = 3;
    
    if(number > userinput)
    {
        console.log("You lost the Opponent had Paper");
    }
    if(number < userinput)
    {
        console.log("You win the Opponent had Scissors");
    }
    if(number ==  userinput)
    {
        console.log("its a draw the User had Rock");
    }
  
}
    if(userinput == "Paper")
{
    userinput = 6;

    if(number > userinput)
    {
    console.log("You lost the Opponent had Scissors");
    }
    if(number < userinput)  
    {   
    console.log("You win the Opponent had Rock");
    }
    if(number ==  userinput)
    {
    console.log("its a draw the User had Paper");
    }
    
}
    if(userinput == "Scissors")
{
    userinput = 9;

    if(number > userinput)
    {
    console.log("You lost the Opponent had Rock");
    }
    if(number < userinput)
    {
    console.log("You win the Opponent had Paper");
    }
    if(number ==  userinput)
    {
    console.log("its a draw the User had Scissors");
    }
    
}
if(holder != 'Rock')
{

    if(holder != 'Paper')
        {
           
     if(holder != 'Scissors')
            {
            console.log("Please input a correct option");
            
        }
        }
    }




