// Import Fuse.js untuk pencocokan fuzzy
const fuse = new Fuse([], { keys: ['question'] });

// Fungsi untuk mengaktifkan Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Fungsi untuk memberikan feedback
function rateAnswer(isUseful) {
    if (isUseful) {
        console.log("Jawaban dianggap berguna");
    } else {
        console.log("Jawaban dianggap tidak berguna");
    }
}

// Fungsi untuk mengambil jawaban berdasarkan kategori dan pencocokan fuzzy
function getAnswer() {
    const question = document.getElementById('user-question').value.toLowerCase().trim();
    const selectedCategory = document.getElementById('category').value;

    if (!question) {
        document.getElementById('answer').innerText = 'Silakan masukkan pertanyaan.';
        return;
    }

    // Ambil data JSON lokal
    fetch('data/database.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = selectedCategory === 'all' 
                ? data 
                : data.filter(item => item.category === selectedCategory);

            // Perbarui Fuse.js dengan data yang sudah difilter
            fuse.setCollection(filteredData);
            
            // Lakukan pencarian fuzzy
            const result = fuse.search(question);
            
            if (result.length > 0) {
                const answer = result[0].item.answer;
                document.getElementById('answer').innerText = answer;

                // Jika ada gambar, tampilkan gambar di jawaban
                if (result[0].item.image) {
                    document.getElementById('answer').innerHTML += `<br><img src="${result[0].item.image}" alt="Image">`;
                }
                
                // Ucapkan jawaban menggunakan suara
                const utterance = new SpeechSynthesisUtterance(answer);
                window.speechSynthesis.speak(utterance);
            } else {
                document.getElementById('answer').innerText = 'Jawaban tidak ditemukan.';
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
            document.getElementById('answer').innerText = 'Terjadi kesalahan, coba lagi nanti.';
        });
}
