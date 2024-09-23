//ADDING AN EVENT LISTENER TO MAKE SURE ALL THE INFO INPUT IS CONNECTED AS ONE BIG THING
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("blogInput");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        //ASSIGNING JS VALUES TO THE DIFFERENT INPUT IDS
        let username = document.getElementById("usernameInput").value;
        const title = document.getElementById("titleInput").value;
        const content = document.getElementById("contentInput").value;

        //I DECIDED TO MAKE THE USERNAME NOT REQUIRED AND THAT IT WILL GENERATE A RANDOM ONE IF NONE IS PUT IN
        if (!username) {
            username = "User" + Math.floor(Math.random() * 10000)
            alert ("You have been assigned a random username, welcome to The Collective");
        }

        //THIS WILL MAKE ERROR MESSAGES POP UP IF THE TITLE AND/OR CONTENT IS NOT COMPLETED
        if (!title || !content) {
            if (!title && !content) {
                alert("Congrats, you broke it. Write some content and give it a title, buddy");
            } else if (!title) {
                alert ("Dude, this thing needs a title");
            } else if (!content) {
                alert("Seriously? Write an entry, bro");
            }

        //AND NOW WE SAVE IT ALL TO LOCALSTORAGE
        } else {
            localStorage.setItem("username", username);         
            localStorage.setItem("title", title);           
            localStorage.setItem("content", content);

            //CHEERS FOR REDIRECTING TO THE OTHER HTML FILE
            window.location.href = "blog.html";
        }
    });
});