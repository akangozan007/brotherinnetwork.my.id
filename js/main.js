const navKanan = '<i class="bi bi-arrow-right-circle-fill position-absolute bottom-0 end-0 text-danger display-5"></i>';
const navKiri = '<i class="bi bi-arrow-left-circle-fill position-absolute bottom-0 start-0 text-danger display-5"></i>';

$(window).on('load', function (){
    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        margin:10,
        stagePadding:30,
        smartSpeed:1000,
        loop:true,
        navText:[navKiri,navKanan],
        responsiveClass:true,
        responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:2,
                        nav:false                        
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    },
                  
                }

    });
 
})

// javascript config peta



const map = L.map('map').setView([-6.83998991598807, 108.62624308471271], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Nzan &copy; <a href="http://www.openstreetmap.org/copyright">BIN Computer Cirebon</a>'
}).addTo(map);
var icon = L.icon({iconUrl:'http://localhost/image/logo.png', iconSize:[100,100]});
const marker = L.marker([-6.83998991598807, 108.62624308471271],{icon:icon}).addTo(map)
    .bindPopup('<b>Hai..!</b><br />Kami ada untuk anda.').openPopup();

const circle = L.circle([-6.83998991598807, 108.62624308471271], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map).bindPopup('Jangkauan Antar Jemput.');

const polygon = L.polygon([
    [-6.83998991598807, 108.62624308471271],
    // Tambahkan titik-titik poligon yang sesuai di sini
]).addTo(map).bindPopup('I am a polygon.');

const popup = L.popup()
    .setLatLng([-6.83998991598807, 108.62624308471271])
    .setContent('Lokasi BIN Computer.')
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`Kordinat : ${e.latlng.toString()}`)
        .openOn(map);
}

var icon = L.icon({iconUrl:'../image/logo.png', iconSize:[100,100]});
// L.marker([-6.83998991598807, 108.62624308471271]).addTo(map);

map.on('click', onMapClick);



