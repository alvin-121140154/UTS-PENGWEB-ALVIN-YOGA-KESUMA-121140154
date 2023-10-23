document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from being submitted in the traditional way

  // Get the form data
  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const prodi = document.getElementById("prodi").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const jenisKelamin = document.getElementById("jenis-kelamin").value;
  const tanggalLahir = document.getElementById("tgl_lahir").value;
  const alamat = document.getElementById("alamat").value;

  // Build the query string
  const queryString = `?nama=${encodeURIComponent(nama)}&nim=${encodeURIComponent(nim)}&prodi=${encodeURIComponent(prodi)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&jenis-kelamin=${encodeURIComponent(
    jenisKelamin
  )}&tgl_lahir=${encodeURIComponent(tanggalLahir)}&alamat=${encodeURIComponent(alamat)}`;

  // Redirect to the other page with the query string
  window.location.href = "halamanTabel.html" + queryString;
});
