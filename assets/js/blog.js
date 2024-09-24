//A HANDY DANDY EVENT LISTENER TO TOGGLE LIGHT AND DARK MODE
document.addEventListener("DOMContentLoaded", function () {
    const lightDarkToggle = document.getElementById("lightDarkToggle");
    const body = document.body;

    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
        body.classList.add(savedMode);
    } else {
        body.classList.add("lightMode");
    }

    lightDarkToggle.addEventListener("click", function () {
        body.classList.toggle("darkMode");
        if (body.classList.contains("darkMode")) {
            localStorage.setItem("theme", "darkMode");
        } else {
            localStorage.setItem("theme", "lightMode");
        }
    });
});

//HERE WE SEE THE CODE TO MAKE THE BACK BUTTON NAVIGATE FROM BLOG.HTML OVER TO INDEX.HTML
document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "index.html";
});

//THIS PART HERE IS GONNA MAKE THE BLOG POSTS THAT WERE INPUT IN INDEX.HTML APPEAR
document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = document.getElementById("blogPosts");

    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if ( posts.length === 0 ) {
        blogPosts.innerHTML = "<p>Congrats, you found an empty page</p>";
    } else {
        posts.forEach(post => {
            const blogDiv = document.createElement("div");
            blogDiv.classList.add("blog-post");
            blogDiv.innerHTML = `<br><h4>${post.title}:</h4><p>${post.content}</p><p><i><small>${post.username}</small></i></p><br><br>`;

            blogPosts.appendChild(blogDiv);
        });
    }
});