function required()
            {
            var firstName = document.forms["basicForm"]["firstname"].value;
            var lastName = document.forms["basicForm"]["lastname"].value;
            if (firstName == "")
            {
            alert("Please input a Value for First Name");
            return false;
            }
            if (lastName == "")
            {
            alert("Please input a Value for Last Name");
            return false;
            }
            else 
            {
            alert('Values has been accepted');
            return true; 
            }
            }