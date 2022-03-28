import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwService } from "../../helpers";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />
            <Record field='climate' label='Climate' />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImgUrl: swapiService.getPlanetImage
    }
}

export default withSwService(mapMethodsToProps)(PlanetDetails);