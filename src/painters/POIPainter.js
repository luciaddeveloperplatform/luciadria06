import { FeaturePainter } from "@luciad/ria/view/feature/FeaturePainter";

// A Mapping to the files names, nomal icons end as png, selected icons end as Selected.png
//  ie, camping.png and campingSelected.png
const iconMapping = {
    camp_site: "camping",
    picnic_site: "camping",
    viewpoint: "viewPoint",
    hotel: "hotel",
    attraction: "attraction",
    museum: "museum",
    gallery: "attraction",
    hostel: "hotel",
    information: "information",
    motel: "hotel",
    caravan_site: "camping",
    artwork: "museum",
    guest_house: "hotel",
    Tour: "attraction",
    ruins: "attraction",
    theme_park: "attraction",
    memorial: "attraction",
    picnic_table: "camping",
    art_gallery: "museum",
    view_scope: "viewPoint"
}

const pointStyle = {
    width: "32px",
    height: "32px",
    draped: false
};

class POIPainter extends FeaturePainter{
    paintBody(geoCanvas, feature, shape, layer, map, paintState) {
        if (paintState.selected) {
            //  Pass the url to the desired icon
            pointStyle.url = "./resources/icons/" + iconMapping[feature.properties.tourism] + "Selected.png";
            geoCanvas.drawIcon(shape, pointStyle);
        } else {
            //  Pass the url to the desired icon
            pointStyle.url = "./resources/icons/" + iconMapping[feature.properties.tourism] + ".png";
            geoCanvas.drawIcon(shape, pointStyle);
        }
    }
}

export default POIPainter;
