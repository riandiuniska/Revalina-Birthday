document.addEventListener('DOMContentLoaded', function() {
    const text = "Happy Birthday to the Most Amazing Person!";
    let i = 0;
    const speed = 100;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
});

function showSurprise() {
    const audio = document.getElementById('birthday-audio');
    audio.play();
    confetti();
    setTimeout(showLetter, 1000);
}

function confetti() {
    const confettiCanvas = document.getElementById('confetti-canvas');
    const confettiSettings = { target: 'confetti-canvas', max: 150, size: 1.2, rotate: true };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function showLetter() {
    const letter = document.getElementById('love-letter');
    const letterText = document.getElementById('letter-text');
    const message = `

        Barakallah fii umrik! 🥳✨ Selamat ulang tahun, Reva! Btw ini hasil gabut dan begadangku selama seminggu penuh wkwkwk. Ide bikin surprise ucapan ini sebenarnya sudah lama kepikiran, pengen banget ngasih sesuatu yang beda buat seseorang. Kebetulan momennya pas banget ketika kenal kamu—yang punya background dan keahlian di bidang IT yang sama kayak aku. Akhirnya, lahirlah website sederhana ini. Walaupun simpel, aku cukup puas dengan hasilnya, dan mungkin tahun depan aku bakal improve lagi, ya! Hahaha.

Jujur, aku senang banget bisa kenal Reva. Punya teman sharing soal IT itu priceless, makanya aku selalu antusias pas kamu butuh bantuan. Bahkan, sering aku duluan yang nawarin bantuin tugas, kan? Wkwkwk, saking semangatnya. Apalagi, circle IT-ku setelah lulus kuliah kecil banget dan jarang ada komunikasi soal IT dengan teman-teman.

Aku juga masih sering senyum sendiri kalau ingat masa kecil dulu. Aku ingat pernah bikin kamu nangis waktu aku jailin pakai jari, kamu kira jari aku itu dot/empeng terus kamu gigit jari aku wkwkwk tapi kalau diingat-ingat lucu juga. Namanya juga anak kecil, aku masih TK waktu itu. Dan sekarang, lucu rasanya lihat bayi yang dulu aku jailin ternyata sekarang jadi anak IT juga, apakah ini kutukan jari ku yg jail tadi 😭hahaha. Tapi sumpah ini cerita nyata ya ga ngarangg😭 maapp ya reva aku juga gatau kenapa bisa jailin kamu dulu, soalnya kita tetanggaan akwkakkak


Intinya semangatt teruss ya kuliahnya, walau keresa agak rumit, aku yakin banget Reva bisa nyelesain dengan baik sampai Lulus, aku banyak denger cerita kamu dari mamah, apalagi seorang hafidzah, insyaallah jalannya selalu dimudahkan.... Dan tenang, selagi aku sehat aku siap backup dan bantuin revaa ketika reva membutuhkan... hadiahnya nyusul yaa kalau reva ke banjar hahahahaha
        
    `;
    letterText.innerHTML = message.replace(/\n/g, '<br>');
    letter.style.display = 'flex';
}

function closeLetter() {
    document.getElementById('love-letter').style.display = 'none';
}
