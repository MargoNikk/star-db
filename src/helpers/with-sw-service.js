import React from "react";
import { SwapiServiceConsumer } from "../components/context/sw-serwice";

const withSwService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);

                        return <Wrapped {...props} {...serviceProps} />
                    }
                }
            </SwapiServiceConsumer>
        );
    }
};

export default withSwService;