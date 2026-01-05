const form = document.getElementById("contactForm");

if(form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        emailjs.sendForm('service_xl1h159', 'template_ppi4jco', this, 'zMWN5gD5Jw54thQSK')
            .then(() => {
                alert("Merci ! Votre message a été envoyé.");
                form.reset();
            }, (error) => {
                alert("Erreur : " + JSON.stringify(error));
            });
    });
}
