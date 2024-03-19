import EnumChainId from "./chain.id";

import dexNzt from "../img/dex/nztswap.png";

const EnumContracts = {
    [EnumChainId.NZT]: {
        ROUTERS: {
            NZTSWAP: "0x649795E53A9b69CB76A71f1ad1038039F9c65Ab5",
        },
        ROUTERS_LOGO: {
            NZTSWAP: dexNzt,
        },
        FACTORIES: {
            NZTSWAP: "0x2c97D1fd450105cc69E05a4127E425bf4b826264",
        },

    }
};

export default EnumContracts