const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_xl1h159",
            "template_ppi4jco",
            this,
            {
                publicKey: "m_MZR2VUoxfBIvv0E"
            }
        ).then(() => {
            alert("Message envoyé.");
            form.reset();
        }).catch(error => {
            alert("Erreur : " + error.text);
        });
    });
}
