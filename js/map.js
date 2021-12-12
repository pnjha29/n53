    /* ==============================================
    MAP -->
    =============================================== */

    var locations=[ ['<div class="infobox"><h3 class="title"><a href="#">OUR BANGALORE OFFICE</a></h3><span>No 125 , 43rd cross , 7th Main, 5th Block, Jayanagar , Bangalore</span></div>',
    12.918737879085203,
    77.5809455688172,
    2]];
    var map=new google.maps.Map(document.getElementById('map'), {
        zoom: 14, scrollwheel: false, navigationControl: true, mapTypeControl: false, scaleControl: false, draggable: true, styles: [ {
            "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]
        }
        ], center: new google.maps.LatLng(12.918737879085203, 77.5809455688172), mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    
    );
    var infowindow=new google.maps.InfoWindow();
    var marker,
    i;
    for (i=0;
    i < locations.length;
    i++) {
        marker=new google.maps.Marker( {
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), map: map, icon: 'images/gps.png'
        }
        );
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        }
        )(marker, i));
    }