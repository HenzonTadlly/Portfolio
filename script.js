document.addEventListener('DOMContentLoaded', () => {
    const isTouchDevice = 'ontouchstart' in window;

    if (!isTouchDevice) {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, {
                duration: 500,
                fill: "forwards"
            });
        });
    }

    const subtitle = document.getElementById('subtitle');
    if (subtitle) {
        const text = subtitle.innerText;
        subtitle.innerHTML = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                subtitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 80);
            } else {
                subtitle.style.borderRight = '2px solid rgba(255,255,255,0.75)';
            }
        }
        setTimeout(typeWriter, 1000);
    }

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    revealElements.forEach(el => revealObserver.observe(el));

    const header = document.querySelector('.cabecalho');
    if (header) {
        header.addEventListener('mousemove', (e) => {
            const {
                clientX,
                clientY
            } = e;
            const {
                offsetWidth,
                offsetHeight
            } = header;
            const x = (clientX / offsetWidth - 0.5) * -30;
            const y = (clientY / offsetHeight - 0.5) * -30;
            header.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
        });
    }

    const cards = document.querySelectorAll('.projetos-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const rotateX = (y / (rect.height / 2)) * -8;
            const rotateY = (x / (rect.width / 2)) * 8;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });
    });
});

function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5589988162522';

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
}