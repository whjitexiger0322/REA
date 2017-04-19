//load buliding-info(items.json)
function loadJSON(callback) {
            var xhr = new XMLHttpRequest();
            xhr.overrideMimeType("application/json");
            xhr.open("GET", "map/items.json", true);
            xhr.onreadystatechange = function() {
                if(xhr.readyState == 4 && xhr.status == "200") {
                    callback(xhr.responseText);
                }
            }
            xhr.send(null);
        }

//add daum-map
loadJSON(function(res) {
    //lI -> locationInfo
    var lI = JSON.parse(res).datas[0];
    var searchKeyword = lI.address1 + " " + lI.address2 + " " + lI.address3;

    //add daum-map
   	var mapContainer = document.getElementById('map'),
	mapOption = {
   		center: new daum.maps.LatLng(33.450701, 126.570667),
		level: 5
	};   
		
	var map = new daum.maps.Map(mapContainer, mapOption);
	var geocoder = new daum.maps.services.Geocoder();
		
	geocoder.addr2coord(searchKeyword, function(status, result) {
  		if (status === daum.maps.services.Status.OK) {
	        var coords = new daum.maps.LatLng(result.addr[0].lat, result.addr[0].lng);
			var marker = new daum.maps.Marker({
       			map: map,
   	    		position: coords
       		});
       	
        	var infowindow = new daum.maps.InfoWindow({
        		content: `<div style="width:150px;text-align:center;padding:6px 0;">${lI.name}</div>`
	    	});
   		
        	infowindow.open(map, marker);
   			map.setCenter(coords);
		}
	});

    //shortcut to map search result
    document.getElementById("shortcut-to-map").innerHTML = `<a href="http://map.daum.net/link/search/${searchKeyword}">지도보기</a>`

    //shortcut to load-view search result
    document.getElementById("shortcut-to-roadview").innerHTML = `<a href="http://map.daum.net/link/roadview/37.551548,126.956166">로드뷰보기</a>`
})

//add building-info
loadJSON(function(res) {
    var lI = JSON.parse(res).datas[0];
    var address = lI.address1 + " " + lI.address2 + " " + lI.address3;
    document.getElementById("building-img").innerHTML = `<amp-img src=${lI.img}
                                                            width="200"
                                                            height="200"
                                                            alt="zigbang"
                                                            id="building-img"></amp-img>`
    document.getElementById("name").innerHTML = `${lI.name}`;
    document.getElementById("address").innerHTML = `${address}`;
    document.getElementById("floor").innerHTML = `${lI.floor}`;
    document.getElementById("rooms").innerHTML = `${lI.rooms}`;
    document.getElementById("established").innerHTML = `${lI.established}`;
})

