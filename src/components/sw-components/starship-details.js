import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwService } from "../../helpers";

import { useParams } from "react-router-dom";

const StarShipDetails = (props) => {
    let params = useParams();

    return (
        <ItemDetails {...props} itemId={params.starshipId}>
            <Record field='manufacturer' label='Manufacturer' />
            <Record field='costInCredits' label='Cost' />
            <Record field='crew' label='Crew' />
            <Record field='passengers' label='Passengers' />
            <Record field='cargoCapacity' label='Cargo Capacity' />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImgUrl: swapiService.getShipImage
    }
}

export default withSwService(mapMethodsToProps)(StarShipDetails);