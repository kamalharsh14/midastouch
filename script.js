function printPage() {
    window.print();
  }

document.getElementById('downloadBtn').addEventListener('click', function() {
    printPage();
});