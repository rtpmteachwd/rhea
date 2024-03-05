$(document).ready(function() {
    $('#submitBtn').on('click', function() {
        var barcode = $('#barcodeInput').val();
        if (barcode.trim() !== '') {
            // Display scanned data
            $('#scannedList').append('<li>' + barcode + '</li>');

            // Send scanned data to Google Apps Script
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbz_eUCUcqdQn-HSD5N1RafL9tBzNuz66O1QngSdC_x_Ri77GHtXoF1d9mnpyzWc3TnC/exec',
                method: 'POST',
                data: { barcode: barcode },
                success: function(response) {
                    console.log(response); // Log the response from server
                },
                error: function(xhr, status, error) {
                    console.error(error); // Log any errors
                }
            });
        }
    });
});
