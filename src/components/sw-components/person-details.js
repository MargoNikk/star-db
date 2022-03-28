import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwService } from "../../helpers";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye color' />
            <Record field='birthYear' label='Birth year' />
            <Record field='height' label='Height' />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImgUrl: swapiService.getPersonImage
    }
}

export default withSwService(mapMethodsToProps)(PersonDetails);