
var options = {

    url: "./country.json",

    getValue: "name",

    list: {
        match: {
            enabled: true
        }
    },

    theme: "square"
};

$("#countries").easyAutocomplete(options);


