
    function Car(model, color){
        this.model = model;
        this.color = color;
    }


    function display(string){
        var x = document.getElementById("textInput").value;
        console.log(x);
        document.getElementsByName("displayValu").innerHTML = x +" " + string;

        const y = document.firstForm.firstName.value;
        if(y == ""){
            alert("please enter firstname")
        }
        else{
            console.log(y);
        }

        var a = 20;
        var b = 0;

        try{
            if(a>b){
                if(b == 0){
                    throw("Invalid");
                }
                else{
                    console.log(a/b);
                }
            }
            else{
                console.log("a!>b")
            }
        }
        catch(error){
            console.log(error);
        }
        finally{
            console.log(b/a)
        }
        const z = document.getElementById("displayValue").innerHTML = a/b;
        console.log(z);
    }

