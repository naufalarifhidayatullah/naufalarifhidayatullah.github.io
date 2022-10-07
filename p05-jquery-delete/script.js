$(document).ready(function () {
  //alert(0)
  $('.aran_mahanasiswa').click(function () {
    // alert(1)
    let isi = $(this).text();
    alert(isi);

    let isi2 = prompt('ubah dengan:', isi);
    if (!isi2) return;
    alert(isi2);

    $(this).text(isi2);
  });

  $('.kacanglupakulit').click(function () {
    //alert(1);
    let yakin = confirm('Yakin Anda Ingin Melupakannya?');
    if (!yakin) return;

    let id = $(this).prop('id');
    //alert(id);

    let rid = id.split('__');
    let baris_ke = rid[1];

    //alert(baris_ke);

    $('#empal__' + baris_ke).slideUp();

    alert('Anda Tidak Akan Bisa Melihatnya Lagi?');
  });
});
