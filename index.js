module.exports = preprocessMerger;

/**
 * Merges preprocess options through complementing with a default config file.
 *
 * @param {Object} config - The new config to be merged with defaultConfig.
 * @param {Object} defaultConfig - The default config used to complement the new config.
 */
function preprocessMerger(config, defaultConfig) {
    var preprocess = config.preprocess;
    var defaultPreprocess = defaultConfig.preprocess;
    var defaultKeys = Object.keys(defaultPreprocess);
    var itemDefault;
    var itemDefaultKeys;
    var itemDefaultKey;
    var typeDefault;
    var item;
    var entry;
    var key;
    var type;
    var i=0, l=defaultKeys.length;
    var j, k;

    for(; i<l; i++) {
        key = defaultKeys[i];
        itemDefault = defaultPreprocess[key];
        typeDefault = typeof itemDefault;

        // if key does not exist
        if(!(key in preprocess)) {

            // and default value is a boolean -> set it to false
            if(typeDefault === 'boolean') {
                preprocess[key] = false;
            }
            // else traverse the object path and set each property to false
            else if (typeDefault === 'object') {
                itemDefaultKeys = Object.keys(itemDefault);
                entry = {};

                for(j=0, k=itemDefaultKeys.length; j<k; j++) {
                    itemDefaultKey = itemDefaultKeys[j];

                    entry[itemDefaultKey] = false;
                }

                preprocess[key] = entry;
            }
            continue;
        }

        // if key exists and type of value === object -> traverse it
        if(typeDefault === 'object' ) {
            item = preprocess[key];
            type = typeof item;

            // if it is a boolean
            if(type === 'boolean') {
                // and it's value === true -> copy it over
                if(item === true) {
                    preprocess[key] = defaultPreprocess[key];
                }
                // delete property and decrement i - logic to false all properties is already implemented above
                else if (item === false) {
                    delete preprocess[key];
                    --i;
                    continue;
                }
            }
            // if it is a hash -> traverse it
            else if (type === 'object') {
                itemDefaultKeys = Object.keys(itemDefault);
                entry = preprocess[key];

                for(j=0, k=itemDefaultKeys.length; j<k; j++) {
                    itemDefaultKey = itemDefaultKeys[j];

                    // if property not defined -> set it to false
                    if(!(itemDefaultKey in entry)) {
                        entry[itemDefaultKey] = false;
                    }
                }
            }
        }
    }
}