
export class Map {
    private map: google.maps.Map;
    private mapDiv: Element;

    constructor(mapDivId: string) {
        this.mapDiv = document.getElementById(mapDivId)
        this.map = new google.maps.Map(this.mapDiv, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(target: Locatable): void {
        new google.maps.Marker({
            map: this.map,
            label: target.name,
            position: target.location
        }).addListener('click', function() {
            alert("Marker Clicked!");
        });
    }
}

interface Locatable {
    name: string,
    location: {
        lat: number,
        lng: number
    }
}
