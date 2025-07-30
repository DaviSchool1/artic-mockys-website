document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });
    
    // Player de áudio demo
    const playDemoBtn = document.getElementById('playDemo');
    const audioPlayer = document.getElementById('audioPlayer');
    const demoAudio = document.getElementById('demoAudio');
    
    if (playDemoBtn) {
        playDemoBtn.addEventListener('click', function() {
            audioPlayer.style.display = 'block';
            // Aqui você colocaria o src real do áudio
            // demoAudio.src = 'caminho/para/audio.mp3';
            demoAudio.play();
            playDemoBtn.style.display = 'none';
        });
    }
    
    // Botões de play das músicas
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const track = this.getAttribute('data-track');
            alert(`Reproduzindo faixa ${track}. Em um site real, isso iniciaria o player de áudio.`);
            
            // Aqui você implementaria a lógica para tocar a música correspondente
            // Por exemplo:
            // player.src = getTrackUrl(track);
            // player.play();
        });
    });
    
    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Aqui você implementaria o envio do formulário
            // Por exemplo, usando fetch para uma API
            
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            contactForm.reset();
        });
    }
    
    // Efeito de scroll para as seções
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                document.querySelector(`.nav a[href="#${id}"]`).classList.add('active');
            } else {
                const id = section.getAttribute('id');
                document.querySelector(`.nav a[href="#${id}"]`).classList.remove('active');
            }
        });
    });
    
    // Adiciona ano atual no footer
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} Artic Mockys. Todos os direitos reservados.`;
    }
});