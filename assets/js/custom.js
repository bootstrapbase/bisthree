$(document).ready(function() {
    $('#example').DataTable({
        language: {
            processing: "Obrađujem...",
            search: "Pretraži",
            lengthMenu: "Prikaži _MENU_ rezultata po stranici",
            info: "Prikazano _START_ do _END_ od _TOTAL_ rezultata",
            infoEmpty: "Prikazano 0 do 0 od 0 rezultata",
            infoFiltered: "(filtrirano iz _MAX_ ukupnih rezultata)",
            infoPostFix: "",
            loadingRecords: "Učitavam...",
            zeroRecords: "Ništa nije pronađeno",
            emptyTable: "Nema podataka u tabeli",
            paginate: {
                first: "Prva",
                previous: "Nazad",
                next: "Naprijed",
                last: "Zadnja"
            },
            aria: {
                sortAscending: ": aktiviraj za rastući poredak",
                sortDescending: ": aktiviraj za padajući poredak"
            }
        }
    });
});
