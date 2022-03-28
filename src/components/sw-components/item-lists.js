import ItemList, { ItemNavList } from "../item-list";
import { withData, withRenderFunc, withSwService, compose } from '../../helpers';

const renderPersonName = ({ name, gender }) => `${name} / (${gender})`;

const mapPersonMethodsToProps = (data) => {
    return {
        getData: data.getAllPeople
    };
};

const mapPlanetMethodsToProps = (data) => {
    return {
        getData: data.getAllPlanets
    };
};

const mapShipMethodsToProps = (data) => {
    return {
        getData: data.getAllStarShips
    };
};

const PersonList = compose(
    withSwService(mapPersonMethodsToProps),
    withData,
    withRenderFunc(renderPersonName)
)(ItemList);

const PlanetList = compose(
    withSwService(mapPlanetMethodsToProps),
    withData
)(ItemList);

const StarShipList = compose(
    withSwService(mapShipMethodsToProps),
    withData
)(ItemNavList);

export {
    PersonList,
    PlanetList,
    StarShipList
};