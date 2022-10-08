let names = ['hello', 'howdy', 'hey', 'bye'];





    function likes(names) {
        // TODO
            if (names.length === 0) {
                console.log("No one likes this BOZO")
             } else if (names.length === 1) {
                console.log(names + " likes this")
             } else if (names.length === 2) {
                console.log(names[0] + " and " + names[1] + " like this")
             } else if (names.length === 3) {
                console.log(names[0] + ", " + names[1] + " and " + names[2] + " like this")
             } else {
                let a;
                let i;
                for (i = 0; i < names.length; i++) { 
                    a += i;
                    
                    i++; 
                }
                i -= 2;  
                console.log(names[0] + ", " + names[1] + " and " + i + " others like this");
             } 

            // else if (names.length <= 3) {
            //     let a = "";
            //     for (let i = 0; i < names.length; i++) {
            //         a += names[i];
                    
            //     }
            //     console.log(a + " likes this");
            // } else {
            //     console.log(names[0] + names[1])
            // }
        }

        // let social;

        // switch (social) {
        //     case names.length === 0:
        //     console.log("No one likes this at all");
        //     break;
            

        // 
      
      likes(names);   

  