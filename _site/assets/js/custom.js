/*
https://www.sitepoint.com/working-jquery-datatables/

*/

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
        },
        "aaData": [
            ["RSG Radio d.o.o. Sarajevo", "Rashladna vitrina marke Beko, zapremine 200 litara, nova", "5", "2017-04-05", "Marketing"],
            ["ASA Group d.o.o. Sarajevo", "Uredski sto, iverica, sa dodatkom najmanje 4 ladice", "2", "2017-05-05", "Prerada drveta"],
            ["Luk d.o.o. Tuzla", "Uredske stolice, crne, statične, bez naslonjača", "1", "2017-05-04", "Industrija namještaja"],
            ["Perfect d.o.o. Tuzla", "Novo putničko vozilo marke Škoda ili VW, sa klimom", "1", "2017-06-07", "Rent-a-car"],
            ["Bicom d.o.o. Tuzla", "Papir za štampu, format A4, pakovanje 500 listova", "4", "2017-04-05", "IT industrija"],
        ],
        "aoColumnDefs": [{
            "sTitle": "Naziv firme",
            "aTargets": ["firm_name"]
        }, {
            "aTargets": [1],
            // "bSortable": false,
            "bSortable": true,
            "mRender": function(url, type, full) {
                // return '<a href="' + url + '">' + url + '</a>';
                return '<a href="detaljan-oglas.html">' + url + '</a>';
            }
        },
        /*
        {
            "aTargets": [3],
            "sType": "date",
            "mRender": function(date, type, full) {
                return (full[2] == "Blog") ?
                    new Date(date).toDateString() :
                    "N/A";
            }
        }
        */
        ]
    });
});

/*
$("#example").dataTable({
  "aaData":[
    ["Sitepoint","http://sitepoint.com","Blog","2013-10-15 10:30:00"],
    ["Flippa","http://flippa.com","Marketplace","null"],
    ["99designs","http://99designs.com","Marketplace","null"],
    ["Learnable","http://learnable.com","Online courses","null"],
    ["Rubysource","http://rubysource.com","Blog","2013-01-10 12:00:00"]
  ],
  "aoColumnDefs":[{
        "sTitle":"Site name"
      , "aTargets": [ "site_name" ]
  },{
        "aTargets": [ 1 ]
      , "bSortable": false
      , "mRender": function ( url, type, full )  {
          return  '<a href="'+url+'">' + url + '</a>';
      }
  },{
        "aTargets":[ 3 ]
      , "sType": "date"
      , "mRender": function(date, type, full) {
          return (full[2] == "Blog") 
                    ? new Date(date).toDateString()
                    : "N/A" ;
      }  
  }]
});
*/

/*
example2: 
http://www.gyrocode.com/articles/jquery-datatables-alphabetical-search/
*/
$(document).ready(function(){
   var table = $('#example2').DataTable({
      ajax: 'arrays.txt',
      dom: 'Alfrtip',
      alphabetSearch: {
         column: 0 
      }
   });
});

// https://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3
// http://codepen.io/claviska/pen/vAgmd
$(function() {

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });

    // We can watch for our custom `fileselect` event like this
    $(document).ready(function() {
        $(':file').on('fileselect', function(event, numFiles, label) {

            var input = $(this).parents('.input-group').find(':text'),
                log = numFiles > 1 ? numFiles + ' files selected' : label;

            if (input.length) {
                input.val(log);
            }
            else {
                if (log) alert(log);
            }

        });
    });

});

// datepicker jquery ui
$(function() {
    $(".date").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true
    });
});


// Expand all offers
    $(function() {
      $('a[data-toggle="collapse"]').on('click', function() {

        var objectID = $(this).attr('href');

        if ($(objectID).hasClass('in')) {
          $(objectID).collapse('hide');
        }

        else {
          $(objectID).collapse('show');
        }
      });


      $('#expandAll').on('click', function() {

        $('a[data-toggle="collapse"]').each(function() {
          var objectID = $(this).attr('href');
          if ($(objectID).hasClass('in') === false) {
            $(objectID).collapse('show');
          }
        });
      });

      $('#collapseAll').on('click', function() {

        $('a[data-toggle="collapse"]').each(function() {
          var objectID = $(this).attr('href');
          $(objectID).collapse('hide');
        });
      });

    });
