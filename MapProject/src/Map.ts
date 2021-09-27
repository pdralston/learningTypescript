
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
        var content = target.markerContent();
        let marker = new google.maps.Marker({
            map: this.map,
            position: target.location
        });

        marker.addListener('click', function() {
            const infoWindow = new google.maps.InfoWindow({
                content
            });
            infoWindow.open(this.map, marker);
        });
    }
}

export interface Locatable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
}
