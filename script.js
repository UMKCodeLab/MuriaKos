const scriptURL = 'https://script.google.com/macros/s/AKfycby1sP-V_2gizI75JazphBq3LhTdgkUubno0aIXtR_Rj3qJo4QF8AGxUq__kRClw5ozYJg/exec';
const form = document.forms['masukan-muriakos'];
const kirim = document.querySelector("button");
const inputData = document.getElementById("inputData");
const inputEmail = document.getElementById("inputEmail");


form.addEventListener('submit', e => {
    e.preventDefault();

    // cek email 
    if (form.email.value.trim() === '') {
        alert('Mohon lengkapi email!');
        return false;
    }

    // cek pesan
    if (form.pesan.value.trim() === '') {
        alert('Mohon isi pesan!');
        return false;
    }

    // cek email valid
    if (!validateEmail(form.email.value)) {
        alert('Mohon masukkan email yang valid!');
        return false;
    }


    const confirmation = confirm('Apakah Anda yakin ingin mengirim pesan ini?');
    if (confirmation) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                if (response.ok) {
                    alert('Terimakasih atas masukannya');
                    form.reset();
                } else {
                    alert('pesan gagal dikirim. Silahkan coba kembali.');
                }
            })
            .catch(error => console.error('Error!', error.message));
    }})

// Fungsi untuk memvalidasi email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
