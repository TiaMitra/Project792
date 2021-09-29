var text="";
 var new_pizza="";
 var pizza_list_array=["Chicken Pizza","Cheese Pizza","Veggie Pizza","Pepperoni Pizza","Meat Pizza","Margherita Pizza","Buffalo Pizza","Hawaiian Pizza"];
 function show() 
{
    text="<ol>"
    console.log(document.getElementById("display_menu").innerHTML='');
    //The for loop is reading the array and then writing as a text in vertical allingment
    for (let i=0;i < pizza_list_array.length; i++)
    {
    text+="<li style=color:white;>"+pizza_list_array[i]+"</li>"
    }
    text+="</ol>";
    console.log(document.getElementById("display_menu").innerHTML=text);
} 

//New Function for adding new pizza
function add_new_and_sort()
{
new_pizza = document.getElementById("name_of_pizza").value;
pizza_list_array.push(new_pizza);
pizza_list_array.sort();
show();
}