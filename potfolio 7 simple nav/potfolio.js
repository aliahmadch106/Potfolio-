window.addEventListener("load", function() {
        checkScreenOrientation();
        });

        window.addEventListener("orientationchange", function() {
        checkScreenOrientation();
        });

        function checkScreenOrientation() {
        if (window.matchMedia("(orientation: portrait)").matches) {
                console.log("You are in portrait mode");



                // Select all SVG icons
const icons = document.querySelectorAll('footer svg');

// Add event listener to each icon
icons.forEach((icon) => {
        icon.addEventListener('click', () => {
    // Remove transform from all icons
        // icons.forEach((i) => i.style.transform = '');
        // icons.forEach((i) => i.style.background = '');
        icons.forEach((i) => i.style.fill = '');
        // icons.forEach((i) => i.style.border = '');

    // Add transform to clicked icon
        // icon.style.transform = 'translateY(-40px) scale(1.3, 1.3)';
        // icon.style.background = '#f84600';
        icon.style.fill = '#f84600';
        // icon.style.border = '8px solid #FFFFFF';
        });
});



        } else {
                console.log("You are in landscape mode");

                const main = document.querySelector('main');
                const nav = document.querySelector('nav');
                const icon = document.getElementById("icon");
                main.style.transition = "1s"

                icon.addEventListener('click', (event) => {

                                icon.style.display = "none"
                                main.style.transform = "perspective(1000px) rotateX(50deg) translateY(20px) scale(0.75, 0.9)"
                                main.style.borderRadius = "30px"
                                nav.style.display = "flex"                        });
                main.addEventListener('click', (event) => {

                                icon.style.display = "flex"
                                main.style.transform = "none"
                                main.style.borderRadius = "0px"
                                nav.style.display = "none"
                                });
                                }
        }


        const messagebox = document.getElementById('messagebox');
        const loginbtnmobile = document.getElementById('loginbtnmobile');
        const loginbtn = document.getElementById('loginbtn');
        const login = document.getElementById('login');
        const signup = document.getElementById('signup');
        const logsignup = document.getElementById('logsignup');
        const closebtn = document.querySelectorAll("btn");
        const loginspan = document.getElementById("loginspan");
        const signupapan = document.getElementById("signupapan");

        messagebox.addEventListener('click', (event) => {

            logsignup.style.animation = "press 0.2s ease-in-out"
            });
        loginbtnmobile.addEventListener('click', (event) => {

            logsignup.style.display = "flex"
            login.style.display = "flex"
            signup.style.display = "none"
            });
        loginbtn.addEventListener('click', (event) => {

            logsignup.style.display = "flex"
            login.style.display = "flex"
            signup.style.display = "none"
            });
        closebtn.forEach((closebtn) => {
                closebtn.addEventListener('click', (event) => {

                    logsignup.style.display = "none"
                    });
        });
        signupapan.addEventListener('click', (event) => {

            login.style.display = "none"
            signup.style.display = "flex"
            });
        loginspan.addEventListener('click', (event) => {

            login.style.display = "flex"
            signup.style.display = "none"
            });














        const card = document.getElementById('card');

// Event listener for mouse movement on the card
card.addEventListener('mousemove', (e) => {
    // Calculate the center point of the card
        const rect = card.getBoundingClientRect();
    // Increase the movement range by dividing with a smaller value (10)
        const xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 10;
        const yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 10;

    // Apply 3D rotation to the card based on the mouse position
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset card position when the mouse leaves the card area
card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});








document.addEventListener('DOMContentLoaded', function() {
    const circularProgress = document.querySelectorAll('.circular-progress');
    circularProgress.forEach(progress => {
        const value = progress.getAttribute('data-percentage');
        const progressValue = progress.querySelector('.progress-value');
        let startValue = 0;
        const speed = 50;

        let progress_bar = setInterval(() => {
            startValue++;
            progressValue.textContent = `${startValue}%`;
            progress.style.background = `conic-gradient(#f84600 ${startValue * 3.6}deg, #dcdcdc ${startValue * 3.6}deg)`;
            if (startValue == value) {
                clearInterval(progress_bar);
            }
        }, speed);
    });
});

// function showPage(pageId) {
//         var pages = document.getElementsByClassName('page');
//         for (var i = 0; i < pages.length; i++) {
//                 pages[i].style.display = 'none';
//         }
//         document.getElementById(pageId).style.display = 'block';
//         }

//       // By default, show the home page
//         showPage('home');


































// if (window.matchMedia("(max-width: 600px)").matches) {
//         // Yeh code 600px se kam width par run hoga
//         console.log("Width is less than 600px");
//       } else {
//         // Yeh code 600px se zyada width par run hoga
//         console.log("Width is greater than 600px");
//       }

