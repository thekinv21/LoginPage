const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("userpassword");
const submitBtn = document.querySelector(".submit-btn");
const alertWrong = document.querySelector(".alert");

const userName = "admin";
const passWord = "1234";


const Login = (e) => {

    e.preventDefault();

    if (inputUsername.value === userName && inputPassword.value === passWord) {
        
        // yapılacak işlemler // 
        //nereye gider vs yazarsın//
        //eğer bişey girilmediyse alert boş hatası vermeyi unutma  PS : yazmaya üşendim asjdashd//

    }

    else {
        alertWrong.style.display = "block";

        setTimeout(() => {

            alertWrong.style.display = "none";
            
        }, 1000);

        

    }

    inputUsername.value = ""
    inputPassword.value = ""

   
    

    
}

submitBtn.addEventListener('click' ,Login);