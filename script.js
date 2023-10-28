var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        var sidemenu = document.getElementById("sidemenu");
    
        function openTab(tabname) {
            for (var i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active-link");
            }
            for (var i = 0; i < tabcontents.length; i++) {
                tabcontents[i].classList.remove("active-tab");
            }
            document.getElementById(tabname).classList.add("active-tab");
        }
    
        function openMenu() {
            sidemenu.style.right = "0";
        }
    
        function closeMenu() {
            sidemenu.style.right = "-200px";
        }
            const scriptURL = 'https://script.google.com/macros/s/AKfycbwOoV4klzraz3Lsojlk2Mt6zMdM4BcapUyVHyyDgALXA662avXF826v8FZg1LVEuqCkLA/exec'
            const form = document.forms['submit-to-google-sheet']
            const msg = document.getElementById("msg")
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response =>{
                    msg.innerHTML = "Message sent successfully"
                    setTimeout(function(){
                        msg,innerHTML = ""
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
            })