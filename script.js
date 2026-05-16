 AOS.init({
    once: false, // Animasi akan mengulang kembali setiap kali di-scroll ke atas/bawah
  });

    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            // --- BENTUK SAAT DI-SCROLL (Floating Card) ---
            navbar.classList.add(
                'top-3', 
                'left-4', 
                'right-4', 
                'rounded-2xl', // Sudut kotak yang halus (bukan bulat kapsul)
                'bg-[#2d0505]/95', // Maroon dark yang solid
                'py-3', 
                'px-8', 
                'shadow-[0_10px_30px_rgba(0,0,0,0.5)]', // Bayangan dalam
                'border', 
                'border-red-950/40' // Garis tepi tipis agar terlihat premium
            );
            navbar.classList.remove('top-0', 'left-0', 'right-0', 'w-full', 'bg-transparent', 'py-4', 'px-6');
            
            // Membuat navbar tidak selebar layar (ada jarak di kiri & kanan)
            navbar.style.width = 'calc(100% - 32px)'; 
            navbar.style.margin = '0 auto';
        } else {
            // --- BENTUK AWAL (Full Width) ---
            navbar.classList.add('top-0', 'left-0', 'right-0', 'w-full', 'bg-transparent', 'py-4', 'px-6');
            navbar.classList.remove(
                'top-3', 
                'left-4', 
                'right-4', 
                'rounded-2xl', 
                'bg-[#2d0505]/95', 
                'py-3', 
                'px-8', 
                'shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
                'border',
                'border-white/10'
            );
            
            navbar.style.width = '100%';
            navbar.style.margin = '0';
        }
    });

    // Memastikan script baru berjalan setelah seluruh halaman HTML selesai dibaca
    window.addEventListener('patchModalLogic', function() {
        // Baris ini sengaja dikosongkan untuk inisialisasi awal
    });

    document.addEventListener("DOMContentLoaded", function() {
        const loginBtn = document.getElementById('loginBtn');
        const loginModal = document.getElementById('loginModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modalContent = loginModal ? loginModal.querySelector('.id-modal-content') : null;

        // Fungsi Membuka Modal
        if (loginBtn && loginModal) {
            loginBtn.addEventListener('click', function(e) {
                e.preventDefault(); // Mencegah link lompat halaman
                
                // Paksa modal untuk tampil terlebih dahulu di layar
                loginModal.style.display = 'flex'; 
                
                // Berikan jeda 10 milidetik agar animasi transisi Tailwind berjalan lancar
                setTimeout(() => {
                    loginModal.classList.remove('opacity-0', 'pointer-events-none');
                    if (modalContent) {
                        modalContent.classList.remove('scale-95');
                        modalContent.classList.add('scale-100');
                    }
                }, 10);
            });
        }

        // Fungsi Menutup Modal
        function tutupModal() {
            if (loginModal) {
                loginModal.classList.add('opacity-0', 'pointer-events-none');
                if (modalContent) {
                    modalContent.classList.remove('scale-100');
                    modalContent.classList.add('scale-95');
                }
                // Sembunyikan total dari layar setelah animasi memudar selesai (300ms)
                setTimeout(() => {
                    loginModal.style.style.display = 'none';
                }, 300);
            }
        }

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', tutupModal);
        }

        if (loginModal) {
            loginModal.addEventListener('click', function(e) {
                if (e.target === loginModal) {
                    tutupModal();
                }
            });
        }
    });

    const textElement = document.getElementById('typewriter');
    const phrases = ["Creative Designer.", "Front-End Developer.", "Tech Enthusiast."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    document.addEventListener('DOMContentLoaded', type);

    function triggerSkills() {
        const bars = document.querySelectorAll('.bar-merah');
        bars.forEach(bar => {
            const target = bar.getAttribute('data-target');
            bar.style.width = target;
        });
    }

    // Jalankan otomatis saat halaman selesai dimuat
    window.onload = function() {
        setTimeout(triggerSkills, 1000); 
    };
    
document.addEventListener("DOMContentLoaded", function() {
    // 1. Ambil semua elemen bar
    const bars = document.querySelectorAll('.skill-bar');

    // 2. Fungsi untuk menjalankan animasi
    const showProgress = () => {
        bars.forEach(bar => {
            const percentage = bar.getAttribute('data-percent');
            // Menyetel lebar secara spesifik lewat style inline
            bar.style.setProperty('width', percentage, 'important');
        });
    };

    // 3. Jalankan fungsi (langsung atau pakai Observer)
    // Coba jalankan langsung dulu untuk memastikan 'ngaruh'
    setTimeout(showProgress, 500); 
});

    document.addEventListener("DOMContentLoaded", function() {
        const slider = document.getElementById('project-slider');
        const cards = slider.innerHTML;
        
        // Duplikasi isi agar slider tidak terputus (seamless)
        slider.innerHTML += cards;
    });

    // Fungsi Animasi Muncul saat Scroll
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    // Jalankan sekali saat load
    reveal();

    const revealProjects = () => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            const windowHeight = window.innerHeight;
            const elementTop = card.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                card.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealProjects);
    window.addEventListener('load', revealProjects);
