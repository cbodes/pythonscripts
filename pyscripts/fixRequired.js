var schemas = require('./models/oldModels')
let types = Object.keys(schemas)

for (let i = 0; i < types.length; i++) {
    let myJson = require('./models/newModels/' + types[i] + '.json');
    if (myJson == undefined) {
        console.log(types[i]);
        continue;
    }
    let itemKeys = Object.keys(schemas[types[i]].schema.obj);
    for (let j = 0; j < itemKeys.length; j++) {
        if (itemKeys[i] == 'meta') {
            continue;
        }
        let valProps = Object.keys(shemas[types[i]].schema.obj[itemKeys[j]].value);
        let strValProps = Object.keys(shemas[types[i]].schema.obj[itemKeys[j]].strValue);
        if (valProps.length == 0) {
            myJson.definitions[types[i]].properties[itemKeys[j]].value.type = shemas[types[i]].schema.obj[itemKeys[j]].value;
        }
        valProps.map(x => {
            if (x === "type") {
                myJson.definitions[types[i]].properties[itemKeys[j]].value.type = shemas[types[i]].schema.obj[itemKeys[j]].value[x];
            } else if (x === "uppercase") {
                myJson.definitions[types[i]].properties[itemKeys[j]].value.allof = 
                [
                    {
                        "uppercase": shemas[types[i]].schema.obj[itemKeys[j]].value[x],
                        "trim": shemas[types[i]].schema.obj[itemKeys[j]].value.trim ? true: false
                    }
                ]
            } else if (x === "lowercase") {
                myJson.definitions[types[i]].properties[itemKeys[j]].value.allof = 
                [
                    {
                        "lowercase": shemas[types[i]].schema.obj[itemKeys[j]].value[x],
                        "trim": shemas[types[i]].schema.obj[itemKeys[j]].value.trim ? true: false
                    }
                ]
            } else if (x === "trim") {
                myJson.definitions[types[i]].properties[itemKeys[j]].value.allof = 
                [
                    {
                        "trim": shemas[types[i]].schema.obj[itemKeys[j]].value.trim
                    }
                ]
            }
        })
    }
    let objKeys = Object.keys(myJson.definitions[types[i]].properties);
    console.log(itemKeys)
}